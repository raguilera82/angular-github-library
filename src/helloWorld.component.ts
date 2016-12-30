import { Component } from '@angular/core';

@Component({
  selector: 'radh-hello-world',
  template: 'Hello world from the {{ projectTitle }} module!'
})
export class HelloWorldComponent {
  projectTitle: string = 'angular github library';
}
