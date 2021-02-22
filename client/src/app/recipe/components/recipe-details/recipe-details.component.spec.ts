import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RecipeBookApiModule } from 'src/app/recipe-book-api/recipe-book-api.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeAddComponent } from '../../containers/recipe-add/recipe-add.component';
import { RecipeListComponent } from '../../containers/recipe-list/recipe-list.component';
import { RecipeViewComponent } from '../../containers/recipe-view/recipe-view.component';
import { RecipeEffects } from '../../effects/recipe.effects';
import { DurationPipe } from '../../pipes/duration.pipe';
import { IngredientsViewPipe } from '../../pipes/ingredients-view.pipe';
import { InstructionsViewPipe } from '../../pipes/instructions-view.pipe';
import { RecipeRoutingModule } from '../../recipe-routing.module';
import { RecipeIngredientComponent } from '../recipe-ingredient/recipe-ingredient.component';
import { RecipeListTableComponent } from '../recipe-list-table/recipe-list-table.component';
import { RecipeViewDetailsComponent } from '../recipe-view-details/recipe-view-details.component';
import * as fromRecipe from '../../reducers/recipe.reducer';
import { RecipeDetailsComponent } from './recipe-details.component';

describe('RecipeDetailsComponent', () => {
  let component: RecipeDetailsComponent;
  let fixture: ComponentFixture<RecipeDetailsComponent>;

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
    fixture = TestBed.createComponent(RecipeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
