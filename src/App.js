import './App.css';
import React from 'react';
import Game from './component/Game';
import Setting from './component/Setting';


function App() {
  const [field, setField] = React.useState(null);
  React.useEffect(() => {
    console.log(field)
  }, [field])
  return (
    <div className="App">
      <h1>Mahjong-like game</h1>
      {!field && <Setting setField={setField}/>}
      {field && <Game field={field} setField={setField}/>}
    </div>
  );
}

export default App;
