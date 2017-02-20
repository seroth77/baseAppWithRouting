import { inject, noView } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';

@noView
@inject(HttpClient)
export class Api {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.httpClient.configure(config => {
            config.withHeader('Content-Type', 'application/json');
        });
    }

    getMonsters(queryParams) {
        if (!queryParams) {
            queryParams.adventure = 'Prince_of_the_Apoclaypse';
        }
        this.httpClient.get('/resources/json/' + queryParams.adventure + '.json')
            .then(response => {
                console.log(JSON.parse(response));
                return JSON.parse(response);
            });
    }
}