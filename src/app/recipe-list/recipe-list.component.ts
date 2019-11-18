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
  clickedHeart: boolean;
  favList: any[];
  receiveEvent(newRecipeList) {
    this.recipeList = newRecipeList;
  }

  toggleHeartIcon(): void {
    this.clickedHeart = !this.clickedHeart;
  }

  addFavs(
    title: string,
    image: string,
    source: string,
    imageLink: string,
    ingredientsLines: any[]
  ): any {
    this.favList = this.recipeService.getFavList();
    this.favList.push({ title, image, source, imageLink, ingredientsLines });
  }

  ngOnInit() {
    this.recipeService
      .getRecipes("chicken", 1000)
      .subscribe(data => (this.recipeList = data.hits));
    // console.log(typeof this.recipeList);
  }
}
