import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { BookComponent } from './Components/book/book.component';
import { NavBarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './Components/logout/logout.component';
import { MyordersComponent } from './Components/myorders/myorders.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ShopingcartComponent } from './Components/shopingcart/shopingcart.component';
import { WishlistComponent } from './Components/wishlist/wishlist.component';
import { ProductFiltersComponent } from './Components/product-filters/product-filters.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    NavBarComponent,
    LogoutComponent,
    MyordersComponent,
    WishlistComponent,
    ShopingcartComponent,
    ProductFiltersComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
