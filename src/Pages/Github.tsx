import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Search } from '../Assets/search';
import { UserProps } from '../Types/User';
import github from '../Img/github.png';
import '../Styles/Github.css';


export default function Github(): JSX.Element{
  
    const [user, setUser] = useState<UserProps | null>(null)
  
    const loadUser = async(userName: string)=> {
        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();
        const url = data.avatar_url;
        const login = data.login;
        const bio = data.bio;
        const blog = data.blog;
        const followers = data.followers;
        const following = data.following; 
        console.log(data)
        const userData: UserProps = {
            url, 
            login, 
            bio, 
            blog, 
            followers, 
            following
        };
        setUser(userData)
    }
    
    return( 
        <div className="Github">
            <div className='LogoGitHub'>
                <img alt='Pesquisar usuário' src={github} />
            </div>
            <Search loadUser={loadUser}/>
            {user && 
            <div className='User'>
                <h2>{user.login}</h2>
                <img className='UserImage' src={user.url} alt='User'/>
                <div className='Description'>
                    <p>Minha bio: {user.bio}</p>
                    <p>Meu site: {user.blog}</p>
                    <p>Seguidores: {user.followers} | Seguindo: {user.following}</p>
                </div>
            </div>
            }
            <Link to= '/'><button>H O M E</button></Link>
        </div>
    ) 
}