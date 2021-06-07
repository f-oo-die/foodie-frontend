import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/shared/auth.service';
import {User} from '../../../interface/user';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.user = routeData.user;
    });
  }
}
