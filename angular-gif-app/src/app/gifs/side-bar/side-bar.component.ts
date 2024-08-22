import { Component } from '@angular/core';
import { GifsService } from '../../services/services.module';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  get historial(){
    return this.GifsService.history;
  }

  constructor(private GifsService: GifsService){
  }

}
