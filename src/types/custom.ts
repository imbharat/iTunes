type Route = {
    path: string,
    method: 'get' | 'post' | 'put' | 'delete' | 'patch' | 'head' | 'options' | '',
    controller: any,
    controllerMethod: string,
    isAPICall: boolean,
    validations: [],
    fetchInitialData: (service: any, filter?: any) => any
}

export {
    Route
}