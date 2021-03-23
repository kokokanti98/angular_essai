 //Creation de l interface avec ses paramètres et leur types de variables
export interface IHotel {
  hotelId: number;
  hotelName: string;
  description: string;
  price: number;
  imageUrl: string;
}

//Creation d'une classe Hotel qui implemente l'interface IHotel
export class Hotel implements IHotel {
  constructor(
    public hotelId: number,
    public hotelName: string,
    public description: string,
    public price: number,
    public imageUrl: string,
  ) { }
  //Pour les variables privées ils sont déclarées ainsi:
  //return this._price = p_price;
  //return this._hotelName = p_hotelName + ' ';

  //Fonction SetPrice ou setteur de la variable price qui bien sur retourne un number
  setNewPrice(p_price: number): number {
    //affecter la valeur aux parametre price de la clase grâce aux paramètres de la fonction p_price
    return this.price = p_price;
  }
  //Fonction GetPrice ou getteur de la variable price qui bien sur retourne un number
  getNewPrice(price: number): number {
    //retourne le prix - 5
    return price - 5;
  }
  //Fonction SetPrice ou setteur de la variable hotelName qui bien sur retourne un String
  setHotelName(p_hotelName: number): string {
    //affecter la valeur aux parametre price de la clase grâce aux paramètres de la fonction p_HotelName et on ajoute le ' ' à la fin
    return this.hotelName = p_hotelName + ' ';
  }
  //Fonction GetPrice ou getteur de la variable hotelName qui bien sur retourne un String
  getHotelName(): string {
    //retourne le nom de l hotel
    return this.hotelName;
  }
}
