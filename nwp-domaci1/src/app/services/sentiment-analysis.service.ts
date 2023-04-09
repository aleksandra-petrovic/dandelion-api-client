import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { SAResponse } from '../model';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly apiUrl = environment.dandelionAPI
  text: string = '';
  lang: string = '';

  constructor(private httpClient: HttpClient, private logService: LogService) { }

  getSentiment(): Observable<SAResponse> {
    let params = new HttpParams().append('lang', this.lang).append('text', this.text).append('token', <string> localStorage.getItem('token'));
    const paramsLog = new URLSearchParams({
      text: this.text,
      lang: this.lang,
    });
    this.logService.logRequest(`${this.apiUrl}/datatxt/nex/v1` + paramsLog.toString());
    return this.httpClient.get<SAResponse>(`${this.apiUrl}/datatxt/sent/v1`, { params: params});
  }

  setText(text: string): void {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  setLang(lang: string): void {
      this.lang = lang;
  }

  getLang() {
    return this.lang;
  }


}
