import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user.model';
import { usersTemplate } from 'src/environments/environment';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: User[] = usersTemplate;

  constructor() { }

  ngOnInit(): void {
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
