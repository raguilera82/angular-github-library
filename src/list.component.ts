import { AdapterService } from './adapter.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'radh-app-list',
  template: `<div *ngFor="let user of users">
              <div><img src="{{user.avatar}}" width="50px"/> {{user.login}}</div>
             </div>`
})
export class ListComponent implements OnInit {

  users: Array<User>;

  constructor(private adapter: AdapterService) { }

  ngOnInit(): void {
    this.adapter.getUsers().subscribe(
      users => this.users = users
    );
  }

}
