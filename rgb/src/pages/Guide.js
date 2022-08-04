import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';
import '../css/guide.css';
import searchinghome from '../images/searchinghome.png';
import ingoogle from '../images/ingoogle.png';
import googlefinace from '../images/googlefinace.png';

function  Guide() {
    return (
        <div>
            <nav id="menubar">
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">RANKING</Link></li>
                <li><Link to="/member">MEMBER</Link></li>
                <li><Link to="/guide">GUIDE</Link></li>
            </ul>
            </nav>
            < div className="guidetable" >
                < table className="gt" >
                    <tr colspan="2" className="guidetitle">
                        HOME 이용 GUIDE
                    </tr>
                    <tr>
                        <td>
                            <img className="searchinghome" src={searchinghome}/>
                        </td>
                        <td>
                            궁금한 주식 종목을 검색한다.<br/>
                            검색창은 구글 검색창과 연결된다.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img className="ingoogle" src={ingoogle}/>
                        </td>
                        <td>
                            연결된 구글 검색창에서 궁금한 종목에 대해 알아본다.<br></br>
                            Tip! 종목에 대한 정보를 인지 후 뉴스를 살펴보며 상황에 대해 알아본다.<br></br>
                            탐색을 다 하였다면 빨간 동그라미 부분을 눌러 <br></br>구글 파이낸스에서 제공하는 주식 정보를 알아본다.
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <img className="googlefinace" src={googlefinace}/>
                        </td>
                        <td>
                            종목에 대한 모든 정보이다. <br></br> 
                            종목 이름과, 종목 현재가, 변동 그래프 회사 정보와 각종 뉴스까지 연결되어있다.<br></br> 
                            RGB.GG는 주식 관련 사이트 중 가장 잘 정리 되어있는 <br></br> 
                            구글 파이낸스를 통해 주식에 대한 정보를 제공한다.<br></br> 
                        </td>
                    </tr>
                    <tr colspan="2" className="guidetitle">
                        RANKING 이용 GUIDE
                    </tr>
                    <tr>
                        <td>
                            메인 페이지 사진
                        </td>
                        <td>
                            궁금한 주식 종목을 검색한다.<br/>
                            검색창은 구글 검색창과 연결된다.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            구글 페이지 사진
                        </td>
                        <td>
                            연결된 구글 검색창에서 궁금한 종목에 대해 알아본다.<br></br>
                            Tip! 종목에 대한 정보를 인지 후 뉴스를 살펴보며 상황에 대해 알아본다.<br></br>
                            탐색을 다 하였다면 빨간 동그라미 부분을 눌러 <br></br>구글 파이낸스에서 제공하는 주식 정보를 알아본다.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            구글 파이낸스 사진
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                    </table>
            </div>

            </div>
    );
};

export default Guide;