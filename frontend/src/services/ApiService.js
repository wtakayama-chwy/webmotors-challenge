const urlBase = 'http://localhost:3333';

const consumeApi = (param = '', method = 'GET', body) => {
    return fetch(`${urlBase}/${param}`, {
        method,
        headers: { 
            'content-type': 'application/json',
        },
        body
    })
        .then(res => ApiService.HandleError(res))
        .then(res => res.json());
}

const ApiService = {

    ListMakes: () => consumeApi('Make'),

    ListModel: (makeId) => consumeApi(`Model?MakeID=${makeId}`),

    ListVersion: (modelId) => consumeApi(`Version?ModelID=${modelId}`),

    ListVehicle: (page) => consumeApi(`Vehicles?Page=${page}`),

    HandleError: res => {
        if(!res.ok) {
            throw new Error(res.responseText);
        }
        return res;
    }
}

export default ApiService;