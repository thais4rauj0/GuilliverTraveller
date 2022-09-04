async function getHotelCoordinates(){
  var lat,lon;
  var location = new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(function(pos){
        lat = pos.coords.latitude
        lon = pos.coords.longitude
        resolve({lat,lon});
      }) 
  })
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
      include_adjacency: 'true'
    },
    headers: {
      'X-RapidAPI-Key': '4475d96be6mshda5519e3521df02p15ca2ajsnd6f4821f97f0',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };
  
location.then(function(value) {
  Object.assign(options.params, {latitude:value.lat})
  Object.assign(options.params, {longitude:value.lon})
});

  
  
  const getdata = async () => {
    console.log(options)
    const response = await axios.request(options)
    return response.data;
  
  }

  const data = await getdata();
  return data

}

async function getHotelData(){
    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/search',
        params: {
          checkout_date: '2022-10-01',
          units: 'metric',
          dest_id: '-640628',
          dest_type: 'city',
          locale: 'pt-br',
          adults_number: '2',
          order_by: 'popularity',
          filter_by_currency: 'BRL',
          checkin_date: '2022-09-30',
          room_number: '1',
          children_number: '2',
          page_number: '0',
          children_ages: '5,0',
          categories_filter_ids: 'class::2,class::4,free_cancellation::1',
          include_adjacency: 'true'
        },
        headers: {
          'X-RapidAPI-Key': '4475d96be6mshda5519e3521df02p15ca2ajsnd6f4821f97f0',
          'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
      };
       const getdata = async () => { 
        const response = await axios.request(options)
        return response.data;
      
      }

      const data = await getdata();
      return data

}

async function getHotelId(){
  const data = await getHotelData()
  console.log(data.result[0].hotel_id)
}
