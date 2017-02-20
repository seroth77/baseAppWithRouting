import { inject } from 'aurelia-framework';
import { Api } from './monsters/services/api';

@inject(Api)
export class Default {
    constructor(api) {
        this.api = api;
        this.test = 'TEST!';
    }

    activate() {
        this.api.getMonsters({ adventure: 'Prince_of_the_Apoclaypse' });
    }
}