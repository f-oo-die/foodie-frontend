import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RoutesConstant} from '../../constants/routes-constant';
import {NutritionIssue} from '../../interface/nutritionIssue';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {NutritionIssueService} from '../../services/nutrition-issue.service';

@Component({
  selector: 'app-admin-nutrition-issues',
  templateUrl: './admin-nutrition-issues.component.html',
  styleUrls: ['./admin-nutrition-issues.component.css']
})
export class AdminNutritionIssuesComponent implements OnInit {

  nutritionIssues: NutritionIssue[];
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private nutritionIssueService: NutritionIssueService) { }

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

  deleteNutritionIssue(nutritionIssue: NutritionIssue): void {
    if (confirm(`Are you sure you want to delete "${nutritionIssue.name}" ?`)) {
      this.nutritionIssueService.deleteNutritionIssue(nutritionIssue.id).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([`/${RoutesConstant.ADMIN_NUTRITION_ISSUES_LIST}`]);
        });
      });
    }
  }
}
