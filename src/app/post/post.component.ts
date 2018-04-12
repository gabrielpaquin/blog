import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLikeIts: number;
  @Input() postCreateAt: Date;

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.postLikeIts++;
  }

  dislike() {
    this.postLikeIts--;
  }

}
