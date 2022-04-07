import { Component, OnInit } from '@angular/core';
import { ISnippet } from '../search-item.model';
import { VideosService } from 'src/app/services/videos.service';
@Component({
  selector: 'search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
