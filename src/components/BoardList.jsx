function Header(props){
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props){
  // let list = []
  // for( let i = 0; i<props.topics.length; i++){
    //   let t = props.topics[i];
    //   list.push(
      //     <li key={t.id}><a href={'/read/'+(t.id)}>{ t.title }</a></li>
      //   )
      // }
      return <nav>
    <ol>
      {/* { list } */}
      {props.topics.map((item)=>{
        return <li key={item.id}><a id={item.id} href={'/read/'+item.id} onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{ item.title }</a></li>
      })}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
import React, { useState } from 'react';
function App(){
  const topics = [
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ]
  const [mode, setMode] = useState('Welcome')
  const [id, setId] = useState(null)
  let contents = null;
  console.log(mode)
  if(mode === 'Welcome'){
    contents =  <Article title="Welcome" body="hello, WEB"></Article>

  // for
  // }else if(mode === 'Read'){
    //   for( let i = 0; i<topics.length; i++){
      //     let topic = topics[i]
      //     if(topic.id === id){
        //         contents =  <Article title={topic.title} body={topic.body}></Article>
        //       }
        
  // map
  // }else if(mode === 'Read'){
  //   contents = topics.map(item => {
  //     return item.id === id ? <Article title={item.title} body={item.body}></Article> : null;
  //   })

  // filter & map
  }else if(mode === 'Read'){
    topics.filter(item => item.id === id).map(item => {
      contents = <Article title={item.title} body={item.body}></Article>
    })

  // find
  // }else if(mode === 'Read'){
  //   let item = topics.find(item => item.id===id )
  //   contents = <Article title={item.title} body={item.body}></Article>

  }
  return(
    <div>
      <Header title="WEB" onChangeMode={()=>{
        setMode('Welcome')
      }}></Header>
      <Nav topics={topics} onChangeMode={(id)=>{
        setMode('Read')
        setId(id)
      }}></Nav>
      { mode }
      { id }
      { contents }
      {/* <Article title="Welcome" body="hello, WEB"></Article> */}
    </div>
  )
}

export default App;