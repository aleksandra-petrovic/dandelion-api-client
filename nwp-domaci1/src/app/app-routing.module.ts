import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import { LogComponent } from './components/log/log.component';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "configuration",
    component: ConfigurationComponent
  },
  {
    path: "entityextraction",
    component: EntityExtractionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "textsimilarity",
    component: TextSimilarityComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "languagedetection",
    component: LanguageDetectionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sentimentanalysis",
    component: SentimentAnalysisComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "history",
    component: LogComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
