import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './gif-page/gif-page.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    GifPageComponent,
    SearchComponent,
    SearchResultsComponent,
    SideBarComponent
  ],
  exports:[
    GifPageComponent,
    SearchComponent,
    SearchResultsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
