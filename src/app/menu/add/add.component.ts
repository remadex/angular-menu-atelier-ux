import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  constructor(private service: MenusService, private router: Router) {}

  ngOnInit(): void {}

  addMenu(menu: Menu) {
    this.service.post(menu).subscribe(() => {
      this.router.navigate(['/menus']);
    });
  }
}
