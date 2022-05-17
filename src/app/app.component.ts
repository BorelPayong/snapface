import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit(){
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'meilleur ami depuis tout petit',
        imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createDate: new Date(),
        snaps: 10,
        location: 'Paris'
      },
      {
        title: 'Archibald',
        description: 'meilleur ami depuis tout petit',
        imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createDate: new Date(),
        snaps: 0,
        location: 'Montagne'
      },
      {
        title: 'Archibald',
        description: 'meilleur ami depuis tout petit',
        imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        createDate: new Date(),
        snaps: 0,
      }
    ];
  }
}

