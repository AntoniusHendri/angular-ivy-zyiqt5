import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Tugas Akhir Antonius Hendri {{182202988}}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
