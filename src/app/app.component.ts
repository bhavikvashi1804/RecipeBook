import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  selectedPage = 'recipe';

  changePage(pageName: string){
    //console.log(pageName);
    this.selectedPage = pageName;
  }
}
