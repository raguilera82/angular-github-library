import { ProxyService } from './proxy.service';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { User } from './user';
export var AdapterService = (function () {
    function AdapterService(proxy) {
        this.proxy = proxy;
    }
    AdapterService.prototype.getUsers = function () {
        return this.proxy.getUsers().map(function (response) {
            var objs = response.json();
            var users = [];
            objs.forEach(function (obj) {
                users.push(new User(obj.login, obj.avatar_url));
            });
            return users;
        });
    };
    AdapterService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AdapterService.ctorParameters = function () { return [
        { type: ProxyService, },
    ]; };
    return AdapterService;
}());
//# sourceMappingURL=adapter.service.js.map