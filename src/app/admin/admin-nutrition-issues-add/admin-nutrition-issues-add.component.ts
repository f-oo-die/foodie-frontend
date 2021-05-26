import { Component, OnInit } from '@angular/core';
import {NutritionIssue} from '../../interface/nutrition-issue';
import {NutritionIssueService} from '../../services/nutrition-issue.service';
import {RoutesConstant} from '../../constants/routes-constant';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin-nutrition-issues-add',
  templateUrl: './admin-nutrition-issues-add.component.html',
  styleUrls: ['./admin-nutrition-issues-add.component.css', '../../../assets/css/admin.css']
})
export class AdminNutritionIssuesAddComponent implements OnInit {

  nutritionIssueModel: NutritionIssue = {name: ''};

  constructor(private nutritionIssueService: NutritionIssueService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.nutritionIssueService.createNutritionIssue(this.nutritionIssueModel).subscribe(() => {
      this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`);
    });
  }
}
