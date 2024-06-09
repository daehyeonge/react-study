function Header() {
  return (
    <header className="px-10 py-8 mb-3 h-32 bg-gray-100 flex justify-between">
      <div className="inline">
        <span className="block text-3xl font-black tracking-tighter">y-BE 매뉴얼</span>
        <span className="pt-3 block text-sm font-black">버전 3.2.5</span> 
      </div>
      <div className="inline flex items-center"> 
        <div className="inline relative mr-4">
          <input className="w-72 h-12 pl-4 border-1 border-solid border-black rounded-3xl text-xs" placeholder="검색어 입력"></input>
          <button className="absolute right-2 top-0 bottom-0 m-auto w-12 h-9 rounded-full bg-black font-semibold text-sm text-white">검색</button>
        </div>
        <button className="w-20 h-9 mr-4 rounded-full bg-black font-semibold text-sm text-white">돌아가기</button>
        <button className="w-16 h-9 rounded-full bg-black font-semibold text-sm text-white">로그인</button>
      </div>
    </header>
  );
}

export default Header