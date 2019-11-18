import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { SearchCriteriaComponent } from "../search-criteria/search-criteria.component";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}

  recipeList: any[];

  receiveEvent(newRecipeList) {
    this.recipeList = newRecipeList;
  }

  ngOnInit() {
    this.recipeService
      .getRecipes("chicken")
      .subscribe(data => (this.recipeList = data.hits));
    // console.log(typeof this.recipeList);
  }
}
