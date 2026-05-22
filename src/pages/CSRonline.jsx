import { Switch } from "@mui/material";

function MuiSwitch() {
    const label = {inputProps: { 'aria-label': '직접입력 선택' }};
    return (
        <>
            <Switch {...label} />
        </>
    )
}

export const meta = {
  depth01: "홈",
  depth02: "",
  depth03: "",
  id: "",
  name: "온라인상담문의",
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
    return (
        <section>
            <h1>온라인상담문의</h1>
            <dl>
                <dt>성함</dt>
                <dd>
                    <input type="text" />
                </dd>
                <dt>연락처</dt>
                <dd>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                </dd>
                <dt>이메일</dt>
                <dd>
                    <MuiSwitch />직접입력<br />
                    <input type="text" />
                    @
                    <input type="text" />
                    <select name="" id="">
                        <option value="">naver.com</option>
                    </select>
                </dd>
                <dt>상담유형</dt>
                <dd>
                    <select name="" id="">
                        <option value="">대분류</option>
                    </select>
                    <select name="" id="">
                        <option value="">소분류</option>
                    </select>
                </dd>
                <dt>문의내용</dt>
                <dd>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </dd>
                <dt>파일첨부</dt>
                <dd>
                    <input type="file" name="" id="" />
                </dd>
            </dl>
            <div>
                개인정보 수집 및 이용 동의 <input type="checkbox" /> 
                <button>자세히 보기</button>
                {/* 
                // 팝업
                1. 개인정보의 수집이용 목적
                - 회원의 불만사항 확인 및 처리를 위한 본인확인과 처리결과 안내 등 고객상담 및 민원처리
                2. 개인정보 수집항목
                - 국내 거주자 필수항목 : 이름, 아이디, 휴대전화, 이메일
                3. 개인 정보의 보유 및 이용기간
                - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                */}
            </div>
            <div>
                <button>1:1 온라인 문의하기</button>
            </div>
        </section>
    );
};

