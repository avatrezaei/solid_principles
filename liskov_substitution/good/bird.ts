export class Bird {
     name: string;

     constructor(name: string) {
          this.name = name;
     }

     public run(): string {
          return `${this.name} is running`;
     }
}