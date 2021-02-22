import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RecipeBookApiModule } from 'src/app/recipe-book-api/recipe-book-api.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeDetailsComponent } from '../../components/recipe-details/recipe-details.component';
import { RecipeIngredientComponent } from '../../components/recipe-ingredient/recipe-ingredient.component';
import { RecipeListTableComponent } from '../../components/recipe-list-table/recipe-list-table.component';
import { RecipeViewDetailsComponent } from '../../components/recipe-view-details/recipe-view-details.component';
import { RecipeEffects } from '../../effects/recipe.effects';
import { DurationPipe } from '../../pipes/duration.pipe';
import { IngredientsViewPipe } from '../../pipes/ingredients-view.pipe';
import { InstructionsViewPipe } from '../../pipes/instructions-view.pipe';
import { RecipeRoutingModule } from '../../recipe-routing.module';
import { RecipeAddComponent } from '../recipe-add/recipe-add.component';
import { RecipeViewComponent } from '../recipe-view/recipe-view.component';
import * as fromRecipe from '../../reducers/recipe.reducer';

import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
  let component: RecipeListComponent;
  let fixture: ComponentFixture<RecipeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RecipeListComponent,
        RecipeListTableComponent,
        RecipeAddComponent,
        RecipeDetailsComponent,
        RecipeIngredientComponent,
        RecipeViewComponent,
        RecipeViewDetailsComponent,
        IngredientsViewPipe,
        InstructionsViewPipe,
        DurationPipe,
      ],
      imports: [
        CommonModule,
        RecipeRoutingModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes([]),
        SharedModule,
        ReactiveFormsModule,
        RecipeBookApiModule,
        FormsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreModule.forFeature(fromRecipe.recipeFeatureKey, fromRecipe.reducer),
        EffectsModule.forFeature([RecipeEffects]),
      ],
      providers: [FormBuilder],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
