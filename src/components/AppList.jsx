import { useState } from 'react'


import {papers} from "../data/app_data"


export default function AppList (){

    const [papersList, setPapersList]= useState(papers);

    return(
        <div>
                <ul>
                {
                    papersList.map(articolo =>{
                        return(
                            <li key={articolo.id}>{articolo.title}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}