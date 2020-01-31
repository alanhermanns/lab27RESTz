import React from 'react'
let historyLis;
const History = ({history}) => {
    historyLis = history.map(item => {
        console.log(item)
        
        return (       
            <li>

            <a href={item}>
            {item}
            </a>
            </li>
        )
    });
    return (
        <ul>
            {historyLis}
        </ul>
    )
}

export default History;

//////
