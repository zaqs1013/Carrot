import MainComponent from './Components/MainComponent';

function App() {
   return (
    <div>
        <MainComponent/>
        
    </div>
  );
}

export default App;

// import {useState} from 'react'
// import { AiFillLike } from "react-icons/ai";
// import { AiFillDislike } from "react-icons/ai";

// function Header(props)
// {
//   const {title, onChangeMode} = props;
//   return (
//      <header>
//         <h1><a href="/" onClick={(ev)=>{
//           ev.preventDefault();
//           onChangeMode()
//         }}>{title}</a></h1>
//      </header>
//   )
// }

// function Nav(props)
// {
//   const topics = props.topics;
//   const lis = []

//   for (let i = 0; i < topics.length; i++)
//   {
//     let t = topics[i];
//     lis.push(<li><a id={t.id} href="/read/{t.id}" onClick={
//       (ev) => {ev.preventDefault(); props.onChangeMode(ev.target.id)}
//     } > {t.title}</a>
     
//     <div>{t.body}  {t.like ? <AiFillLike/> : <AiFillDislike /> } </div></li>)

//   }
//   return (
//     <nav>
//       <ol>
//         {lis}
//       </ol>
//      </nav>
//   )
// }

// function Article({title, body})
// {
//     return (
//       <article>
//        <h2>{title}</h2>
//        {body}
//       </article>
//     )
// }
   

// function App() {
//   const [mode, setMode] = useState('READ')

//   const topics = [
//     {id:1, title:'html', body:'html is ...', like:false},
//     {id:2, title:'css', body:'css is ...',like:true},
//     {id:3, title:'javascript', body:'javascript is ...',like:false}
//   ]
//   let content;
 
//   if (mode === "WELCOME")
//       content = <Article title="Welcome Home" body="Learning React"/>
//   else
//        content = <Article title="Selected Article" body="Today Hot Article"/>

//   return (
//     <div className="App">
     
//      <Header onChangeMode={(()=>{setMode("WELCOME")})} title="React"/>
//      <Nav onChangeMode={(id)=>{setMode("READ"); }} topics={topics}/>
     
//      <div>{mode}</div>
//      {content}
   
//     </div>
//   );
// }

// export default App;
