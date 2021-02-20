import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Recipe } from '../../models/recipe.model';
@Component({
  selector: 'app-recipe-list-table',
  templateUrl: './recipe-list-table.component.html',
  styleUrls: ['./recipe-list-table.component.scss'],
})
export class RecipeListTableComponent implements OnInit {
  @Input() data: Recipe[] = [];
  public displayedColumns: string[] = [
    'id',
    'name',
    'source',
    'ingredients',
    'instructions',
    'time',
    'actions',
  ];
  public dataSource;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    console.log(this.data);
    this.dataSource = new MatTableDataSource(this.data);
  }

  RemoveRecipe(recipe: Recipe): void {
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

  ViewRecipe(recipe: Recipe): void {}
}
