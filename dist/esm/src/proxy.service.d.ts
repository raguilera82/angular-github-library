import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
export declare class ProxyService {
    private http;
    constructor(http: Http);
    getUsers(): Observable<Response>;
}
