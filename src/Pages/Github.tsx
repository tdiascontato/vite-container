import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Search } from '../Assets/search';
import { UserProps } from '../Types/User';
import github from '../Img/github.png';
import '../Styles/Github.css';


export default function Github(): JSX.Element{
    const {t} = useTranslation("global");
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
                    <p>{t("GitHub.Bio")} {user.bio}</p>
                    <p>{t("GitHub.Site")} {user.blog}</p>
                    <p>{t("GitHub.Seguidores")} {user.followers} | {t("GitHub.Seguindo")} {user.following}</p>
                </div>
            </div>
            }
        </div>
    ) 
}