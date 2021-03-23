import { Component } from '@angular/core';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent {
  public title = 'Liste d\'hotel';
  public hotels: any[] = [
    {
      "hotelId": 1,
      "hotelName": "Buea sweet life",
      "description": "Belle vue au bord de la mer",
      "price": 230.5,
      "imageUrl": "assets/img/h1.jpg",
      "rating": 3.5
    },
    {
      "hotelId": 2,
      "hotelName": "Marakech",
      "description": "Profitez de la vue sur les montagnes",
      "price": 145.5,
      "imageUrl": "assets/img/h2.jpg",
      "rating": 5
    },
    {
      "hotelId": 3,
      "hotelName": "Abudja new look palace",
      "description": "Séjour complet avec service de voitures",
      "price": 120.12,
      "imageUrl": "assets/img/h3.jpg",
      "rating": 4
    },
    {
      "hotelId": 4,
      "hotelName": "Cape town city",
      "description": "Magnifique cadre pour votre séjour",
      "price": 135.12,
      "imageUrl": "assets/img/h4.jpg",
      "rating": 2.5
    },
    {
      "hotelId": 4,
      "hotelName": "Plaza City",
      "description": "Séjour inoubliable",
      "price": 125.12,
      "imageUrl": "assets/img/h5.jpg",
      "rating": 2.5
    }
  ];
  //Le variable boolean par défaut il est FALSE
  public showBadge: boolean;
  //Une event qui retourne rien ou void
  public toggleIsNewBadge(): void {
    //ICI il va nous retourner le contraire si c'est TRUE va nous retourner FALSE et vice versa
    this.showBadge = !this.showBadge; 
  }
}
