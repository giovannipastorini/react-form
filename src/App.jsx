import AppList from "./components/AppList"


function App() {
  

  return (
    <>
      <h1>Lista degli articoli:</h1>
      <div className="container">
        <div className="row">
          <div className="col-12 my-3">
            <AppList />
           

          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
