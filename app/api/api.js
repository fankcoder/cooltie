const host = "http://127.0.0.1:8000/api/"


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


export const cancel = async (access_token, orderNo) => {
    const url = `${host}order/cancel/`
    console.log(url)
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${access_token}`
            },
            body: JSON.stringify({
                orderNo: orderNo,
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


export const get_order = async (access_token) => {
    const url = `${host}order/get/`
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


export const get_order_lists = async (access_token, page, pageSize) => {
    const url = `${host}order/list/?page=${page}&pageSize=${pageSize}`
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


export const get_usdt_rmb = async () => {
    const url = `${host}site/ur/`
    // console.log(url)
    try {
        const response = await( await fetch(url)).json()
        console.log(response)
        if (response.code === 200) {
            return parseFloat(response.body.data)
        } else {
            return {}
        }
    }
    catch (error) {
        console.log('Fetch error', error)
    }
}


export const qr_upload = async (access_token, formData, orderNo) => {
    const url = `${host}order/qr_upload/orderNo=${orderNo}/`
    console.log(url)
    try {
        const response = await( await fetch(url, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${access_token}`
            },
            body: formData,
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