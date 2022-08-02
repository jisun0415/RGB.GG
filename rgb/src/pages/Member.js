import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';
import '../css/member.css';

import Jisun from '../images/jisun.jpg';
function Member() {
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
            <br/><br/>
            <div className="membertable" >
                <table className="mt">
                    <tr>
                        <td className="membertd">
                        <img className="jisun" src={Jisun}/>
                        </td>
                        <td>
                        <img className="jisun" src={Jisun}/>
                        </td>
                        <td>
                        <img className="jisun" src={Jisun}/>
                        </td>
                        <td>
                        <img className="jisun" src={Jisun}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                        <div className="jisun-des">
                            이름 : 오지선 <br/>
                            담당 : 개발팀 <br/>
                            소개 : 세종대학교 <br/> 지능기전공학부<br/>무인이동체공학
                        </div>
                        </td>
                        <td>
                        <div className="jisun-des">
                        이름 : 오지선 <br/>
                        담당 : 개발팀 <br/>
                        소개 : 세종대학교 <br/> 지능기전공학부<br/>무인이동체공학
                        </div>
                        </td>
                        <td>
                        <div className="jisun-des">
                        이름 : 오지선 <br/>
                        담당 : 개발팀 <br/>
                        소개 : 세종대학교 <br/> 지능기전공학부<br/>무인이동체공학
                        </div>
                        </td>
                        <td>
                        <div className="jisun-des">
                        이름 : 오지선 <br/>
                        담당 : 개발팀 <br/>
                        소개 : 세종대학교 <br/> 지능기전공학부<br/>무인이동체공학
                        </div>
                        </td>
                    </tr>
                </table>
            </div>

            </div>
    );
};

export default Member;
