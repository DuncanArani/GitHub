import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username: string;
  private clientid = 'bd9e6780941ea022d512';
  private clientsecret = 'fc03849fe9ac824e0ae29a730c38b676ddb28c9c';
  private accessToken = '2ab8a68081e0079f18e17d130a0a071cc406dbd6';

  constructor(private http: Http) {
    console.log('service is ready');
    this.username = 'DuncanArani';
   }
getProfileInfo(){
  return this.http.get('https://api.github.com/users/'+this.username +'?client_id='+this.clientid +'&client_secret'+ this.clientsecret) 
 .map (res => res.json());
}
getProfileRepos(){
  return this.http.get('https://api.github.com/users/'+this.username+'repo/?client_id='+this.clientid +'&client_secret'+ this.clientsecret) 
 .map (res => res.json());
}

updateProfile(username: string) {
this.username = username;
}
}
