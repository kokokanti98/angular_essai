# Part1

##### Ajout d'un component hotel-list dans le repéertoire hotel-list
##### Ajout de composants bootstrap,material-icon via cmd et dans le fichier style.css. Pour voir plus d'icone [Material-icon](https://material.io/resources/icons/?style=baseline).
##### Manipulation des variables du component précédement créer

# Part2
### Two Way DATABINDING
##### Creation d'un formulaire en angular avec ngModel
##### Ajout de l import FormsModule dans app.module.ts /import { FormsModule } from '@angular/forms'/
##### Ajout du two ways DATABINDING sur le formulaire avec ngModelChange afin de changer dynamiquement la valeur d'une variable

### Le Pipe
##### Ajout des imports: "import { registerLocaleData } from '@angular/common'" et "import localeFr from '@angular/common/locales/fr'" dans app.module.ts
##### Ajout  registerLocaleData(localeFr, 'fr'); dans app.module.ts pou activer le francais sur le Pipe du prix

### Les Interfaces
##### Ajout d'un fichier hotel.ts dans le dossier hotel-list afin de creer un interface avec ses paramètres
##### Importer le fichier hotel.ts dans le hotel-list.component.ts pour l'utiliser dont l'array list d'objet le any devient IHotel
##### Ajout de la classe Hotel qui implémente l'interface IHotel
##### Changement de la classe HotelListComponent qui implemente une interface OnInit et ajout de la methode ngOnInit()
##### Ajout des methode necessaire pour faire le filtre des hotels par nom sur le input un genre de recherche

