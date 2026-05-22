
export const meta = {
  depth01: "홈",
  depth02: "",
  depth03: "",
  id: "",
  name: "로그인",
  author: "홍길동",
  state: "진행중",
  createdDate: "",
  note: "",
  layout: "DefaultLayout",
  header: {
    prev : true,
  },
  footer: true,
};
export default () => {
  return (
    <section>
      <div className="px-6 pt-12">
        <p className="heading-30">반갑습니다!</p>
        <p className="text-24 mt-6 ellipsis">
          간편 비밀번호로<br/>
          쉬고 빠르게 로그인하세요.
        </p>
      </div>
    </section>
  )
}