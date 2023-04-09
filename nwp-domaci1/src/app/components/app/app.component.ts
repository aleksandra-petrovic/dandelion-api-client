import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'nwp-domaci1';

  constructor(private logService: LogService) { 
    
  }

  ngOnInit(): void {
    this.logService.requests = [];
  }

}
