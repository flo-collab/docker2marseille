var data_villes = [
    ['Montcuq',10,20],
    ['Montfroc',100,200],
    ['Montéton',1000,2000]
]

var nb_biens = 666
var mean_price = 2
var data_json = {'data_villes':data_villes,'nb_biens':nb_biens,'mean_price':mean_price}


document.getElementById('inject_nb_bien').append('Il y a actuellement ', data_json['nb_biens'],' biens immobiliers')
document.getElementById('inject_mean_price').append('Leur prix moyen est de ',data_json['mean_price'], ' €')

var data_villes = data_json['data_villes']
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


// var test = document.getElementById("some_test_here")
// if (test != null){
//     test.append("succes_test")
// }