import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {User} from '../../../interface/user';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-check-user',
  templateUrl: '',
  styleUrls: []
})
export class CheckUserComponent implements OnInit {

  user: User;
  infoMessage = '';

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.user = routeData.user;
    });
    this.redirect();
  }

  redirect(){
    if (this.user.height == null || this.user.weight == null || this.user.nutritionIssues.length == 0){
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/profile/${this.user.id}`], {queryParams: { additionalInfo: 'true' } });
      });
    }
    else {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([`/meal-planning`]);
      });
    }
  }
}
