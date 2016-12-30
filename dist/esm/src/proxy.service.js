import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export var ProxyService = (function () {
    function ProxyService(http) {
        this.http = http;
    }
    ProxyService.prototype.getUsers = function () {
        return this.http.get('https://api.github.com/users');
    };
    ProxyService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ProxyService.ctorParameters = function () { return [
        { type: Http, },
    ]; };
    return ProxyService;
}());
//# sourceMappingURL=proxy.service.js.map