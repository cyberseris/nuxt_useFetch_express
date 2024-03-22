export const login = function({ account, password }) {
    let url = '/api/account/login';
    let data = {
        account: account,
        password: password
    }
    console.log(data)

    useFetch(url, {
        method: 'POST',
        body: data, 
        baseURL: "http://localhost:3000"
    }).then(res => {
        return res;
    }).catch(error => {
        console.error('Error fetching data:', error);
    }); 
}

