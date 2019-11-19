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
  clickedHeart: boolean;
  favList: any[];
  toggle = true;

  receiveEvent(newRecipeList) {
    this.recipeList = newRecipeList;
  }

  toggleHeartIcon(): void {
    this.clickedHeart = !this.clickedHeart;
  }

  addFavs(favorite) {
    //   title: string,
    //   image: string,
    //   // source: string,

    //   ingredientLines: string[]
    // ): any {
    //   this.favList = this.recipeService.getFavList();
    //   // console.log(typeof this.favList);
    //   this.favList.push({ title, image, ingredientLines });
    //   this.recipeService.setFavList(this.favList);
    this.recipeService.setFavList(favorite);
  }
  toggleColor(): void {
    this.toggle = !this.toggle;
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
