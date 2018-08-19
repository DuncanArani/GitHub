import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClients, HttpHeaders} from '@angular/http';
import 'rxjs/add/operator/map';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application' })
};


@Injectable()
export class ProfileServices {
    private query: string;
    private API_KEYS: string = environment.GitHub_API_KEYS;
    private API_URL: string = environment.GitHub_API_KEYS;
    private URL: string = this.API_URL + this.API_KEYS + '&q=';
    private perPage: string = '&per_page=10';


    constructor(private_httpclients: HttpClients) {}



    getProfile(query) {
        return this.HttpClients.get(this.URL + query + this.perPage).map(res => res.json());
    }

}
