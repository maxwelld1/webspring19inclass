const API_ROOT = process.env.API_ROOT || "http://localhost:3000/";

export const Globals = {
    user: null
}

export function login(){
    Globals.user = { name: "Darrell" }
}

export function api(url, data) {
    if(!data){
        return fetch(API_ROOT + url).then(x=> x.json());
    } else {
        return fetch(API_ROOT + url, {
                method: "POST",
                cache: "no-cache",
                headers: {
                    "Content-Type": "appplication/json"
                },
                body: JSON.stringify(data),
        })
        .then(response => response.json());
    }
}