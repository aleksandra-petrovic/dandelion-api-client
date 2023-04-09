import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  requests: any[] = [];
  date: Date = new Date();

  logRequest(req: string){
    this.date = new Date();
    this.requests.push(req); 
  }
  
}
