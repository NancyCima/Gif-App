import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsService } from '../../services/services.module';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {

  get results() {
    return this.gifsService.results
  }

  constructor(private gifsService : GifsService) { }

}