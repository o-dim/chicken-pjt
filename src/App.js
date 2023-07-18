import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img className='logo' src='https://file.albamon.com/Albamon/Recruit/Photo/C-Photo-View?FN=2023/3/30/JK_CO_uljyfm23033018060933.jpg'></img>
        </div>
        <div className='loginBtn'>로그인</div>
      </header>
      <div className='menu'>
        <li>
          <ul>브랜드소개</ul>
          <ul>성공전략</ul>
          <ul>메뉴</ul>
          <ul>인테리어</ul>
          <ul>창업안내</ul>
          <ul>매장찾기</ul>
          <ul>커뮤니티</ul>
        </li>
      </div>
      <table style={{width : '100%', textAlign : 'center'}}>
        <tbody>
          <tr>
            <td colSpan={2}><img style={{width : '800px'}} src='https://biz.chosun.com/resizer/whdHPo7uZJwrXrMJ0Zkur45YP6Q=/1200x630/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/Y76OCH6ZJ5EBXMZ3UTH6HQ2PUA.jpg'></img></td>
            <td><h2 style={{color :'black'}}>메뉴보기</h2><span>치버킹만의 특별한 수제버거를 경험해보세요</span></td>
          </tr>
          <tr style={{height : '100px'}}>
            <td style={{background : '#C12022'}}>성공창업문의</td>
            <td style={{background : '#000000'}}>성공전략
            </td>
            <td style={{background : '#CBCBCB'}}>매장찾기</td>
          </tr>
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
