import { Component, OnInit } from '@angular/core';
import { MenusService } from '../services/menus.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menus!: Menu[];
  constructor(private service: MenusService) {}

  ngOnInit(): void {
    this.readMenus();
  }

  readMenus() {
    this.service.readAll().subscribe((response) => {
      this.menus = response as Menu[];
    });
  }

  deleteMenu(id: any) {
    this.service.delete(id).subscribe(() => {
      this.readMenus();
    });
  }
}
