import { Component, OnInit } from '@angular/core';

import { YouTubePlayerModule } from '@angular/youtube-player';

@Component({
  template: '<youtube-player videoId="y946MrwQiso" suggestedQuality="highres" [height]="150" [width]="200" [startSeconds]="0" [endSeconds]="660"></youtube-player>',
  selector: 'app-video'
})
export class VideoComponent implements OnInit {
  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }
}
