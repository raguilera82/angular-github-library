import { ProxyService } from './proxy.service';
import { AdapterService } from './adapter.service';
import { ListComponent } from './list.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloWorldComponent } from './helloWorld.component';
export var GithubModule = (function () {
    function GithubModule() {
    }
    GithubModule.forRoot = function () {
        return {
            ngModule: GithubModule
        };
    };
    GithubModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        HelloWorldComponent, ListComponent
                    ],
                    imports: [CommonModule],
                    providers: [AdapterService, ProxyService],
                    exports: [HelloWorldComponent, ListComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA]
                },] },
    ];
    /** @nocollapse */
    GithubModule.ctorParameters = function () { return []; };
    return GithubModule;
}());
//# sourceMappingURL=github.module.js.map