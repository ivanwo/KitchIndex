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
  isFavorite: boolean = true;
  detailsHidden: boolean[] = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true
  ];

  receiveEvent(newRecipeList) {
    this.recipeList = newRecipeList;
  }

  addFav(index: number) {
    this.favList = this.recipeService.getFavList();
    if (!this.recipeService.isFavorite(this.recipeList[index].recipe.label)) {
      //   alert("not a fav yet");
      this.recipeList[index].isFav = true;
    } else {
      this.recipeList[index].isFav = false;
      this.favList.splice(index, 1);
    }
  }

  makeFav(favorite) {
    this.recipeService.setFavList(favorite);
  }
  moreResults() {
    let lastSearch = this.recipeService.lastSearch;
    this.detailsHidden = [
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true
    ];
    this.recipeService
      .getRecipes(
        lastSearch[0],
        lastSearch[1],
        lastSearch[2],
        lastSearch[3] + 10
      )
      .subscribe(data => (this.recipeList = data.hits));
    window.scroll({
      top: 350,
      left: 0,
      behavior: "smooth"
    });
  }
  toggleDetails(i: number): void {
    this.detailsHidden[i] = !this.detailsHidden[i];
  }
  ngOnInit() {
    this.recipeService
      .getRecipes("chicken", 1000, "", 10)
      .subscribe(data => (this.recipeList = data.hits));
    this.favList = this.recipeService.getFavList();
  }
}
