import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable, combineLatest } from 'rxjs';

import { GithubFollowersService } from '../services/github-followers.service';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute,
    private service: GithubFollowersService) { }

  ngOnInit() {
    combineLatest(
      this.route.paramMap,
      this.route.queryParamMap
    ).subscribe(
      combined => {
        const id = combined[0].get('id');
        const page = combined[1].get('page');
        console.log(page);
        // this.service.getAll({id: id, page: page})

        this.service.getAll().subscribe(
          followers => this.followers = followers
        );
      }
    );
  }

}
