function Category() {
  return (
    <>
      <div className="inline-block fixed w-30 h-full">
        <span>카테고리</span>
        <div>
          <button>사용자</button>
          <button>관리자</button>
        </div>
        <div>
          <input type="checkbox"></input>
          <label>초기 설정을 위한 온보딩</label>
          <p>처음 y-BE를 사용하시는 분을 위한 온보딩 가이드 입니다.</p>
        </div>
        <ul>
          <li>y-BE 런처/앱</li>
          <ul>
            <li>런처/앱 기능 개발</li>
          </ul>
        </ul>
      </div>
      <div className="inline-block align-middle">
        <span>테스트</span>
      </div>
    </>
  );
}

export default Category