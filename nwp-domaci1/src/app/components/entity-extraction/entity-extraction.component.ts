import { Component, OnInit } from '@angular/core';
import { EEResponse } from 'src/app/model';
import { EntityExtractionService } from 'src/app/services/entity-extraction.service';
import { LogService } from 'src/app/services/log.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string = '';
  confidence: number = 0;
  include: string[] = [];
  EEResponse: EEResponse = new EEResponse([]);
  image: boolean = false;
  abstract: boolean = false;
  categories: boolean = false;

  constructor(private entityExctractionService: EntityExtractionService) { }

  ngOnInit(): void { }

  submitText(): void {
    if(this.text != ''){
      this.entityExctractionService.setText(this.text);
      this.entityExctractionService.setConfidence(this.confidence);
      this.entityExctractionService.setInclude(this.updateInclude());
      this.entityExctractionService.getEntityExtractions().subscribe((entityExtractions) => {
      this.EEResponse.annotations = entityExtractions.annotations;
      for (let i = 0; i < entityExtractions.annotations.length ; i++){
          this.EEResponse.annotations.at(i)!.image = entityExtractions.annotations.at(i)!.image;
      }
    });
    }
  }

  updateInclude(){
    this.include = [];

    if(this.image){
      this.include.push("image");
    }
    if(this.abstract){
      this.include.push("abstract");
    }
    if(this.categories){
      this.include.push("categories");
    }

    return this.include;
  }


}
