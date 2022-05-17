import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})

export class FaceSnapComponent implements OnInit {
  @Input() FaceSnap!: FaceSnap;

  buttonText!: string;

  ngOnInit(){
    this.buttonText = 'Oh Snap';
  }

  onSnap(){
    if(this.buttonText === 'Oh Snap'){
      this.FaceSnap.snaps++;
      this.buttonText = 'Oups unSnap';
    }
    else{
      this.FaceSnap.snaps--;
      this.buttonText = 'Oh Snap';
    }
  }
}

