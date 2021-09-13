import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  collapsed = true;

  @Output('onFeatureSelected')
  featureSelected = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(pageName: string){
    //console.log('Selected page : ' + pageName);
    this.featureSelected.emit(pageName);
  }

}
