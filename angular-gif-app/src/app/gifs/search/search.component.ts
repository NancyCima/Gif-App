import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../../services/services.module';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>; 
  //txtSearch!: la negación quiere decir que no va a haber asuencia de este elemento. 

  constructor(private gifsService: GifsService) {}

  searchGif() {
    const value = this.txtSearch.nativeElement.value;

    if(value.trim().length === 0) {
      //eliminamos los espacios, evitamos buscar si el input está vacío
      return
    }
    this.gifsService.searchGifs(value);
    this.txtSearch.nativeElement.value = '';
  }
}
