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
  infoToggle: boolean = true;
  showMore: boolean[] = [
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
  gone: boolean = true;

  info(index: number): void {
    this.showMore[index] = !this.showMore[index];
  }

  deleteMe(index: number): void {
    this.favList.splice(index, 1);
  }

  ngOnInit() {
    this.favList = this.recipeService.getFavList();
    console.log(this.favList);

    // for (let i = 0; i < 10; i++) {
    //   this.postShowing.push(false);
    // }
    // console.log(this.postShowing);
  }
}
