export class ActiveItemService {
    auction = {
        auc_id:1234,
        title:"Subasta Chacharera ",
        desc:"P. D. James, Todo lo que sé sobre la Novela Negra. Ediciones B, Grupo Z. Libro en el que una de las más reconocidas escritoras de novela  con 50 años de carrera y 18 bestsellers en su haber, habla sobre al arte de escribir este tipo de relatos, sus principales influencias y su admiración por predecesores y contemporáneos. Imperdible para los admiradores de su trabajo y quienes quieren iniciarse en el mundo de estos relatos. ",
        location: {},
        // Not a real end-time
        end_time: new Date(),
        // last_bid should look at DB
        last_bid: 0,
        img_src: [ "", "", ""]
      }

      pushBid(newBid) {
        this.auction.last_bid = newBid;
      }
}