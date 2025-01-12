import React, { useState } from "react";
import style from '@/assets/board.module.scss';
import Button from '@mui/material/Button';

function Header(props) {
  return (
    <header>
    
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  // let list = []
  // for( let i = 0; i<props.topics.length; i++){
  //   let t = props.topics[i];
  //   list.push(
  //     <li key={t.id}><a href={'/read/'+(t.id)}>{ t.title }</a></li>
  //   )
  // }
  return (
    <nav>
      <ol>
        {/* { list } */}
        {props.topics.map((item, index) => {
          return (
            <li key={index}>
              <a
                id={item.id}
                href={"/read/" + item.id}
                onClick={(event) => {
                  event.preventDefault();
                  props.onChangeMode(Number(event.target.id));
                }}
              >
                {item.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}
function Create(props) {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  return (
    <form>
      <input
        type="text"
        value={title || ""}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <textarea
        name=""
        id=""
        value={body || ""}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      ></textarea>
      <br />
      {title}
      {body}
      <br />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          props.onCreate(title, body);
        }}
      >
        Save
      </button>
    </form>
  );
}
function Update(props) {
  let item = props.getItem;
  const [title, setTitle] = useState(item.title);
  const [body, setBody] = useState(item.body);
  console.log(title, body);
  return (
    <form>
      <input
        type="text"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <br />
      <textarea
        name=""
        id=""
        value={body}
        onChange={(event) => {
          setBody(event.target.value);
        }}
      ></textarea>
      <br />
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          props.onUpdate(title, body);
          console.log("update");
        }}
      >
        Save
      </button>
    </form>
  );
}
function App() {
  const [topics, setTopics] = useState([
    { id: 1, title: "html", body: "html is..." },
    { id: 2, title: "css", body: "css is..." },
    { id: 3, title: "js", body: "js is..." },
  ]);
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  let contents = null;
  // const [contents, setContents] = useState(null)
  if (mode === "WELCOME") {
    contents = <Article title="Welcome" body="hello, WEB"></Article>;

    // for
    // }else if(mode === 'Read'){
    //   for( let i = 0; i<topics.length; i++){
    //     let topic = topics[i]
    //     if(topic.id === id){
    //         contents =  <Article title={topic.title} body={topic.body}></Article>
    //       }

    // map
  } else if (mode === "READ") {
    contents = topics.map((item, index) =>
      item.id === id ? (
        <div key={index}>
          <Article title={item.title} body={item.body}></Article>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
              setId(item.id);
            }}
          >
            Update
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              topics.splice(id - 1, 1);
              setTopics(topics);
              setMode("WELCOME");
              setId(null);
            }}
          >
            Delete
          </button>
        </div>
      ) : null
    );
    // filter & map
    // }else if(mode === 'Read'){
    //   topics.filter(item => item.id === id).map(item => {
    //     contents = <Article title={item.title} body={item.body}></Article>
    //   })

    // find
    // }else if(mode === 'Read'){
    //   let item = topics.find(item => item.id===id )
    //   contents = <Article title={item.title} body={item.body}></Article>
  } else if (mode === "CREATE") {
    contents = (
      <Create
        onCreate={(_title, _body) => {
          if (_title !== null && _body !== null) {
            let _id = topics.length + 1;
            setTopics([
              ...topics,
              {
                id: _id,
                title: _title,
                body: _body,
              },
            ]);
            setMode("READ");
            setId(_id);
          } else {
            alert(_title === null ? "제목을 입력하세요" : "내용을 입력하세요");
          }
        }}
      />
    );
  } else if (mode === "UPDATE") {
    let _id = id - 1;
    let item = topics[_id];
    contents = (
      <Update
        getItem={item}
        onUpdate={(_title, _body) => {
          const updateItem = {
            id: id,
            title: _title,
            body: _body,
          };
          topics.splice(_id, 1, updateItem); // (인덱스, 삭제할 개수, 추가할 값));
          setTopics(topics);
          setId(id);
          setMode("READ");
        }}
      />
    );
  }
  return (
    <div className={style.boardWrap}>
    <Button>material button</Button>
      <Header
        title="WEB"
        onChangeMode={() => {
          setMode("WELCOME");
        }}
      ></Header>
      <Nav
        topics={topics}
        onChangeMode={(id) => {
          setMode("READ");
          setId(id);
        }}
      ></Nav>
      <button
        type="button"
        onClick={() => {
          setMode("CREATE");
        }}
      >
        Create
      </button>
      {contents}
      {/* <button type="button" onClick={()=>{
      }}>Save</button> */}
    </div>
  );
}

export default App;
