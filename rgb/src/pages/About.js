import {BrowserRouter, Link} from 'react-router-dom';
import '../App.css';
import '../css/table.css';

function About() {
    const obj={
        header : ["순위","이름","티어"],
        data : [
            {rank : "1", name: "삼성전자 보통주", tier :"Gold" },
            {rank : "2", name: "대한전선 보통주", tier :"Gold"},
            {rank : "3", name: "SKHynics 보통주", tier :"Gold"},
        ],
    };

    return (
    <div>
        <nav id="menubar">
        <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/about">RANKING</Link></li>
        </ul>
        </nav>
        <br/><br/>
        <div className="div-button">
            <input className="button1" type="button" value="코스넥"></input>
            <input className="button1" type="button" value="코스닥"></input>
            <input className="button1" type="button" value="유가증권"></input>
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
