class Api {
    base_url: string;

    constructor() {
        this.base_url = "https://85.215.133.119";
    }

    async request(request: Request) {
        try {
            const response = await fetch(request);
            if (response.status < 200 || response.status > 399) {
                throw response.status
            }

            try {
                return await response.clone().json()
            } catch {
                return await response.clone().text()
            }
        } catch (error) {
            throw error
        }
    }

    async get(path: string) {
        const request = new Request(this.base_url + path, {
            method: 'GET',
            headers: {
                'Accept': '*'
            },
            mode: 'cors',
        });
        return await this.request(request);
    }
}

export default new Api();