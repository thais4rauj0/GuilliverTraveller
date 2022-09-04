// Função que recebe latitude e longitude e devolve os dados do Booking
async function GetHotelsByPosition(latitude, longitude) {
  const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
      params: {
        order_by: 'popularity',
        adults_number: '2',
        units: 'metric',
        room_number: '1',
        checkout_date: '2022-10-01',
        filter_by_currency: 'BRL',
        locale: 'pt-br',
        checkin_date: '2022-09-30',
        children_number: '2',
        children_ages: '5,0',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1',
        page_number: '0',
        include_adjacency: 'true',
        latitude,
        longitude,
      },
      headers: {
        'X-RapidAPI-Key': '4475d96be6mshda5519e3521df02p15ca2ajsnd6f4821f97f0',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
      }
    };

    const response = await axios.request(options)
    return response.data;
}

// Função que encapsula getCurrenntPosition em uma promise para poder ser
// utilizada com async/await
async function getCurrentLocation() {
  return new Promise(function(resolve, reject) {
  navigator.geolocation.getCurrentPosition(function(pos){
    resolve(pos.coords);
    }) 
  });
  
  
}

// Função principal que pega os dados do hotel usando a posição atual.
async function getHotelCoordinates(){
const position = await getCurrentLocation()
const data = await GetHotelsByPosition(position.latitude, position.longitude);
// console.log(data)
return data

}


async function getHotelId(indice){
  const data = await getHotelCoordinates()
  // console.log(data.result[0].hotel_id)
  return data.result[indice].hotel_id
}
// Função para atualizar os hoteis proximos, ele atualiza os cards com imagem e o Nome correto
async function getHotelName(){
  let i = 0;
    data = await getHotelCoordinates()
    while(i < 3){
    // console.log(response.data.result[0].hotel_name);
        const hotel_name = data.result[i].hotel_name;
        const picture = data.result[i].max_photo_url;
    
        // console.log(hotel_name)
        let h5 = document.createElement('h5');
        let text = h5.appendChild(document.createTextNode(hotel_name));
        document.getElementsByClassName('card-title')[i].appendChild(h5);   
        var img = document.getElementsByClassName('card-img-top')[i].src = picture;
        i++;
    }
           
}

async function getHotelDescription(hotel_id){
  const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/description',
    params: {hotel_id: hotel_id, locale: 'pt-br'},
    headers: {
      'X-RapidAPI-Key': '4475d96be6mshda5519e3521df02p15ca2ajsnd6f4821f97f0',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };

  const response = await axios.request(options)
  
  return response.data;

}



//Função que Cria o modal com o Saiba mais dos hoteis
async function getMore(){
  $('#meuModal').modal('toggle')
  const hotel_id = await getHotelId(0);
  
  const data = await getHotelDescription(hotel_id)
  
  console.log(data.description)

}


function geoFindMe() {

const status = document.querySelector('#status');
const mapLink = document.querySelector('#map-link');

mapLink.href = '';
mapLink.textContent = '';

function success(position) {
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  status.textContent = '';
  mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}

function error() {
  status.textContent = 'Unable to retrieve your location';
}

if (!navigator.geolocation) {
  status.textContent = 'Geolocation is not supported by your browser';
} else {
  status.textContent = 'Locating…';
  navigator.geolocation.getCurrentPosition(success, error);
}

}

document.querySelector('#find-me').addEventListener('click', geoFindMe());

