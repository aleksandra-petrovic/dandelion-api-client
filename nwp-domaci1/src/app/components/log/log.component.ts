import { Component, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  requests: any[];
  date: Date;

  constructor(private logService: LogService) { 
    this.requests = this.logService.requests;
    this.date = this.logService.date;
  }

  ngOnInit(): void {
  }

}
