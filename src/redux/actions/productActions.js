import * as actionTypes from "./actionTypes";

export function getProductsSuccess(products) {
  return { type: actionTypes.GET_PRODUCTS_SUCCESS, payload: products };
}

export function createProductSuccess(product) {
  return { type: actionTypes.CREATE_PRODUCT_SUCCESS, payload: product };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.UPDATE_PRODUCT_SUCCESS, payload: product };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
  //product id varsa put requesttir yoksa post requesttir
  //şu adrese post işlemi yap bu adrese bız gonderıyoruz// apıleregore degısır bu ıslemelr
} //product.id||"" gonderilern productun ıdsı varsa onu koy yoksa hıcbısey koyma demek
//    .then(handleResponse)   intentional programing (niyetli)  ilerde birşeyler yapmak icin yazılıyor bu 2 satır
//     .catch(handleError);

//return function (dispatch) actıonun devreye girmesini sağlar
// veritabanına bu işlemi yap "return saveProductApi(product)" yaptıktan sonra ".then((savedProduct)" reduxuma soyle ki
//        product.id
//   ? dispatch(updateProductSuccess(savedProduct))                   savedProduct yeni eklenen product budur.
//    : dispatch(createProductSuccess(savedProduct));

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json
  }
  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir Hata Oluştu")
  throw error;
}



export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";

    if (categoryId) {
      url = url + "?categoryId=" + categoryId; // & yerine = kullandı
    }

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getProductsSuccess(result)));
  };
}
