const API_ROOT = process.env.API_ROOT || "http://localhost:3000/";

export const Globals = {
    user: null
}

export function login(){
    Globals.user = { name: "Darrell" }
}

export function api(url) {
    return fetch(API_ROOT + url).then(x=> x.json());
}