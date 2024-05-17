import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-search',
  templateUrl: './bar-search.component.html',
  styleUrl: './bar-search.component.scss'
})
export class BarSearchComponent {

  @Input() homePage: boolean = false;
  @Input() labelText: string = 'Search:';
  
  searchTerm: string = '';

  applyFilters(){}
}
