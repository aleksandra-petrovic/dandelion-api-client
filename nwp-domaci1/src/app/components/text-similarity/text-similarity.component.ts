import { Component, OnInit } from '@angular/core';
import { TextSimilarityService } from 'src/app/services/text-similarity.service';
import {TextSimilarity} from "../../model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  textSimilarity: string = '';
  text1: string;
  text2: string;

  constructor(private textSimilarityService: TextSimilarityService){
    this.text1 = this.textSimilarityService.getText1();
    this.text2 = this.textSimilarityService.getText2();
  }

  ngOnInit(): void {
    
  }

  submitText(): void {
    this.textSimilarityService.setText1(this.text1);
    this.textSimilarityService.setText2(this.text2);
    this.textSimilarityService.getSimilarity().subscribe(textSimilarity => {
      this.textSimilarity = textSimilarity.similarity;
    })
  }

}
