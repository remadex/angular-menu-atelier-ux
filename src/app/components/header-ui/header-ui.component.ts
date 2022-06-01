import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'header-ui',
  templateUrl: './header-ui.component.html',
  styleUrls: ['./header-ui.component.css'],
})
export class HeaderUiComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
