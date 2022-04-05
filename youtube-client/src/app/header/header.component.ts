import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isResultHidden:boolean = false;
  @Output() toggle: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  public onToggle() {
    this.isResultHidden = !this.isResultHidden;
    if (this.isResultHidden) {
      this.toggle.emit(false);
      console.log(1)
    } else {
      this.toggle.emit(true);
      console.log(2)
    }
  }

  }


