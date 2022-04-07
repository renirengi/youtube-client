import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { ISearchItems } from '../search-item.model';
@Component({
  selector: 'search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  constructor(){

   }

  ngOnInit(): void {
  }
}
