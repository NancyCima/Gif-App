import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SearchResultsComponent } from '../search-results/search-results.component';

@Component({
  selector: 'app-gif-page',
  standalone: true,
  imports: [SearchComponent, SearchResultsComponent],
  templateUrl: './gif-page.component.html',
  styleUrl: './gif-page.component.css'
})
export class GifPageComponent {

  constructor() { }

}