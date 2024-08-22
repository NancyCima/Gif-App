import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from './gifs/side-bar/side-bar.component';
import { GifPageComponent } from './gifs/gif-page/gif-page.component';
import { SearchComponent } from './gifs/search/search.component';
import { SearchResultsComponent } from './gifs/search-results/search-results.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, GifPageComponent, SearchComponent, SearchResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-gif-app';
}

