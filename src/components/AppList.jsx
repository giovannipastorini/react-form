import { useState } from 'react'


import {papers} from "../data/app_data"


export default function AppList (){

    const [papersList, setPapersList]= useState(papers);
    const [newTitle, setNewTitle]=useState("");
    
    function handleSubmit (e){
        e.preventDefault(); //per impedire il ricaricamento del form
        
        const idArticle=papersList.length+1;
        
        const newArticle={
            id: idArticle,
            title: newTitle,
            author: "Mr x",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis eveniet cum magnam aperiam minima, suscipit blanditiis, quis tempora similique molestiae explicabo esse, expedita cumque minus sint repudiandae ratione unde id."
        };
        
        console.log(newArticle);
        
        setPapersList([...papersList, newArticle]);
        setNewTitle("");
    }

    const updateList= (idArticolo) =>{
        /* console.log("sono dentro up"); */
        
        const newList= papersList.filter (paper =>{
            return paper.id !== idArticolo;
        })
        
        setPapersList([...newList]);
        
        
    }

    return(
        <>
            <ul>
                    {
                        papersList.map(articolo =>{    
                            
                            return(
                                <li key={articolo.id} className='d-flex justify-content-between my-2'>
                                    {articolo.title}
                                    <button className='btn btn-sm btn-danger'onClick={()=> updateList(articolo.id)}>Elimina</button>
                                </li>
                            )
                        })
                    }
            </ul>
            <hr />

            <form onSubmit={handleSubmit}>
                <div className="my-1">
                    <label htmlFor="title"><strong>Inserisci titolo nuovo articolo:</strong></label>
                </div>
                <div className="my-1">
                    <input  id="title"
                            type="text" 
                            value={newTitle}
                            onChange={e => { setNewTitle(e.target.value) }} />
                </div>
                <div className="my-1">
                    <button className="btn btn-primary" type="submit">Inserisci</button>
                </div>
            </form>
        </>
        
    )
}