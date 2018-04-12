import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veriam, quis',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veriam, quis',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veriam, quis',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
