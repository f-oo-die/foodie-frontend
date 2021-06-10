import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {User} from '../../../interface/user';
import {ActivatedRoute, Router} from '@angular/router';
import {Recipe} from '../../../interface/recipe';
import { FavoriteRecipeService } from 'src/app/services/favorite-recipe.service';


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
              private favoriteRecipeService: FavoriteRecipeService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(routeData => {
      this.user = routeData.user;
      this.favouriteRecipe = routeData.recipe;
    });
    this.activatedRoute.queryParams
      .subscribe(params => {
        if(params.additionalInfo !== undefined && params.additionalInfo === 'true') {
            this.infoMessage = 'Please fill in weight, height and choose nutrition issue(s) in order to create a customized meal plan.';
        }
      });
  }

  onDelete(id: number): void {
    if (confirm(`Are you sure you want to remove this recipe from favorites?`)) {
      this.favoriteRecipeService.removeFromFavorite(id).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/profile/' + this.user.id]);
        });
      });
    }
  }
}
