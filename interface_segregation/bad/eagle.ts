import { Bird } from "./bird";

export class Eagle implements Bird {
     location: string;
     feathers: number;
     public fly(): string {
          return 'eagle fly';
     }
     public molt(): string {
          return 'eagle molt';
     }
}