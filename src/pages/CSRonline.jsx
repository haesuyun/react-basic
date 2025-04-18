const CSRonline = () => {
    return (
        <section>
            <h1>온라인상담문의</h1>
            <dl>
                <dt>상담유형</dt>
                <dd>
                    <select name="" id="">
                        <option value="">11</option>
                    </select>
                </dd>
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
                <dt>문의내용</dt>
                <dd>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </dd>
            </dl>
            개인정보 수집동의 <input type="checkbox" />
            <div>
                <button>취소</button>
                <button>확인</button>
            </div>
        </section>
    );
};

export default CSRonline;
