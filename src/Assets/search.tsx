import {FcSearch} from "react-icons/fc";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

type SearchProps = {
    loadUser: (userName:string) => Promise<void>;
}



export const Search = ({loadUser}: SearchProps) => {
    const {t} = useTranslation("global");
    const [userName, setUserName] = useState('');
  return (
    <div className='ContainerSearch'>
        <h2>{t("GitHub.Search")}</h2>
        <p>{t("GitHub.DescriptOne")}</p>
        <div className='FormSearch'>
            <input onChange={e => setUserName(e.target.value)} 
            className="InputSearch" 
            type='text' 
            placeholder={t("GitHub.DescriptTwo")}/>
            <button 
            className="ButtonSearch" 
            onClick={()=>loadUser(userName)}>
                <FcSearch/>
            </button> 
        </div>
    </div>
  )
}
