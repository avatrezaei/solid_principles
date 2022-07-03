import { Feathered } from "./feathered";
import { Flaying } from "./flying";

export class Eagle implements Flaying, Feathered {
    
     public fly(): string {
          return "eagle fly";
     }
     public molt(): string {
          return "eagle molt";
     }
}