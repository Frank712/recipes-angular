import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A recipe test', 'This is a description for testing', 'https://www.google.com.mx/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwimtYzDzIffAhWIna0KHdxuAa0QjRx6BAgBEAU&url=https%3A%2F%2Fwww.hellofresh.ca%2Frecipes%2F&psig=AOvVaw3EnpPGR9lXejRk_kAxTRLx&ust=1544061770320465')
  ];
  constructor() { }

  ngOnInit() {
  }

}
