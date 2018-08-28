//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { RoutesModule } from './routes.module';

//Layout Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { MainComponent } from './layout/main/main.component';

//Components
import { LoginComponent } from './components/auth/login/login.component';
//Services
import { LoginService } from './services/login.service';
import { RegisterComponent } from './components/auth/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    LoginComponent,
    NavComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RoutesModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
