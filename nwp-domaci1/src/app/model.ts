export interface Configuration {
    token: string
  }

export interface Image {
    thumbnail: string
}

export interface EntityExtraction {
    label: string,
    image: Image,
    abstract: string,
    categories: string[],
}

export class EEResponse {
    annotations: EntityExtraction[]

    constructor(annotations: EntityExtraction[]){
        this.annotations = annotations;
    }

    setAnnotations(annotations: EntityExtraction[]): void {
        this.annotations = annotations;
    }

    getAnnotations(){
        return this.annotations;
    }
}

export interface  TextSimilarity {
    similarity: string
}

export interface LanguageDetection {
    lang: string,
    confidence: number
}

export class DLResponse {
    detectedLangs: LanguageDetection[]

    constructor(detectedLangs: LanguageDetection[]){
        this.detectedLangs = detectedLangs;
    }

    setDetectedLangs(detectedLangs: LanguageDetection[]): void{
        this.detectedLangs = detectedLangs;
    }

    getDetectedLangs(){
        return this.detectedLangs;
    }
}

export interface SentimentAnalysis {
    score: number,
    type: string
}

export class SAResponse {
    sentiment: SentimentAnalysis | null;

    constructor(sentiment: SentimentAnalysis | null) {
        this.sentiment = sentiment;
    }

    setSentiment(sentiment: SentimentAnalysis): void{
        this.sentiment = sentiment;
    }

    getSentiment(){
        return this.sentiment;
    }
}