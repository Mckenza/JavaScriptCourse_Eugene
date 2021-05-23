// Model для 1 пользователя
class ModelSingle {
    constructor() { }

    async getDataFromServerId(id) {
        const data = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const json = await data.json();
        return json;
    }

    async postDataFromServerId(data) {
        const dataFromServer = await fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            'Content-Type': 'application/json; charset=utf-8',
            body: JSON.stringify(data),
        })
        const json = await dataFromServer.json();
        return json;
    }
}

export { ModelSingle };