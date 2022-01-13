const request = new Request('http://localhost:8000/test/', {method: 'GET'});

tbody = document.getElementById("data_ville_tbody")

// fetch(request)
//     .then(test_response  => test_response.json())
//     .then(test_response => {
//         console.log(test_response);
//         const resultElement = document.querySelector("#test_front_back");
//         resultElement.append(test_response["test_response"])
//         // resultElement.innerHTML = test_response["test_response"];
//     })



$('#button_test').on('click',function(e) {
    $.getJSON('http://localhost:8000/test/',function(data){
        const resultElement = document.querySelector("#test_front_back");
        resultElement.append(data["test_response"])
    })
})



// $("#test_front_back").append("toto")
// var montest = document.getElementById("test_front_back")

// if (window.fetch) {
//     montest.append(" toto")
// } else {
//     montest.append("pas toto")
// }
