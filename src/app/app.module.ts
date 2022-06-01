import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderUiComponent } from './components/header-ui/header-ui.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuComponent as MenuFormComponent } from './components/forms/menu/menu.component';
import { AddComponent } from './menu/add/add.component';
import { EditComponent } from './menu/edit/edit.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderUiComponent,
    HomeComponent,
    MenuComponent,
    AddComponent,
    EditComponent,
    LoginComponent,
    MenuFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
