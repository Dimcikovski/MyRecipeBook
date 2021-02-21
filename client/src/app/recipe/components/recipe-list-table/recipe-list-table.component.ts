import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Recipe } from '../../models/recipe.model';
@Component({
  selector: 'app-recipe-list-table',
  templateUrl: './recipe-list-table.component.html',
  styleUrls: ['./recipe-list-table.component.scss'],
})
export class RecipeListTableComponent implements OnInit {
  @Input('data') set tableData(data: Recipe[]) {
    if (data !== undefined) {
      this.dataSource = new MatTableDataSource(data);
    }
  }

  @Output() deleteRecipe: EventEmitter<number> = new EventEmitter();
  @Output() viewRecipe: EventEmitter<number> = new EventEmitter();
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

  ngOnInit(): void {}

  RemoveRecipe(recipe: Recipe): void {
    this.dialogService
      .OpenConfirmDialog(
        `Are you sure you want to delete recipe with id ${recipe.id} ?`,
        'Yes',
        'No'
      )
      .then((result) => {
        if (result.confirm) {
          this.deleteRecipe.emit(recipe.id);
        }
      });
  }

  ViewRecipe(recipe: Recipe): void {
    this.viewRecipe.emit(recipe.id);
  }
}
