import React, { useEffect, useState } from 'react';
import './App.css'
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import CardList from "./components/CardList";
import axios from 'axios';

function App  ()  {
const BASE_URL = 'https://dummyapi.io/data/api';
const APP_ID = '60ee50a3ce6aaec9522725a5';


    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [count, setCount] = useState(0);
    
    
    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
            .then((users) => setDatas(users))
            .catch(err =>{
                console.log(err) 
            })
            .finally(() => setLoading(false));
    }, []);

    const onSearchChange = (event) => {
      setSearchfield(event.target.value); // update the state
    };

    const filteredDatas = datas.filter((data) => {
      return data.name.toLowerCase().includes(searchfield.toLowerCase()); // we manage the state is here...
    });

      

      return !datas.length ? (
       
        <h1 className="gg">LoAdInG...</h1>
      ):(
        
        <div className="gg">
           <h1 className="center f1">Robo Friends</h1>
           <p className="bg-white dib br3 pa1 ma1 grow bw2 shadow-5" >{count}</p>
           <button className="bg-green dib br3 pa1 ma1 grow bw2 shadow-5" onClick={() => setCount(count + 1)}>Increment</button>
       <SearchBox searchChange={onSearchChange} />
        <Scroll>
        <ErrorBoundary>
          <CardList datas={filteredDatas} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App