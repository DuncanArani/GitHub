import { Component, OnInit } from '@angular/core';
import { ProfileServices } from '../prof/profile.services';
import { GItHubSearch } from '../git-hub-search';

@Component({
  selector: 'app-root',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile: [
  GItHubSearch
];

  constructor(private_profileServices: ProfileServices) { }

  ngOnInit() {
  }

}
