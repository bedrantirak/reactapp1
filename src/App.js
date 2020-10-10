import React from 'react';
import './App.css';

function App() {
  const test =34;
  const isAuto=true;
  return (
    <div className="App">
      <h4>{1+1} </h4>
      <h4>{"bedran".toUpperCase()}</h4>
      <h4>{test}</h4>
      <div>
        {
          isAuto ? <p>Kullanıcı kayıtlı</p>
          : null
        }


      </div>
    </div>
  );
}

export default App;
