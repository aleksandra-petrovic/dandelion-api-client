import { Component, OnInit } from '@angular/core';
import { SAResponse } from 'src/app/model';
import { SentimentAnalysisService } from 'src/app/services/sentiment-analysis.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string = '';
  lang: string = '';
  SAResponse: SAResponse = new SAResponse(null);
  typeColor: string = 'color:rgb(0,0,0);';

  newColor: number[] = [];
  scoreScaled: number = 0;


  constructor(private sentimentAnalysisService: SentimentAnalysisService) { }

  ngOnInit(): void {
  }

  submitText(): void {
    if(this.text != '' && this.lang != ''){
      this.sentimentAnalysisService.setText(this.text);
      this.sentimentAnalysisService.setLang(this.lang);
      this.sentimentAnalysisService.getSentiment().subscribe((sentiment) => {
        this.SAResponse.sentiment = sentiment.sentiment;
        this.modifyColor();
      });
    }
  }

  modifyColor(): void {
    //a.r + (b.r - a.r) * t,
    //red: number[] = [255,0,0];
    //green: number[] = [50,205,50];
    this.newColor = [];
    this.newColor.push(255 + (50 - 255) * this.mapScore(this.SAResponse.sentiment!.score));
    this.newColor.push(0 + (205 - 0) * this.mapScore(this.SAResponse.sentiment!.score));
    this.newColor.push(0 + (50 - 0)) * this.mapScore((this.SAResponse.sentiment!.score));

    this.typeColor = 'color:rgb(' + this.newColor.at(0) + ", " + this.newColor.at(1) + ", " + this.newColor.at(2) + ")";

    console.log(this.typeColor + " -typecolor");

  }

  mapScore(score: number) {
    //(val - A)*(b-a)/(B-A) + a
    //iz AB u ab
    //iz -1 do 1 u 0 do 1
    this.scoreScaled = (score + 1) * 1 / 2 + 0 ;
    console.log("skor scaled " + this.scoreScaled);
    return this.scoreScaled;
  }

}
