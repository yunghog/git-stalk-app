import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/users.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() userProfile: User = new User(
    'yunghog',
    41548444,
    'MDQ6VXNlcjQxNTQ4NDQ0',
    'https://avatars.githubusercontent.com/u/41548444?v=4',
    '',
    'https://api.github.com/users/yunghog',
    'https://github.com/yunghog',
    'https://api.github.com/users/yunghog/followers',
    'https://api.github.com/users/yunghog/following{/other_user}',
    'https://api.github.com/users/yunghog/gists{/gist_id}',
    'https://api.github.com/users/yunghog/starred{/owner}{/repo}',
    'https://api.github.com/users/yunghog/subscriptions',
    'https://api.github.com/users/yunghog/orgs',
    'https://api.github.com/users/yunghog/repos',
    'https://api.github.com/users/yunghog/events{/privacy}',
    'https://api.github.com/users/yunghog/received_events',
    'User',
    false,
    'Samartha',
    'Robosoft Technologies Pvt. Ltd.',
    'https://yunghog.github.io',
    'Sagar, India',
    null,
    true,
    'Building things. 1 commit at a time',
    null,
    29,
    0,
    10,
    7
  );
  constructor() {}

  ngOnInit() {}
}
