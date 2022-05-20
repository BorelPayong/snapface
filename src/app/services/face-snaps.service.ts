import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService{
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Archibald',
      description: 'meilleur ami depuis tout petit',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      createDate: new Date(),
      snaps: 10,
      location: 'Paris'
    },
    {
      id: 2,
      title: 'Archibald',
      description: 'meilleur ami depuis tout petit',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      createDate: new Date(),
      snaps: 0,
      location: 'Montagne'
    },
    {
      id: 3,
      title: 'Archibald',
      description: 'meilleur ami depuis tout petit',
      imageUrl: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      createDate: new Date(),
      snaps: 0,
    }
  ];



  getFaceSnapById(faceSnapId: number): FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found!');
    }
    else{
      return faceSnap;
    }
  }

  getAllFaceSnaps(): FaceSnap[]{
    return this.faceSnaps;
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
