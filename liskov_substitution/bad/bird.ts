export class Bird {
     name: string;

     constructor(name: string) {
          this.name = name;
     }

     public fly(): string {
          return `${this.name} is flying`;
     }

     public run(): string {
          return `${this.name} is running`;
     }
}