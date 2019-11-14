import { Component, Input } from '@angular/core';

import { AdComponent } from './ad.component';

export interface myinterface {
  remove(index: number);
}

@Component({
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>Name: {{data.name}}</h4>

      <p>Bio: {{data.bio}}</p>

      <strong>Hire this hero today!</strong>
      <button (click)="removeMe()">remove </button>
    </div>
  `
})
export class HeroProfileComponent implements AdComponent {
  public compInteraction: myinterface;

  index: number = 0;
  @Input() data: any;

  constructor() {
    console.log(this.data);
  }

  removeMe() {
    this.compInteraction.remove(this.index);
  }

}


