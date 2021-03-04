import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import CardList from './components/CardList';

function App() {

  const [listItems, setListItems] = useState([]);
  const [isCalling, setIsCalling] = useState(true);

  useEffect(() => {
    callToApi();
  }, []);

  const callToApi = async (text = 'orion') => {
    try {
      const respuesta = await fetch(
        `https://images-api.nasa.gov/search?q=${text}&page=1&media_type=image`
      );
      const res = await respuesta.json();
      setListItems(res.collection.items);
      setIsCalling(false);
    } catch (error) {
      console.log(error);
      setIsCalling(false);
    }
  };

  if (isCalling) return <div className="d-flex justify-content-center m-5">
                          <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>

  return (
    <div className="App">
      <Header/>
      <main className="bg-light">
        <div className="container">
          <Search onCallToApi={callToApi}/>
          <CardList listItems={listItems} />
        </div>
      </main>  
    </div>
  );
}

export default App;