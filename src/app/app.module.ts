import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material'
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {  MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GetbooksComponent } from './components/getbooks/getbooks.component';
import { MycartComponent } from './components/mycart/mycart.component';
// import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { OrderComponent } from './components/order/order.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    GetbooksComponent,
    MycartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,MatSortModule,MatTableModule,MatStepperModule,MatRadioModule,
    AppRoutingModule,MatExpansionModule,MatMenuModule,MatSnackBarModule,
    BrowserAnimationsModule,MatToolbarModule,HttpClientModule,
    MatCardModule,MatTooltipModule,MatBadgeModule,
    FormsModule,MatIconModule, MatButtonModule,MatPaginatorModule,
    ReactiveFormsModule, MatFormFieldModule, MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
