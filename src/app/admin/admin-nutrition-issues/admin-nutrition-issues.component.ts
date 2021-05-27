import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';
import {NutritionIssue} from '../../interface/nutritionIssue';

@Component({
  selector: 'app-admin-nutrition-issues',
  templateUrl: './admin-nutrition-issues.component.html',
  styleUrls: ['./admin-nutrition-issues.component.css', '../../../assets/css/admin.css']
})
export class AdminNutritionIssuesComponent implements OnInit {

  nutritionIssues: NutritionIssue[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((routeData: { nutritionIssues: NutritionIssue[] }) => {
      this.nutritionIssues = routeData.nutritionIssues;
    });
  }

  openAddNutritionIssues(): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_NEW}`);
  }

  openEditNutritionIssues(id: number): void {
    this.router.navigateByUrl(`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_BASE}/edit/${id}`);
  }
}
