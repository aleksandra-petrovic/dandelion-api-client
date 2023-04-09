import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { DLResponse, LanguageDetection } from '../model';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageDetectionService {

  private readonly apiUrl = environment.dandelionAPI
  text: string = '';
  clean: boolean = false;

  constructor(private httpClient: HttpClient, private logService: LogService) { }

  getLanguage(): Observable<DLResponse> {
    let params = new HttpParams().append('text', this.text).append('clean', this.clean).append('token', <string> localStorage.getItem('token'));
    const paramsLog = new URLSearchParams({
      text: this.text,
      clean: this.clean.toString(),
    });
    this.logService.logRequest(`${this.apiUrl}/datatxt/nex/v1` + paramsLog.toString());
    return this.httpClient.get<DLResponse>(`${this.apiUrl}/datatxt/li/v1`, { params: params});
  }

  setText(text: string): void {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  setClean(clean: boolean): void {
    this.clean = clean;
  }

  getClean() {
    return this.clean;
  }

}
