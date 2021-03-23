import { Component, OnInit } from '@angular/core';
//import { log } from 'console';
import { IHotel } from './hotel';

@Component({
  selector: 'hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{
  //Le variable hotelFilter
  private _hotelFilter = "mot";

  public filteredHotels: IHotel[] = [];
  //getteur hotelFilter
  public get hotelFilter(): string {
    return this._hotelFilter;
  }
  //setteur hotelFilter
  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;
    //Operation ternaires
    //Si la nouvelle liste d hotel filteredHotels recoit une nouvelle valeur hotelFilter alors on lance filterHotels et on y passe la valeur hotelFilter
    //Sinon retourne la liste complète des hotels
    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter) : this.hotels;
  }

  //methode qui aide a faire le filtre de la liste
  private filterHotels(criteria: string): IHotel[] {
    //met en minuscule
    criteria = criteria.toLocaleLowerCase();
    //Pour chaque hotel dans IHotel ici hotels est la listes des hotels
    //pour chq hotel de type IHotel qu'on va parcourir on va chercher et mettre hotelName en minuscule
    //l index de ce mot la comparer avec le nom de l hotel est que cela nous donne -1 alors on peut retourner la nouvelle liste car index >= 0
    const res = this.hotels.filter(
      (hotel: IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;

  }

  ngOnInit(): void {
    console.log("Mon niveau de vie initial fonctionne");
    //on initialise la valeur de filterHotels par la collection de données prise hotels
    this.filteredHotels = this.hotels;
  }
  public title = 'Liste d\'hotel';

  public hotels: IHotel[] = [
    {
      "hotelId": 1,
      "hotelName": "Buea sweet life",
      "description": "Belle vue au bord de la mer",
      "price": 230.5,
      "imageUrl": "assets/img/h1.jpg",
      //"rating": 3.5
    },
    {
      "hotelId": 2,
      "hotelName": "Marakech",
      "description": "Profitez de la vue sur les montagnes",
      "price": 145.5,
      "imageUrl": "assets/img/h2.jpg",
      //"rating": 5
    },
    {
      "hotelId": 3,
      "hotelName": "Abudja new look palace",
      "description": "Séjour complet avec service de voitures",
      "price": 120.12,
      "imageUrl": "assets/img/h3.jpg",
      //"rating": 4
    },
    {
      "hotelId": 4,
      "hotelName": "Cape town city",
      "description": "Magnifique cadre pour votre séjour",
      "price": 135.12,
      "imageUrl": "assets/img/h4.jpg",
      //"rating": 2.5
    },
    {
      "hotelId": 4,
      "hotelName": "Plaza City",
      "description": "Séjour inoubliable",
      "price": 125.12,
      "imageUrl": "assets/img/h5.jpg",
      //"rating": 2.5
    }
  ];
  //Le variable boolean par défaut il est FALSE
  public showBadge: boolean = false;

  //Une event qui retourne rien ou void
  public toggleIsNewBadge(): void {
    //ICI il va nous retourner le contraire si c'est TRUE va nous retourner FALSE et vice versa
    this.showBadge = !this.showBadge; 
  }
}
