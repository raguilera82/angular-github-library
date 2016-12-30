import { ProxyService } from './proxy.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from './user';
export declare class AdapterService {
    private proxy;
    constructor(proxy: ProxyService);
    getUsers(): Observable<Array<User>>;
}
