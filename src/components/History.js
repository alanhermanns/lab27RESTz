import React from 'react'
let historyLis;
const History = ({history}) => {
    console.log(history)
    historyLis = history.map(item => (
        (
            <li>
              {item}
            </li>
        )
    ));
    console.log('!!!!!!!!!!', historyLis)
    return (
        <ul>
            {historyLis}
        </ul>
    )
}

export default History;
