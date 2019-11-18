import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-favorites-page",
  templateUrl: "./favorites-page.component.html",
  styleUrls: ["./favorites-page.component.css"]
})
export class FavoritesPageComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  favList: any[];

  ngOnInit() {
    this.favList = this.recipeService.getFavList();
  }
}
