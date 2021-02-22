import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/shared/services/dialog.service';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-view-details',
  templateUrl: './recipe-view-details.component.html',
  styleUrls: ['./recipe-view-details.component.scss'],
})
export class RecipeViewDetailsComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() deleteRecipe: EventEmitter<number> = new EventEmitter();
  public recipeForm: FormGroup;

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {
    this.InitForm();
  }

  InitForm(): void {}

  DeleteRecipe(): void {
    this.dialogService
      .OpenConfirmDialog(
        `Are you sure you want to delete this recipe ?`,
        'Yes',
        'No'
      )
      .then((result) => {
        if (result.confirm) {
          this.deleteRecipe.emit(this.recipe.id);
        }
      });
  }
}
