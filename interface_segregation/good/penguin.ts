import { Feathered } from "./feathered";
import { Swimming } from "./swimming";

export class Penguin implements Swimming, Feathered {
  
  public fly(): void {
    throw new Error("Penguins can't fly");
  }
  public molt(): string {
    return "penguin molt";
  }

  public swim(): string {
    return "penguin swim";
  }
}