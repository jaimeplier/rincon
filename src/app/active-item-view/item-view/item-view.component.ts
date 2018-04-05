import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {

  constructor() { }
  // Make http call to get item from router and set it as this.item
  auction = {
    auc_id:1234,
    title:"Subasta Chacharera ",
    desc:"P. D. James, Todo lo que sé sobre la Novela Negra. Ediciones B, Grupo Z. Libro en el que una de las más reconocidas escritoras de novela  con 50 años de carrera y 18 bestsellers en su haber, habla sobre al arte de escribir este tipo de relatos, sus principales influencias y su admiración por predecesores y contemporáneos. Imperdible para los admiradores de su trabajo y quienes quieren iniciarse en el mundo de estos relatos. ",
    location: {},
    // Not a real end-time
    end_time: new Date(),
    img_src: [ "", "", ""]
  }

  ngOnInit() {
    console.log(this.auction.end_time)
  }

}
