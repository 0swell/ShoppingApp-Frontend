import * as actionTypes from "../actions/actionTypes";

import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      var addedItem = state.find(
        (c) => c.product.id === action.payload.product.id
      ); //state yani sepetin her bir elemanının productunun idsi = payload ile gelen productunun idsi ise
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });   //eğer listede added item varsa quantitiysini 1 arttırmak, array bir ref tiptir, ilgili nesnenin refini değiştirmek lazım, statei değiştirmek için
          }       //arayin referansının değişmesi gerekir, map ile arayi gez her bir cartItem icin
                 //object assign ilk parantez copy addedItem parametre , quantitysini sistemdeki addeditemin quantitiysini 1 arttırp esıtle
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }]; //statein kopyasını al ve o kopyaya action ile gelen payloudu ekle reduxta push pop yapmıyoruz
      }
      case actionTypes.REMOVE_FROM_CART:  
      const newState2 = state.filter(cartItem=>cartItem.product.id!==action.payload.id)
      return newState2
      //id Farklıysa onları filtrele -- parametreyle gönderilen idleri-action.payload.id-yeni bir array yapıp filterden geçirip filter map gibi
      // şarta göre yeni bir array olusturuyor referans degısmıs oluyor
    default:
      return state;
  }
}
