const host = "http://43.240.223.53:8000/api/"


export const login = async (email, password) => {
    const url = `${host}auth/login/`
    console.log(url)
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })).json()
        console.log(response)
        if (response.code === 200) {
            return response.body.token.access[0]
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

export const register = async (email, password, verify) => {
    const url = `${host}auth/register/`
    console.log(url)
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                passwd: password,
                verify: verify,
            }),
        })).json()
        console.log(response)
        if (response.code === 200) {
            return response.body
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}


export const info = async (access_token) => {
    const url = `${host}auth/user_info/`
    const headers = {"Authorization": `Bearer ${access_token}`}
    console.log(url)
    try {
        const response = await( await fetch(url, {headers:headers})).json()
        console.log(response)
        if (response.code === 200) {
            return response.body
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}


export const create_order = async (access_token, amount, chain, coinType) => {
    const url = `${host}order/create/`
    console.log(url)
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
            },
            body: JSON.stringify({
                amount: amount,
                chain: chain,
                coinType: coinType
            }),
        })).json()
        console.log(response)
        if (response.code === 200) {
            return response.body
        } else {
            return response
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

export const s_search = async (name, part) => {
    const url = `${host}stickers/search/?name=${name}&part=${part}`
    // const headers = {"Authorization": `Bearer ${access_token}`}
    console.log(url)
    try {
        const response = await( await fetch(url)).json()
        console.log(response)
        if (response.code === 200) {
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}

export const s_get = async (name) => {
    const url = `${host}stickers/get/?name=${name}`
    // const headers = {"Authorization": `Bearer ${access_token}`}
    console.log(url)
    try {
        const response = await( await fetch(url)).json()
        console.log(response)
        if (response.code === 200) {
            return response
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}
