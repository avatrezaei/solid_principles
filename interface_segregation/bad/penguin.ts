import { Bird } from "./bird";

export class Penguin implements Bird {
  location: string;
  feathers: number;
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