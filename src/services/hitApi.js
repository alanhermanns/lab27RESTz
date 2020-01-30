
const hitApi = (method, URL) => {
    fetch(URL, {
        'METHOD': method,
        'type':'application/json' 
    },{

    })
}

export default hitApi;
