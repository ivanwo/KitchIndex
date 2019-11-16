import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  dietaryRestrictionHidden: boolean = true;
  caloriesHidden: boolean = true;
  doSearch() {
    alert("SEARCH!");
  }
  toggleCalories() {
    this.caloriesHidden = !this.caloriesHidden;
  }

  toggleDietary() {
    this.dietaryRestrictionHidden = !this.dietaryRestrictionHidden;
  }
  ngOnInit() {}
}
