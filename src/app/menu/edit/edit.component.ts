import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MenusService } from 'src/app/services/menus.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: MenusService,
    private router: Router
  ) {}

  menu!: Menu;
  ngOnInit(): void {
    this.service
      .read(+this.route.snapshot.paramMap.get('id')!)
      .subscribe((response) => {
        this.menu = response as Menu;
      });
  }

  editMenu(menu: Menu) {
    menu = {
      ...menu,
      id: +this.route.snapshot.paramMap.get('id')!,
    };
    this.service.update(menu).subscribe(() => {
      this.router.navigate(['/menus']);
    });
  }
}
