import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Input('menu') menuModel!: Menu;
  @Output() handleSubmit = new EventEmitter();

  ngOnInit(): void {
    if (this.menuModel) {
      this.menu = new FormGroup({
        name: new FormControl(this.menuModel.name, Validators.required),
        price: new FormControl(this.menuModel.price, Validators.required),
        type: new FormControl(this.menuModel.type, Validators.required),
      });
    }
  }

  menu: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.handleSubmit.emit(this.menu.value);
  }
}
