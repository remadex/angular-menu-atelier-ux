import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddComponent } from './menu/add/add.component';
import { EditComponent } from './menu/edit/edit.component';
import { MenuComponent } from './menu/menu.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'menus',
    component: MenuComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'menus/add',
    component: AddComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'menus/:id',
    component: EditComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
