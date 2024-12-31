import React, { useState } from "react";

function Header(props) {
  return (
    <h1>
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          props.openAlert();
        }}
      >
        {props.title}
      </a>
    </h1>
  );
}
function Nav(props) {
  // let list = [];
  // for (let i = 0; i < props.topics.length; i++) {
  //   let t = props.topics[i];
  //   list.push(
  //     <li key={i}>
  //       <a href={"/read/" + t.id}>{t.title}</a>
  //     </li>,
  //   );
  // }
  // return <ul>{list}</ul>;
  return (
    <ul>
      {props.topics.map((t) => (
        <li key={t.id}>
          <a
            id={t.id}
            href={"/read/" + t.id}
            onClick={(e) => {
              e.preventDefault();
              props.openAlert(Number(e.target.id));
            }}
          >
            {t.title}
          </a>
        </li>
      ))}
    </ul>
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
  return (
    <article>
      <h2>글쓰기</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let title = event.target.title.value;
          let body = event.target.body.value;
          props.onCreate(title, body);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>
          <textarea name="body" placeholder="body" />
        </p>
        <p>
          <input type="submit" value="저장" />
        </p>
      </form>
    </article>
  );
}
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);
  return (
    <article>
      <h2>수정</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let title = event.target.title.value;
          let body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
        </p>
        <p>
          <input type="submit" value="수정" />
        </p>
      </form>
    </article>
  );
}

function BoardList() {
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics, setTopics] = useState([
    { id: 1, title: "Html", body: "html is..." },
    { id: 2, title: "Css", body: "css is..." },
    { id: 3, title: "Javascript", body: "javascript is..." },
  ]);
  let content = "";
  let contentControl = null;
  if (mode == "Welcome") {
    content = <Article title="Welcom" body="Hello World!"></Article>;
  } else if (mode == "Read") {
    // let title, body;
    // for (let i = 0; i < topics.length; i++) {
    //   if (topics[i].id == id) {
    //     title = topics[i].title;
    //     body = topics[i].body;
    //   }
    // }
    // content = <Article title={title} body={body}></Article>;
    let t = topics.find((item) => item.id == id);
    content = <Article title={t.title} body={t.body}></Article>;
    contentControl = (
      <>
        <li>
          <a
            className="button"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              setMode("Update");
            }}
          >
            수정
          </a>
        </li>
        <li>
          <input
            type="button"
            value="삭제"
            onClick={() => {
              const newTopics = topics.filter((item) => item.id !== id);
              setTopics(newTopics);
              setMode("Welcome");
            }}
          />
        </li>
      </>
    );
  } else if (mode == "Create") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          // const newTopics = [...topics];
          // newTopics.push(newTopic);
          const newTopics = [...topics, newTopic];
          setTopics(newTopics);
          setId(nextId);
          setMode("Read");
          setNextId(nextId + 1);
        }}
      ></Create>
    );
  } else if (mode == "Update") {
    let t = topics.find((item) => item.id == id);
    content = (
      <Update
        title={t.title}
        body={t.body}
        onUpdate={(_title, _body) => {
          const newTopic = { id: id, title: _title, body: _body };
          // const newTopics = [...topics];
          // newTopics.find((item) => item.id == id);
          // for (let i = 0; i < newTopics.length; i++) {
          //   if (newTopics[i].id == id) {
          //     newTopics[i] = newTopic;
          //     break;
          //   }
          // }
          const newTopics = topics.map((item) =>
            item.id == id ? newTopic : item,
          );
          setTopics(newTopics);
          setMode("Read");
        }}
      ></Update>
    );
  }
  return (
    <div>
      <Header
        title="WEB"
        openAlert={() => {
          setMode("Welcome");
          setId(null);
        }}
      ></Header>
      <Nav
        topics={topics}
        openAlert={(_id) => {
          setMode("Read");
          setId(_id);
        }}
      ></Nav>
      <ul>
        <li>
          <a
            className="button"
            href="/"
            onClick={(event) => {
              event.preventDefault();
              setMode("Create");
            }}
          >
            글쓰기
          </a>
        </li>
        {contentControl}
      </ul>
      {content}
    </div>
  );
}
export default BoardList;
