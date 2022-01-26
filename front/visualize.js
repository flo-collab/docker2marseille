// var data_villes = [
//     ['Montcuq',10,20],
//     ['Montfroc',100,200],
//     ['Montéton',1000,2000]
// ]

// var nb_biens = 666
// var mean_price = 2
// var data_json = {'data_villes':data_villes,'nb_biens':nb_biens,'mean_price':mean_price}

const request1 = new Request('http://localhost:8000/visualize/visualize', {method: 'GET'});

fetch(request1)
    .then(response  => response.json())
    .then(response => {
        console.log(response);
        document.getElementById('inject_nb_bien').append('Il y a actuellement ', response['nb_biens'],' biens immobiliers')
        document.getElementById('inject_mean_price').append('Leur prix moyen est de ',response['mean_price'], ' €')
        var data_villes = JSON.parse(response['data_villes'])

        
        console.log(data_villes[0]);
        console.log(data_villes.length);
        var tbody = document.getElementById("data_ville_tbody")
        if (tbody!=null){
            for (var row = 0; row < data_villes.length; row++){
                var tr = document.createElement('tr')
                tr.className = "row"
                for (var column=0; column < data_villes[row].length; column++){
                    var td = document.createElement('td')
                    td.className='cell'
                    var value= data_villes[row][column]
                    td.append(value)
                    tr.appendChild(td)
                }
                tbody.appendChild(tr)
            }
        }
   
    })

$('#button_test').on('click',function(e) {
    $.getJSON("http://localhost:8000/visualize/send_mail",function(data){
        const resultElement = document.querySelector("#result_mail");
        resultElement.innerHTML = data["result_mail"];
    })
})
