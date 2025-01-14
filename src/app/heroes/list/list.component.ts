import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Batman', 'Ironman', 'Superman', 'Hulk', 'Spiderman'];
  public deletedHero ?: string;

  removeLastHero():void{
    this.deletedHero = this.heroNames.pop();
  }
}
