import { useState } from 'react'


import {papers} from "../data/app_data"


export default function AppList (){

    const [papersList, setPapersList]= useState(papers);
    const [newTitle, setNewTitle]=useState("");


    return(
        <>
            <ul>
                    {
                        papersList.map(articolo =>{
                            return(
                                <li key={articolo.id}>{articolo.title}</li>
                            )
                        })
                    }
            </ul>
            <hr />

            <form action="">
                <div className="my-1">
                    <label htmlFor="title"><strong>Inserisci titolo nuovo articolo:</strong></label>
                </div>
                <div className="my-1">
                    <input  id="title" 
                            type="text" 
                            value={newTitle}>
                            onChange={e => { setNewTitle(e.target.value) }}
                    </input>
                </div>
                <div className="my-1">
                    <button className="btn btn-primary" type="submit">Inserisci</button>
                </div>
            </form>
        </>
        
    )
}