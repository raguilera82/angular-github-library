import { ProxyService } from './proxy.service';
import { AdapterService } from './adapter.service';
import { ListComponent } from './list.component';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [CommonModule, HttpModule],
  providers: [AdapterService, ProxyService],
  exports: [ListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GithubModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: GithubModule
    };
  }

}