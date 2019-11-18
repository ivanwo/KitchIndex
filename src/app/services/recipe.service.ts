import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  recipeList: any[];
  favList: any[];

  getRecipes(): Observable<any> {
    return this.http.get(
      "https://api.edamam.com/search?q=chicken&app_id=cb17cbef&app_key=80c27908b4d2fcf3a330b4afcccdaf94"
    );
  }
  getFavList(): any[] {
    return this.favList;
  }
}
