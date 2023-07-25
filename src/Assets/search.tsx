import {FcSearch} from "react-icons/fc";
import { useState } from "react";

type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
}



export const Search = ({loadUser}: SearchProps) => {
    const [userName, setUserName] = useState('');
  return (
    <div className='ContainerSearch'>
        <h2>Buscar usuários!</h2>
        <p>Procure pelo username e encontre mais informações!</p>
        <div className='FormSearch'>
            <input onChange={e => setUserName(e.target.value)} 
            className="InputSearch" 
            type='text' 
            placeholder='Digite o username do usuário!'/>
            <button 
            className="ButtonSearch" 
            onClick={()=>loadUser(userName)}>
                <FcSearch/>
            </button> 
        </div>
    </div>
  )
}
