import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';


@Injectable()
export class ProfileServices {
    private query: string;
    private API_KEYS: string = environment.GitHub_API_KEYS;
    private API_URL: string = environment.GitHub_API_KEYS;
}
