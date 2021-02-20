import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Recipe } from '../../models/recipe.model';
const ELEMENT_DATA = [];
@Component({
  selector: 'app-recipe-list-table',
  templateUrl: './recipe-list-table.component.html',
  styleUrls: ['./recipe-list-table.component.scss'],
})
export class RecipeListTableComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'source',
    'ingredients',
    'instructions',
    'time',
    'actions',
  ];
  dataSource = ELEMENT_DATA;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  RemoveRecipe(recipe: Recipe) {
    this.dialogService
      .OpenConfirmDialog(
        'Are you sure you want to delete recipe ?',
        'Yes',
        'No'
      )
      .then((result) => {
        if (result.confirm) {
        }
      });
  }

  ViewRecipe(recipe: Recipe) {}
}
