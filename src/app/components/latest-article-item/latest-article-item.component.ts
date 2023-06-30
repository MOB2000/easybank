import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-article-item',
  templateUrl: './latest-article-item.component.html',
  styleUrls: ['./latest-article-item.component.scss']
})
export class LatestArticleItemComponent {



  @Input() img:string;
  @Input() author:string;
  @Input() title:string;
  @Input() content:string;

}
