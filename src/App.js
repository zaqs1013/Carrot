import './App.css';

import { useState } from 'react';
import TaskStaus from './TaskStaus';

function App() {
  const [checked, setChecked] = useState(true);
  const onComplete = () =>   checked === true ? setChecked(false) : setChecked(true)

  return (
    <div className="App">

       <TaskStaus checked={checked} onComplete={onComplete}/>
       <TaskStaus checked={!checked} onComplete={onComplete}/>
           
          
    </div>
  );
}

export default App;