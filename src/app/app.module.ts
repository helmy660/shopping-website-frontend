import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClothListComponent } from './clothes/cloth-list/cloth-list.component';
import { ClothDetailComponent } from './clothes/cloth-detail/cloth-detail.component';
import { ClothItemComponent } from './clothes/cloth-list/cloth-item/cloth-item.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ShoeListComponent } from './shoes/shoe-list/shoe-list.component';
import { ShoeDetailComponent } from './shoes/shoe-detail/shoe-detail.component';
import { ShoeItemComponent } from './shoes/shoe-list/shoe-item/shoe-item.component';
import { DropdownDirective } from './shared/dropdown/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    FooterComponent,
    ShoppingEditComponent,
    ClothesComponent,
    ClothListComponent,
    ClothDetailComponent,
    ClothItemComponent,
    ShoesComponent,
    ShoeListComponent,
    ShoeDetailComponent,
    ShoeItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
