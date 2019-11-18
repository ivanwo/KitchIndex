import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipe";

@Component({
  selector: "app-favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.css"]
})
export class FavoritesPageComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  favList: any[];
  favRecipe: Recipe;
  ngOnInit() {
    this.favList = this.recipeService.getFavList();
  }
}
