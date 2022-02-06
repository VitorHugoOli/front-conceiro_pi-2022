const axios = require('axios');

class Provider {
    private static _instance = axios.create({
        baseURL: 'https://prova-de-conceito-ufv.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    constructor(){}

    public static getInstance(): any {
        return this._instance;
    }

    public static get(url: string, params?: any): Promise<any> {
        return this._instance.get(url, { params });
    }

    public static post(url: string, data?: any): Promise<any> {
        return this._instance.post(url, data);
    }

    public static put(url: string, data?: any): Promise<any> {
        return this._instance.put(url, data);
    }

    public static delete(url: string, data?: any): Promise<any> {
        return this._instance.delete(url, data);
    }
}

export default Provider;
