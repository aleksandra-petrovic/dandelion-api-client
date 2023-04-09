import { Component, OnInit } from '@angular/core';
import { DLResponse, LanguageDetection } from 'src/app/model';
import { LanguageDetectionService } from 'src/app/services/language-detection.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string = '';
  clean: boolean = false;
  DLResponse: DLResponse = new DLResponse([]);

  constructor(private languageDetectionService: LanguageDetectionService) {}

  ngOnInit(): void {}

  submitText(): void {
    if(this.text != ''){
      this.languageDetectionService.setText(this.text);
      this.languageDetectionService.setClean(this.clean);
      this.languageDetectionService.getLanguage().subscribe((detectedLang) => {
        this.DLResponse.detectedLangs = detectedLang.detectedLangs;
    });
    }
  }
  
}
