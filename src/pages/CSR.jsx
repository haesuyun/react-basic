import clsx from "clsx";
import { Link } from "react-router-dom";

export const meta = {
  depth01: "고객센터",
  depth02: "",
  depth03: "",
  id: "",
  name: "고객지원센터",
  author: "홍길동",
  state: "진행중",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
    home : true,
    menu : true,
  },
  footer: true,
};

export default () => {
  const iconSize = 'icon-xlarge';
  const csrLists = [
    {
        linkTo: '/CSRinfo',
        title: '공지사항',
        iconName: 'info',
    },
    {
        linkTo: '/CSRquestion',
        title: '자주하는질문',
        iconName: 'balloon',
    },
    {
        linkTo: '/CSRonline',
        title: '온라인상담문의',
        iconName: 'mic',
    },
    {
        linkTo: '/CSRtell',
        title: '고객센터대표번호',
        iconName: 'question',
    }
  ]
  return (
    <section>
      <div className="px-6 pt-12">
        <p className="heading-30">고객지원센터</p>
        <p className="text-24 mt-6 ellipsis">무엇을 도와드릴까요?</p>
      </div>
      <ul className="csr-list">
        {csrLists.map((item, index) => (
          <li key={index}>
            <Link to={item.linkTo} rel="stylesheet" href=""><i className={clsx(item.iconName, iconSize)}></i>{item.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}



