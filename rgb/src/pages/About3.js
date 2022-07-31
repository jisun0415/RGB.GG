import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';

function About3() {
    const obj={
        header : ["순위","이름","티어","거래량","종가"],
        data : [
            {rank : "1", name: "지선오1", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "2", name: "지선오2", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "3", name: "지선오3", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "4", name: "삼성바이오로직스", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "5", name: "키다리스튜디오", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "6", name: "삼성SDI", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "7", name: "NAVER", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "8", name: "LG화학", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "9", name: "카카오", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "10", name: "LG생활건강", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "11", name: "대원전선", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "12", name: "현대자동차", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "13", name: "기아자동차", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "14", name: "태양광산업", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "15", name: "하이스틸", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "16", name: "포스코홀딩스", tier :"Gold" , volume : "50%", cp : "10000000"},
            {rank : "17", name: "포스코", tier :"Gold" , volume : "50%", cp : "10000000"},
            
        ],
    };
    return(
        <div>
        <nav id="menubar">
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">RANKING</Link></li>
        </ul>
        </nav>
        <br/><br/>
        <div className="div-button">
            <span className="content">*보통주로만 분석하였습니다.</span>
            <Link to="/about2"><input className="button1" type="button" value="코스넥"></input></Link>
            <Link to="/about3"><input className="button1" type="button" value="코스닥"></input></Link>
            <Link to="/about"><input className="button1" type="button" value="유가증권"></input></Link>
        </div>
        <div class="container">
            <table>
                <thead>
                    <tr>
                    {obj.header.map((item) => {
                    return <th>{item}</th>;})}
                    </tr>
                </thead>
                <tbody>
                    {obj.data.map((item) => {
                    return (
                        <tr>
                            <td>{item.rank}</td>
                            <td>{item.name}</td>
                            <td>{item.tier}</td>
                            <td>{item.volume}</td>
                            <td>{item.cp}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default About3;