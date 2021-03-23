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
  ) {}
  //Fonction GetPrice ou getteur de la variable price qui bien sur retourne un number methode 1
  getNewPrice1(p_price: number): number {
    //affecter la valeur aux parametre price de la clase grâce aux paramètres de la fonction p_price
    return this.price = p_price;
  }
  //Fonction GetPrice ou getteur de la variable price qui bien sur retourne un number autres methodes
  getNewPrice(price: number): number {
    //retourne le prix - 5
    return price - 5;
  }
}
