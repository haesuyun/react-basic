import React, {useState} from "react";
import clsx from "clsx";
import style from "@/assets/style/module/guide.module.scss";
import UiTextField from "@/components/TextField"
import UiSelect from "@/components/Select";

export default function SignUp(){
  const [select, setSelect] = useState({
    value: 1,
    label: "통신사 선택",
    optionTitle: "통신사 선택",
    options: [
      {
        label: "SKT",
      },
      {
        label: "KT",
      },
      {
        label: "LG U+",
      },
      {
        label: "SKT 알뜰폰",
      },
      {
        label: "KT 알뜰폰",
      },
      {
        label: "LG U+ 알뜰폰",
      },
    ],
  });
  return (
    <section>
      <h1 className={style.h1}>회원 가입</h1>
      <div className="px-6">
        <form className="form-list">
          <div className="form-item">
            <UiTextField label="이름" placeholder="이름 입력"/>
          </div>
          <div className="form-item">
            <UiTextField label="주민등록번호" type="tel" placeholder="앞 6자리 입력" error errorMessage="앞 6자리 입력해주세요"/>
            <UiTextField className="mt-label" type="tel" placeholder="뒤 1자리 입력"/>
          </div>
          <div className="form-item">
            <UiSelect
              {...select}
              onChange={(index) =>
                setSelect((prev) => ({ ...prev, value: index }))
              }
            />
          </div>
          <div className="form-item">
            <UiTextField 
              label="휴대폰 번호" 
              placeholder="'-'제외하고 입력" 
              type="tel" 
              message="본인 명의의 휴대전화로만 인증이 가능합니다">
              <button type="button" className="button bg-secondary">
                인증번호 발송
              </button>
            </UiTextField>
          </div>
          <div className="form-item">
            <UiTextField 
              label="인증번호" 
              placeholder="인증번호 6자리 입력" 
              type="tel" 
              message="인증번호 6자리를 입력하세요" 
              error 
              errorMessage="인증번호 6자리를 입력하세요!" 
              onChange={(e)=>console.log(e.target.value)}>
                <button type="button" className="button bg-secondary">
                  시간연장
                </button>
            </UiTextField>
          </div>
          <div className="button-group">
            <button type="button" className="button-large bg-tertiary">
              이전
            </button>
            <button type="button" className="button-large bg-secondary">
              다음
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}