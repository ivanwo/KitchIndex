import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const APP_ID = "cb17cbef";
const APP_KEY = "80c27908b4d2fcf3a330b4afcccdaf94";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  recipeList: any[];
  favList: any[] = [];

  getRecipes(
    topic: string,
    calories: number,
    dietary: string
  ): Observable<any> {
    if (dietary === "")
      return this.http.get("https://api.edamam.com/search", {
        params: {
          app_id: APP_ID,
          app_key: APP_KEY,
          calories: `0-${calories}`,
          to: "10",
          q: topic
        }
      });
    else
      return this.http.get("https://api.edamam.com/search", {
        params: {
          app_id: APP_ID,
          app_key: APP_KEY,
          calories: `0-${calories}`,
          to: "10",
          diet: dietary,
          q: topic
        }
      });
  }
  getFavList(): any[] {
    return this.favList;
  }
  setFavList(localFavs): any {
    this.favList = localFavs;
  }
}
