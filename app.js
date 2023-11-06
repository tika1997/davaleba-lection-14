 //davaleba1

for(let i=0;i<1000;i+=30){
    console.log(i)
}
//davaleba2
let usersList = ["Nika","Dato","Nini","Luka","Lika", "Giorgi"];

let userList = document.getElementById("users-list");

for(let i =0; i <usersList.length; i++){
    userList.innerHTML += `<li> ${usersList[i]} </li>`
}
//davaleba3
let product={
    productId:"qwe23-dhs56-7dh-qw2",
    productName:"Bike",
    productUse:"New",
    productPhoto:"image/1cIRpcqkJ_qzpE1GXuXEa8Qfn2bqZNZqj___media_library_original_573_431.jpg",
    productPhotoAlt:"https://bikefair.org/bikes/0463eae5-84f8-4e67-984d-b34dc99b5836/home-delivered-omafiets-52-cm-for-a-fantastic-price-sample-bike-2",
    productDescription:" All bikes are of the same quality, equipped with lights, back carrier, stand, and checked by a professional mechanic. 3 MONTHS GUARANTEE WITH EACH BIKE.",
    productSellerNumber :"599-43-23-67" ,
    productSellerName:"Nika Gamtsemlidze",
   

}