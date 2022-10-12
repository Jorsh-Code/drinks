import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import StorageHelper from '../libs/helpers/storage.helper';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }

  login(username: string, password:string){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/login',{ 
        username,
        password
    })
  }

  getDrinks(){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/drink',{
      endpoint: "json/v1/1/list.php?i=list"
    }).pipe(
      map((resp:any)=>{
        let drinks: any[] = [];
        resp.drinks.forEach((drink:any) => {
          
          drinks.push({
            name: drink.strIngredient1,
            img: 'https://www.thecocktaildb.com/images/ingredients/'+drink.strIngredient1+'.png'
          })
        });
        return drinks
      })
    );
  }

  getRandomCocktail(name: string){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/mirror/drink',{
      endpoint: "json/v1/1/random.php?i="+name
    }).pipe(
      map((resp:any) => {
        //return resp
        return{
          name: resp.drinks[0].strDrink,
          img: resp.drinks[0].strDrinkThumb,
          instructions: resp.drinks[0].strInstructions
        }
        
      })
    );
  }

  refreshToken(){
    return this.http.post('http://ec2-18-116-97-69.us-east-2.compute.amazonaws.com:4001/api/refresh',{
      session: StorageHelper.getItem('session')
    });
  }
}
