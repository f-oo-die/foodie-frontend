import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {User} from '../../../interface/user';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../../interface/recipe';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User;
  favouriteRecipe: Recipe[];
  infoMessage = '';

  constructor(private authService: AuthService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle('My Profile | Foodie');
    this.activatedRoute.data.subscribe(routeData => {
      this.user = routeData.user;
      this.favouriteRecipe = routeData.recipe;
    });
    this.activatedRoute.queryParams
      .subscribe(params => {
        if (params.additionalInfo !== undefined && params.additionalInfo === 'true') {
            this.infoMessage = 'Please fill in weight, height and choose nutrition issue(s) in order to create a customized meal plan.';
        }
      });
  }
}
