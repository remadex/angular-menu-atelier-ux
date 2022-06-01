import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  @Output() handleSubmit = new EventEmitter();

  ngOnInit(): void {}

  menu: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.handleSubmit.emit(this.menu.value);
  }
}
