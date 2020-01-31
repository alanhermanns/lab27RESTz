
const hitApi = (URL, method, BODY) => {
    fetch(URL, {
        'METHOD': method,
        'body': JSON.stringify(BODY)
    })
}

export default hitApi;
