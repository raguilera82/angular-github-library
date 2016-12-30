import { AdapterService } from './adapter.service';
import { OnInit } from '@angular/core';
import { User } from './user';
export declare class ListComponent implements OnInit {
    private adapter;
    users: Array<User>;
    constructor(adapter: AdapterService);
    ngOnInit(): void;
}
