import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput')
  itemName!: ElementRef;

  @ViewChild('amountInput')
  itemAmount!: ElementRef;

  @Output('ingredientEmitter')
  ingredientEmitter = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    this.ingredientEmitter.emit(
      new Ingredient(
        this.itemName.nativeElement.value,
        this.itemAmount.nativeElement.value
      )
    );

    this.itemName.nativeElement.value = "";
    this.itemAmount.nativeElement.value = "";
  }
}
