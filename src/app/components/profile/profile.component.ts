import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
profile: any[];
repo: any[];


  constructor(private profileService: ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile => {
console.log(profile);
this.profile = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repo = repos;
    });
    }

  ngOnInit() {
  }

}
