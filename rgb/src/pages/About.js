import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';

function About() {
    const obj={
        header : ["순위","이름","티어","거래량","종가","PER"],
        data : [
            {rank : "1", name: "삼성전자", tier :"Gold", volume : "12510366.0", cp : "69,600", per : "18.12"},
            {rank : "2", name: "대한전선", tier :"Gold", volume : "285947731.0", cp : "1,850", per : "616.67"},
            {rank : "3", name: "SKHynics", tier :"Gold", volume : "4558063.0", cp : "118,000", per : "16.97"},
            {rank : "4", name: "삼성바이오로직스", tier :"Gold", volume : "59199.0", cp : "827,000", per : "229.79"},
            {rank : "5", name: "키다리스튜디오", tier :"Gold", volume : "112174.0", cp : "14,400", per : "3600.0"},
            {rank : "6", name: "삼성SDI", tier :"Gold", volume : "655161.0", cp : "596,000", per : "69.36"},
            {rank : "7", name: "NAVER", tier :"Gold", volume : "427064.0", cp : "340,500", per : "49.51"},
            {rank : "8", name: "LG화학", tier :"Gold", volume : "169611.0", cp : "532,000", per : "79.81"},
            {rank : "9", name: "카카오", tier :"Gold", volume : "1065806.0", cp : "106,500", per : "288.62"},
            {rank : "10", name: "LG생활건강", tier :"Gold", volume : "48259.0", cp : "858,000", per : "18.03"},
            {rank : "11", name: "대원전선", tier :"Gold", volume : "106862440.0", cp : "2,340" , per : "73.13"},
            {rank : "12", name: "현대자동차", tier :"Gold", volume : "576522.0", cp : "180,500", per : "33.09"},
            {rank : "13", name: "기아자동차", tier :"Gold", volume : "3145247.0", cp : "82,900", per : "18.2"},
            {rank : "14", name: "태광산업", tier :"Gold", volume : "277.0", cp : "1,042,000", per : "8.29"},
            {rank : "15", name: "하이스틸", tier :"Gold", volume : "41044.0", cp : "28,650", per : "1790.63"},
            {rank : "16", name: "포스코홀딩스", tier :"Gold", volume : "292573.0", cp : "293,000", per : "14.53"},
            {rank : "17", name: "포스코", tier :"Gold", volume : "222274.0", cp : "283,000", per : "14.03"},
            {rank : "18", name: "고려아연", tier :"Gold", volume : "48274.0", cp : "585,000", per : "18.05"},
            {rank : "19", name: "기아", tier :"Gold", volume : "1058727.0", cp : "74,000", per : "19.95"},
            {rank : "20", name: "셀트리온", tier :"Gold", volume :"374991.0", cp : "171,500", per : "46.53"},
            {rank : "21", name: "카카오뱅크", tier :"Gold", volume : "1458343.0", cp : "51,600" , per : "166.99"},
            {rank : "22", name: "엔씨소프트", tier :"Gold", volume : "140432.0", cp : "467,500", per : "16.4"},
            {rank : "23", name: "부광약품", tier :"Gold", volume : "24440577.0", cp : "25,350", per : "11.4"},
            {rank : "24", name: "영풍", tier :"Gold", volume : "381.0", cp : "690,000", per : "8.95"},
            {rank : "25", name: "현대모비스", tier :"Gold", volume : "188806.0", cp : "215,000", per : "13.12"},
            {rank : "26", name: "KB금융지주", tier :"Gold", volume : "1217755.0", cp : "61,300", per : "6.96"},
            {rank : "27", name: "SK보통주", tier :"Gold", volume : "124977.0", cp : "242,000", per : "68.28"},
            {rank : "28", name: "하이브", tier :"Gold", volume : "151625.0", cp : "309,500", per : "104.7"},
            {rank : "29", name: "LG이노텍", tier :"Gold", volume : "213422.0", cp : "387,000", per : "38.79"},
            {rank : "30", name: "에스지충방", tier :"Gold", volume : "39721392.0", cp : "3,200", per : "188.24"},
            {rank : "31", name: "SK바이오사이언스", tier :"Gold", volume : "544251.0", cp : "157,000" , per : "292.36"},
            {rank : "32", name: "모나미", tier :"Gold", volume : "1438910.0", cp : "4,660", per : "1165.0"},
            {rank : "33", name: "LG전자", tier :"Gold", volume : "687529.0", cp : "120,500", per : "11.03"},
            {rank : "34", name: "이아이디", tier :"Gold", volume : "47611314.0", cp : "403", per : "403.0"},
            {rank : "35", name: "크래프톤", tier :"Gold", volume : "187476.0", cp : "275,500", per : "20.01"},
            {rank : "36", name: "HMM", tier :"Gold", volume : "3614580.0", cp : "29,150", per : "283.01"},
            {rank : "37", name: "삼성물산", tier :"Gold", volume : "233563.0", cp : "114,000", per : "18.16"},
            {rank : "38", name: "서울식품공업", tier :"Gold", volume : "70582822.0", cp : "145", per : "72.5"},
            {rank : "39", name: "계양전기", tier :"Gold", volume : "200660.0", cp : "4,325", per : "1081.25"},
            {rank : "40", name: "아모레퍼시픽", tier :"Gold", volume : "245191.0", cp : "160,000", per : "312.5"},
            {rank : "41", name: "신한금융지주회사", tier :"Gold", volume : "1206052.0", cp : "41,500" , per : "6.24"},
            {rank : "42", name: "빅히트엔터테인먼트", tier :"Gold", volume : "276932.0", cp : "243,000", per : "82.34"},
            {rank : "43", name: "효성T&C", tier :"Gold", volume : "64298.0", cp : "465,000", per : "14.67"},
            {rank : "44", name: "CJ제일제당 주식회사", tier :"Gold", volume : "35318.0", cp : "369,500", per : "8.64"},
            {rank : "45", name: "삼성전기", tier :"Gold", volume : "378523.0", cp : "165,000", per : "20.64"},
            {rank : "46", name: "한미약품", tier :"Gold", volume : "16330.0", cp : "274,000", per : "280.16"},
            {rank : "47", name: "포스코케미칼", tier :"Gold", volume : "231838.0", cp : "120,500", per : "264.84"},
            {rank : "48", name: "오뚜기", tier :"Gold", volume : "2751.0", cp : "446,500", per : "14.27"},
            {rank : "49", name: "삼성화재해상보험", tier :"Gold", volume : "273026.0", cp : "219,000", per : "12.33"},
            {rank : "50", name: "세우글로벌보통주", tier :"Gold", volume : "1784188.0", cp : "2,470", per : "823.33"},
            
        ],
    };

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
        <div className="div-button">
            <span className="content">*보통주로만 분석된 결과입니다.</span>
            <Link to="/about2"><input className="button1" type="button" value="코스닥"></input></Link>
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
                            <td>{item.per}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default About;
