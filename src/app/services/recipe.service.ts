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
  lastSearch: any[];

  getRecipes(
    topic: string,
    calories: number,
    dietary: string,
    to: number
  ): Observable<any> {
    this.lastSearch = [topic, calories, dietary, to];
    if (dietary === "")
      return this.http.get("https://api.edamam.com/search", {
        params: {
          app_id: APP_ID,
          app_key: APP_KEY,
          calories: `0-${calories}`,
          from: `${to - 10}`,
          to: `${to}`,
          q: topic
        }
      });
    else
      return this.http.get("https://api.edamam.com/search", {
        params: {
          app_id: APP_ID,
          app_key: APP_KEY,
          calories: `0-${calories}`,
          to: `${to}`,
          from: `${to - 10}`,
          diet: dietary,
          q: topic
        }
      });
  }

  isFavorite(label: string): boolean {
    for (let favorite of this.favList) {
      // alert(favorite.recipe.label);
      if (favorite.recipe.label === label) {
        return true;
      }
    }
    return false;
  }

  getFavList(): any[] {
    return this.favList;
  }
  setFavList(favorite): any {
    this.favList.push(favorite);
  }
  removeFav(label: string): void {
    let removing: number;
    for (let i = 0; i < this.favList.length; i++) {
      if (this.favList[i].recipe.label === label) {
        // this.favList.splice(i, 1);
        removing = i;
        // return;
      }
    }
    if (removing >= 0) {
      this.favList.splice(removing, 1);
      // alert(this.favList.length);
    }
  }
}
// method to check if is favorite
