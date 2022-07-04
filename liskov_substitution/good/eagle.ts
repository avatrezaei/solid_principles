import { Bird } from "./bird";

export class Eagle extends Bird {

     public fly(): string {
          return `${this.name} is flying`;
     }
}