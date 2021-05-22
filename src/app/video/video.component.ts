import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  searchText: any;

  videoList: any;
  safeURL: any;
  videoURL = 'https://www.youtube.com/embed/JreJ-Xeg1Bo';
  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
    this.videoList = [
      {
        id: 1,
        title: 'BINIBINI by Zack Tabudlo - Play along sheet music for Bb Instruments',
        url: 'https://www.youtube.com/embed/q0U8cLcgk74',
        time: '1:00'
      },
      {
        id: 2,
        title: 'New wine',
        url: 'https://www.youtube.com/embed/1ozGKlOzEVc',
        time: '1:00'
      },
      {
        id: 3,
        title: 'Inspirational Background Music for Videos & Success Presentation - Royalty Free',
        url: 'https://www.youtube.com/embed/PJ_zomNMK_s',
        time: '1:00'
      },
      {
        id: 4,
        title: 'Sounds Of Isha Soothing instrumental music',
        url: 'https://www.youtube.com/embed/1P59sBpb3xg',
        time: '1:00'
      },
      {
        id: 5,
        title: 'Beautiful Piano Music 24/7 Relax, Study, Sleep',
        url: 'https://www.youtube.com/embed/y7e-GC6oGhg',
        time: '1:00'
      },
      {
        id: 6,
        title: 'Instrumental Music to Relax, Study and Work - relaxdaily N°064',
        url: 'https://www.youtube.com/embed/gwQFYrE21fE',
        time: '1:00'
      },
      {
        id: 7,
        title: 'Most Beautiful Romantic Instrumental Music & Visualizer',
        url: 'https://www.youtube.com/embed/mA0soZr5X8c',
        time: '1:00'
      },
      {
        id: 8,
        title: 'Beautiful Relaxing Hymns, Peaceful Instrumental Music, "Forest Morning Sunrise" Tim Janis',
        url: 'https://www.youtube.com/embed/PJ_zomNMK_s',
        time: '1:00'
      }
    ];
  }

  sanitizerByPass(url: any) {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  playVideo(value: any) {
    console.log(value)
    let currentIndex = this.videoList.findIndex((x: any) => x.id === value.id);
    this.videoList[currentIndex].url = this.videoList[currentIndex].url + "?autoplay=1"
  }

}
