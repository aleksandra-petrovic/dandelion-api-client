import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { TextSimilarity } from '../model';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class TextSimilarityService {
  
  private readonly apiUrl = environment.dandelionAPI
  text1: string = '';
  text2: string = '';

  constructor(private httpClient: HttpClient, private logService: LogService) { 
  }


  getSimilarity(): Observable<TextSimilarity> {
    let params = new HttpParams().append('text1', this.text1).append('text2', this.text2).append('token', <string> localStorage.getItem('token'));
    const paramsLog = new URLSearchParams({
      text1: this.text1,
      text2: this.text2,
    });
    this.logService.logRequest(`${this.apiUrl}/datatxt/nex/v1` + paramsLog.toString());
    return this.httpClient.get<TextSimilarity>(`${this.apiUrl}/datatxt/sim/v1`, { params: params})
  }

  setText1(text1: string): void {
    this.text1 = text1;
  }

  setText2(text2: string): void {
    this.text2 = text2;
  }

  getText1() {
    return this.text1;
  }

  getText2() {
    return this.text2;
  }


}


