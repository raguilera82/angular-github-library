import { AdapterService } from './adapter.service';
import { Component } from '@angular/core';
export var ListComponent = (function () {
    function ListComponent(adapter) {
        this.adapter = adapter;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adapter.getUsers().subscribe(function (users) { return _this.users = users; });
    };
    ListComponent.decorators = [
        { type: Component, args: [{
                    selector: 'radh-app-list',
                    template: "<div *ngFor=\"let user of users\">\n              <div><img src=\"{{user.avatar}}\" width=\"50px\"/> {{user.login}}</div>\n             </div>"
                },] },
    ];
    /** @nocollapse */
    ListComponent.ctorParameters = function () { return [
        { type: AdapterService, },
    ]; };
    return ListComponent;
}());
//# sourceMappingURL=list.component.js.map