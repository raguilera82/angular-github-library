import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GithubModule } from '../src';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [BrowserModule, GithubModule.forRoot()],
  bootstrap: [DemoComponent]
})
export class DemoModule {}