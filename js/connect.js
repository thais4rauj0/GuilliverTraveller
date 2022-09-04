function getHotelName(){
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
    let i = 0;
    
        axios.request(options).then(function (response) {
            while(i < 3){
            // console.log(response.data.result[0].hotel_name);
                const hotel_name = response.data.result[i].hotel_name;
                const picture = response.data.result[i].max_photo_url;
            
                console.log(hotel_name)
                let h5 = document.createElement('h5');
                let text = h5.appendChild(document.createTextNode(hotel_name));

                document.getElementsByClassName('card-title')[i].appendChild(h5);
                
                var img = document.getElementsByClassName('card-img-top')[i].src = picture;

                i++;
            }
            }).catch(function (error) {
            console.error(error); });
          
}

function getMore(){
    $('#meuModal').modal('toggle')
}