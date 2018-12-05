import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A recipe test', 'This is a description for testing', `assets/img/food_1.jpg`),
    new Recipe('An other recipe test', 'This is a description for other testing', `assets/img/food_2.jpg`)
  ];
  constructor() { }

  ngOnInit() {
  }

}
