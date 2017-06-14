
function customerData(data) {

console.log(data);
  var customerContainer = document.getElementById('customer-container');

  for (let i = 0; i < data.length; i++) {

// console.log(data[i].picture.med);
          //create div element
      var div = document.createElement('div');
          // attach .customer-info to div
      div.className += "customerInfo";

      // create another div attach
      var div2 = document.createElement('div');
      div2.className += "customer-image";
      div2.style.backgroundImage = 'url('+data[i].picture.medium+')';



      //create .customer-details div
      var div3 = document.createElement('div');
      div3.className += "customer-details";

      // all elements that go with .customer details
      var h1 = document.createElement('h1');
      var p2 = document.createElement('p')
      var p3 = document.createElement('p');
      var p4 = document.createElement('p');
      var p5 = document.createElement('p');

      var h1txt = document.createTextNode(data[i].name.first + ' ' + data[i].name.last);
      h1.appendChild(h1txt);

      var p2txt = document.createTextNode(data[i].email);
      p2.appendChild(p2txt);

      var p3txt = document.createTextNode(data[i].location.street);
      p3.appendChild(p3txt);

      var p3txt = document.createTextNode(data[i].location.city + ', ' + data[i].location.state);
      p3.appendChild(p3txt);

      var p5txt = document.createTextNode(data[i].cell);
      p5.appendChild(p5txt);





      div3.appendChild(h1);
      div3.appendChild(p2);
      div3.appendChild(p3);
      div3.appendChild(p4);
      div3.appendChild(p5);
      div.appendChild(div2);
      div.appendChild(div3);
      customerContainer.appendChild(div);

  }
}


// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {

  'use strict';

  // Your Code Goes Here

  $.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {

  // $(data.results).each(function(){
  //   var one = "<h1>" +data.results[0].cell+ "</h1>"
  //   var div = "<div>idid</div>" // create a div
  //
  //   $("div").append(one);
  //   $("#customer-container").append(div);
  // });

    customerData(data.results);

  }


});

})();
