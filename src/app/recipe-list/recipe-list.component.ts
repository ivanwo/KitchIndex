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
  ingredientLines: any[];
  recipeList: any[];
  favList: any[];
  favorite: boolean[];

  receiveEvent(newRecipeList) {
    this.recipeList = newRecipeList;
  }

  // isFavorite(label: string): any {
  //   this.favList = this.recipeService.getFavList();
  //   for (let fav of this.favList) {
  //     if (fav.label === label) return true;
  //   }
  //   return false;
  // }

  isFavorite: boolean = true;

  addFav(index: number) {
    //   this.recipeService.setFavList(this.favList);

    this.recipeList[index].isFav = true;
  }
  makeFav(favorite) {
    this.recipeService.setFavList(favorite);
  }
  ngOnInit() {
    //
    //
    this.recipeService
      .getRecipes("chicken", 1000, "")
      .subscribe(data => (this.recipeList = data.hits));
    // console.log(typeof this.recipeList);
  }
}
