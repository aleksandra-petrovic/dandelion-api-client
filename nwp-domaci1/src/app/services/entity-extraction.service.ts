import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { EEResponse, EntityExtraction } from '../model';
import { Observable } from 'rxjs';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {

  private readonly apiUrl = environment.dandelionAPI
  text: string = '';
  confidence: number = 0;
  include: string[] = [];

  constructor(private httpClient: HttpClient, private logService: LogService) { }

  getEntityExtractions(): Observable<EEResponse> {
    let params = new HttpParams().append('text', this.text).append('confidence', this.confidence).append('include', this.include.join(",")).append('token', <string> localStorage.getItem('token'));
    const paramsLog = new URLSearchParams({
      text: this.text,
      confidence: this.confidence.toString(),
      include: this.include.toString(),
    });
    this.logService.logRequest(`${this.apiUrl}/datatxt/nex/v1` + paramsLog.toString());
    return this.httpClient.get<EEResponse>(`${this.apiUrl}/datatxt/nex/v1`, { params: params});
  }

  setText(text: string): void {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  setConfidence(confidence: number): void {
    this.confidence = confidence;
  }

  getConfidence() {
    return this.confidence;
  }

  setInclude(include: string[]): void {
    this.include = include;
  }

  getInclude() {
    return this.include;
  }


}
