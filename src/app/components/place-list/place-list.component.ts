import { Component, OnInit } from '@angular/core';
import Place from 'src/app/interfaces/place';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  places: Place[];

  constructor( private placesService: PlacesService ) {
    this.places = [{
      name: '',
      description: '',
      latitude: 0,
      longitude: 0,
      image: ''
    }];
  }

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe(places => {
      this.places = places;
    })
  }

  onClickDelete(place: Place) {
    this.placesService.deletePlace(place);
  }

}
