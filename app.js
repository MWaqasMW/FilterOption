var cars = {
    companies: {
        honda: {
            honda_Accord: {
                name: "Honda Accord",
                price: "PKR 119,2430,0",
                location: "Islamabad",
                img: "./images/Honda Accord.png"
            },
            honda_city: {
                name: "Honda City",
                price: "PKR 40,2400,0",
                location: "karachi",
                img: "images/honda-city.jpg",
            },
            honda_civic: {
                name: "Honda Civic",
                price: "PKR 100,2900,0",
                location: "lahore",
                img: "./images/honda-civic.png",
            },
            honda_fit: {
                name: "Honda Fit",
                price: "PKR 2,865,000",
                location: "Hydarbad",
                img: "./images/honda-fit.png",
            },
            honda_HRv: {
                name: "Honda HR-V",
                price: "PKR 80,2400,0",
                location: "Islamabad",
                img: "./images/honda-HR-V.png",
            },
            honda_WRv: {
                name: "Honda WR-V",
                price: "PKR PKR 3,900,000",
                location: "Multan",
                img: "./images/honda-WR-V.png",
            },

        },
    

        audi: {
            audi_A3: {
                name: "Audi A3",
                price: "PKR 110,200,00",
                location: "Multan",
                img: "data:image/jpeg;base64,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",
            },
            audi_A4: {
                name: "Audi A4",
                price: "PKR 114,500,00",
                location: "karachi",
                img: "data:image/jpeg;base64,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lM3kwkltnbBq1TZKbN42094FeWgTNmlgzOj7L+jx2sarBB3DUy47M3Pw1K3UzHvbWByLZu7lar2KbEd9rD3MuWyvo8Y2NZ7fsr+s6VSw6qLAAeUzAQK/szdfD0eygJ721Pxk4lIDhMsQPgE+xEBERA+Ga2IZraTanwiBVNp4R34kyqY/YJPKdTakDymB8Ch5QOJ4rd890i62xCORndqux0PKaVXdxDygcMfZZHKYW2ee6dsrbpqeU0a25w7oHHDgjPJwhnWKu5nhNKpuY3dA5icKZ5OFnRn3Pfums+6T/dMCgfVfCPq3hL0d06n3TPJ3UqfdMCiPhL8VB9J4+qgcpff/AAnV+6Z6G5tU/Ygc8q0Laj1mu06gm4VVvswv0UO/FivkR+Ygc7wGJam61EYq9Ng6Ed4PDy4+8vWA3gwwVqzK/wBYZi7608hYs5NxbPazkcG8DaS+H+h1ft4lx5Kp/KWHYv0ZYWg2Zs1Vhwz2sPwjSBzp0xGOrNVKMzN2QFsAOVh9kWsAO4eJll2V9H1Z7GoQg7uJnU8NgqaCyKFHgLTYCwKrszcnDU7ErnbvbX4Sx0cKqiyqAO4C02YgeQs9REBERAREQEREBERAREQEREBERAREQPlp8KDunqIHjox3T50K9wmSIGLoF+6I6Be4TLEDH0S9wn0IO6e4gecon20+xAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q==",
            },
            audi_A6: {
                name: "Audi A6",
                price: "PKR 117,700,00",
                location: "Multan",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv2UbOJGk-LWtn_I_Mz7hccXoiht7RnERfJQ&usqp=CAU",
            },
            audi_A7: {
                name: "Audi A7",
                price: "PKR 119,500,00",
                location: "larhore",
                img: "./images/audi-A7.png",
            },
            audi_A8: {
                name: "Audi A8",
                price: "PKR 210,200,00",
                location: "Multan",
                img: "./images/HYundai-nexo.jfif",
            },
            audi_Q3: {
                name: "Audi Q3",
                price: "PKR 86,200,00",
                location: "Multan",
                img: "./images/audi-Q3.jpeg",
            },
            audi_Q5: {
                name: "Audi Q5",
                price: "PKR 85,700,00",
                location: "Multan",
                img: "./images/audi-Q3.jpeg",
            },
            audi_Q7: {
                name: "Audi Q7",
                price: "PKR 125,100,00",
                location: "Multan",
                img:"./images/kia-sportage.png"} ,
            audi_R8: {
                name: "Audi R8",
                price: "PKR 712,350,00",
                location: "Multan",
                img: "./images/audi-R8.png",
            },
            audi_RSQ8: {
                name: "Audi RS-Q8",
                price: "PKR 850,450,00",
                location: "Multan",
                img: "./images/audi-RS-Q8.png",
            },
        },
        hyundai: {
            hyundai_acceent: {
                name: "Hyundai-Acceent",
                price: "PKR 50,450,00",
                location: "Multan",
                img: "/images/kia-sportage.png",
            },
            hyundai_elantra: {
                name: "Hyundai-Elantra",
                price: "PKR 50,450,00",
                location: "Multan",
                img: "images/Hyundai-tacson.jpeg"},
             hyundai_acceent: {
                name: "Hyundai-Acceent",
                price: "PKR 70,900,00",
                location: "Multan",
                img: "./images/Nissan_Maxima.jpeg"},
                hyundai_i30: {
                name: "Hyundai-i30",
                price: "PKR 40,950,00",
                location: "Multan",
                img: "./images/Hyundai-i30(pd).jpeg",
            },
            hyundai_kona: {
                name: "Hyundai-Kona",
                price: "PKR 60,800,00",
                location: "Multan",
                img: "./images/Hyundai-Kona.png",
            },
            hyundai_nexo: {
                name: "Hyundai-Nexo",
                price: "PKR 55,550,00",
                location: "Multan",
                img: "./images/HYundai-nexo.jfif",
            },
            hyundai_tacson: {
                name: "Hyundai-Tacson",
                price: "PKR 70,300,00",
                location: "Multan",
                img: "./images/Hyundai-tacson.jpeg",
            },
            hyundai_veloster: {
                name: "Hyundai-Veloster",
                price: "PKR 68,150,00",
                location: "Multan",
                img: "./images/Hyundai-veloster.jpeg",
            },
            hyundai_venue: {
                name: "Hyundai-venue",
                price: "PKR 56,850,00",
                location: "Multan",
                img: "./images/Hyundai-venue.jpeg",
            },
        
        },
    
        toyota: {
            toyota_carmry: {
                name: "Toyota-Carmry",
                price: "PKR 106,850,00",
                location: "Karachi",
                img: "./images/toyota-carmry.png",
            },
            toyota_corolla: {
                name: "Toyota-Corolla",
                price: "PKR 72,50,00",
                location: "Karachi",
                img: "./images/toyota-corolla.png",
            },
            toyota_GrSupra: {
                name: "toyota-Gr-Supra",
                price: "PKR 150,850,00",
                location: "Islamabad",
                img: "./images/toyota-GR-supra.png",
            },
            toyota_landCursior: {
                name: "Toyota-LandCursior",
                price: "PKR 506,850,00",
                location: "Karachi",
                img: "./images/toyota-landcursior.png",
            },
            toyota_puris: {
                name: "Toyota-Puris",
                price: "PKR 72,650,00",
                location: "Karachi",
                img: "./images/toyota-puris.png",
            },
            toyota_yaris: {
                name: "Toyota-Yaris",
                price: "PKR 60,490,00",
                location: "Karachi",
                img: "./images/toyota-yaris.png",
            },
        },
        kia: {
            kia_carnival: {
                name: "Kia-Carnival",
                price: "PKR 40,490,00",
                location: "Karachi",
                img: "./images/kia_carvinal.jpeg",
            },
            kia_EV6: {
                name: "Kia EV6",
                price: "PKR 55,190,00",
                location: "Karachi",
                img: "./images/kia_EV6.jpeg",
            },
            kia_forte: {
                name: "Kia-Forte",
                price: "PKR 60,990,00",
                location: "Karachi",
                img: "./images/kia_forte.png",
            },
            kia_rio: {
                name: "Kia-Rio",
                price: "PKR 65,490,00",
                location: "Karachi",
                img: "./images/kia_rio.jpeg",
            },
            kia_seltos: {
                name: "Kia-Seltos",
                price: "PKR 75,900,00",
                location: "Karachi",
                img: "./images/kia_seltos.jpeg",
            },
            kia_soul: {
                name: "Kia-Soul",
                price: "PKR 60,800,00",
                location: "Karachi",
                img: "./images/kia_soul.jpeg",
            },
            kia_stringer: {
                name: "Kia-Stringer",
                price: "PKR 55,810,00",
                location: "Karachi",
                img: "./images/kia_stringer.jpeg",
            },
            kia_sorento: {
                name: "Kia-Sorento",
                price: "PKR 65,900,00",
                location: "Karachi",
                img: "./images/kia-sorento.jpeg",
            },
            kia_sportage: {
                name: "Kia-Sportage",
                price: "PKR 80,300,00",
                location: "Karachi",
                img: "./images/kia-sportage.png",
            },

        },
        Nissan: {
            Nissan_GTR: {
                name: "Nissan-GTR",
                price: "PKR 414,600,00",
                location: "Karachi",
                img: "./images/Nissan_GT-R.png",
            },
            Nissan_juke: {
                name: "Nissan-Juke",
                price: "PKR 60,600,00",
                location: "Karachi",
                img: "./images/Nissan_pathfinder.jpeg",
            },
            Nissan_maxima: {
                name: "Nissan-Maxima",
                price: "PKR 314,300,00",
                location: "Karachi",
                img: "./images/Nissan_Maxima.jpeg",
            },
            Nissan_murano: {
                name: "Nissan-Murano",
                price: "PKR 50,800,00",
                location: "Karachi",
                img: "./images/Nissan_Murano.jpeg",
            },
            Nissan_pathfinder: {
                name: "Nissan-Pathfinder",
                price: "PKR 30,270,00",
                location: "Karachi",
                img: "./images/Nissan_pathfinder.jpeg",
            },
            Nissan_xterra: {
                name: "Nissan-Xterra",
                price: "PKR 414,490,00",
                location: "Karachi",
                img: "./images/Nissan_Xterra.jpeg",
            },
            Nissan_altina: {
                name: "Nissan-Altina",
                price: "PKR 27,500,00",
                location: "Karachi",
                img: "./images/kia-sportage.png",
            },
            Nissan_Rogue: {
                name: "Nissan-Rogue",
                price: "PKR 44,600,00",
                location: "Karachi",
                img: "./images/Nissan-Rogue.png",
            },
        }

    }
}

        
var showCards = document.getElementById("showCards");

function allCars() {

    for (key in cars) {
        for (key1 in cars[key]) {
            for (key2 in cars[key][key1]) {
               var show=cars[key][key1][key2];
                showCards.innerHTML += ` 
<div class="card-body  my-Card">
<div>
<img src="${show.img}" class="card-img-top" >
  <h1 class="card-title">${show.name}</h1>
  <h4 class="card-text">${show.price}</h4>
  <p class="card-text"><h5 class="text-body-secondary">${show.location}</h5></p>
</div>
</div>
`
            }
        }
    }

}


allCars();
var options= document.getElementById("dropdown");



function brands(option){
    console.log(option);
  switch (option) {
    case "honda":
        showCards.innerHTML ="";
        for (key in cars) {
        
            for (key1 in cars[key].honda){
               var show= cars[key].honda[key1]
               showCards.innerHTML  += `
               <div class="card style="width: 18rem;">
               <img src="${show.img}" class="card-img-top" >
               <div class="card-body">
                 <h2 class="card-title">${show.name}</h2>
                 <p class="card-text">${show.price}</p>
                 <p class="card-text"><h3 class="text-body-secondary">${show.location}</h3></p>
               </div>
             </div>`
    }
            }
        break;
            case "toyota":
                showCards.innerHTML ="";
                for (key in cars) {
                
                    for (key1 in cars[key].toyota){
                       var show= cars[key].toyota[key1]
                       showCards.innerHTML  += `  <div class="card style="width: 18rem;">
                       <img src="${show.img}" class="card-img-top" alt="...>
                       <div class="card-body">
                         <h1 class="card-title">${show.name}</h1>
                         <p class="card-text">${show.price}</p>
                         <p class="card-text"><h3 class="text-body-secondary">${show.location}</h3></p>
                       </div>
                     </div>
                       `
            }
        }
        break;
            case "hyundai":
                showCards.innerHTML ="";
                for (key in cars) {
                
                    for (key1 in cars[key].hyundai){
                       var show= cars[key].hyundai[key1]
                       showCards.innerHTML  += `
                       <div class="card style="width: 18rem;">
                       <img src="${show.img}" class="card-img-top" alt="...>
                       <div class="card-body">
                         <h1 class="card-title">${show.name}</h1>
                         <p class="card-text">${show.price}</p>
                         <p class="card-text"><h3 class="text-body-secondary">${show.location}</h3></p>
                       </div>
                     </div>`
            }
                    }
        break;
        case "nissan":
            showCards.innerHTML ="";
            for (key in cars) {
            
                for (key1 in cars[key].Nissan){
                   var show= cars[key].Nissan[key1]
                   showCards.innerHTML  += `
                   <div class="card style="width: 18rem;">
                   <img src="${show.img}" class="card-img-top" alt="...>
                   <div class="card-body">
                     <h1 class="card-title">${show.name}</h1>
                     <p class="card-text">${show.price}</p>
                     <p class="card-text"><h3 class="text-body-secondary">${show.location}</h3></p>
                   </div>
                 </div>`
        }
                }
    break;
  
    case "audi":
        showCards.innerHTML ="";
        for (key in cars) {
        
            for (key1 in cars[key].audi){
               var show= cars[key].audi[key1]
               showCards.innerHTML  += `
               <div class="card style="width: 18rem;">
               <img src="${show.img}" class="card-img-top" alt="...>
               <div class="card-body">
                 <h1 class="card-title">${show.name}</h1>
                 <p class="card-text">${show.price}</p>
                 <p class="card-text"><h3 class="text-body-secondary">${show.location}</h3></p>
               </div>
             </div>`
    }
            }
break;

case "kia":
    showCards.innerHTML ="";
    for (key in cars) {
    
        for (key1 in cars[key].kia){
           var show= cars[key].kia[key1]
           showCards.innerHTML  += `
           <div class="card">
           <img src="${show.img}"car-images class="card-img-top" alt="...>
           <div class="card-body">
             <h1 class="card-title">${show.name}</h1>
             <p class="card-text">${show.price}</p>
             <p class="card-text"><h3 class="text-body-secondary">${show.location}</h3></p>
           </div>
         </div>`
}
        }
break;
  }

        
}
