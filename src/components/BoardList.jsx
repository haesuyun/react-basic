import React, { useState } from 'react';

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
      {/* {props.topics.map((item)=>{
        return <li key={item.id}><a id={item.id} href={'/read/'+item.id} onClick={(event)=>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id));
        }}>{ item.title }</a></li>
      })} */}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function Create(props){
  const [title, setTitle] = useState(null)
  const [body, setBody] = useState(null)
  return <form>
    <input type="text" text={title} onChange={(event)=>{
      setTitle(event.target.value)
      }}/><br/>
    <textarea name="" id="" text={body} onChange={(event)=>{
      setBody(event.target.value)
    }}></textarea>
    <button type='submit' onClick={(event)=>{
      event.preventDefault()
      props.getContents(title,body)
    }}>Save</button>
  </form>
}
function App(){
  const [topics, setTopics] = useState([
    { id: 1, title: 'html', body: 'html is...' },
    { id: 2, title: 'css', body: 'css is...' },
    { id: 3, title: 'js', body: 'js is...' },
  ])
  const [mode, setMode] = useState('Welcome')
  const [id, setId] = useState(null)
  let contents = null;
  // const [contents, setContents] = useState(null)
  if(mode === 'Welcome'){
    contents = <Article title="Welcome" body="hello, WEB"></Article>

  // for
  // }else if(mode === 'Read'){
    //   for( let i = 0; i<topics.length; i++){
      //     let topic = topics[i]
      //     if(topic.id === id){
        //         contents =  <Article title={topic.title} body={topic.body}></Article>
        //       }
        
  // map
  }else if(mode === 'Read'){
    contents = topics.map(
      item => item.id === id ? 
      <Article title={item.title} body={item.body}></Article> : 
      null
    )
  // filter & map
  // }else if(mode === 'Read'){
  //   topics.filter(item => item.id === id).map(item => {
  //     contents = <Article title={item.title} body={item.body}></Article>
  //   })

  // find
  // }else if(mode === 'Read'){
  //   let item = topics.find(item => item.id===id )
  //   contents = <Article title={item.title} body={item.body}></Article>

  }else if(mode === 'Create'){
    contents = <Create getContents={(_title,_body)=>{
      console.log(_title,_body)
      setTopics(...topics,{
        id: 4,
        title: _title,
        body: _body
      })
      console.log(topics)
    }}/>
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
      { contents }
      <button type="button" onClick={()=>{
      setMode('Create')
      }}>Create</button>
      {/* <button type="button" onClick={()=>{
      }}>Save</button> */}
    </div>
  )
}

export default App;