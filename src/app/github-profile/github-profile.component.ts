import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id1 = this.route.snapshot.paramMap.get('id');
    console.log('id1' + id1);

    this.route.paramMap.subscribe(
      (params) => {
        const id = +params.get('id');
        console.log(id);
      }
    );
    // console.log('GithubProfileComponent on init');
  }

  submit() {
    this.router.navigate(['/followers'], {
      queryParams: { page: 1, order: 'newest' }
    });
  }

}
