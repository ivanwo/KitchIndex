import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { RecipeService } from "../services/recipe.service";

@Component({
  selector: "app-search-criteria",
  templateUrl: "./search-criteria.component.html",
  styleUrls: ["./search-criteria.component.css"]
})
export class SearchCriteriaComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  dietaryRestrictionHidden: boolean = false;
  caloriesHidden: boolean = false;

  @Output() messageEvent = new EventEmitter<any>();

  doSearch(topic: string, calories: number, dietary: string) {
    if (calories === 1000) calories *= 10;
    // if the dietary restriction and calories are hidden, then the
    if (this.caloriesHidden) calories = 10000;
    // wha
    if (dietary === undefined) dietary = "";
    this.recipeService.getRecipes(topic, calories, dietary).subscribe(data => {
      this.messageEvent.emit(data.hits);
    });
  }
  toggleCalories() {
    this.caloriesHidden = !this.caloriesHidden;
  }

  toggleDietary() {
    this.dietaryRestrictionHidden = !this.dietaryRestrictionHidden;
  }
  ngOnInit() {}
}
