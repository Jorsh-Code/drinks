import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, map } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DrinkComponent } from '../drink/drink.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  //public drinks: any[] = [];
  public drink$!: Observable<any>

  constructor(private apiService: ApiService,public dialog: MatDialog) {
    this.drink$ = apiService.getDrinks();
    /*apiService.getDrinks().subscribe((resp:any) =>{
      resp.drinks.forEach((drink:any) => {
        this.drinks.push({
          name: drink.strIngredient1,
          img: 'https://www.thecocktaildb.com/images/ingredients/'+drink.strIngredient1+'.png'
        })
      });
    })*/
   }

  ngOnInit(): void {
  }

  getRandomCocktail(name: string) {
    this.apiService.getRandomCocktail(name).subscribe((resp:any) =>{
      this.dialog.open(DrinkComponent, {
        height: (500)+'px',
        width: (400)+'px',
        data: resp,
      });
    })
    
  }

}
