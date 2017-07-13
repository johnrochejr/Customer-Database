console.log('loaded js');
const data = customers.results;

console.log(`You have ${data.length} people!!!`); // just to see where we are

// loop over data
// create HTML for each person
// add that HTML to the DOM

let allPeopleContainer = document.getElementById('staff'); // set variable to shorten our
// ... typing

for (let i = 0; i < data.length; i++) {
  let person = data[i];
  // let pictures = person.picture;

  console.log(data);
  let personContainer = document.createElement('div');
  // create new <div> because div is so generic

  // add image tag
  let image = document.createElement('img');
  image.src = customers.results[i].picture.large; // add images to div
  personContainer.appendChild(image);

  // add name
  let name = document.createElement('h5');
  let firstName = customers.results[i].name.first;
  let lastName = customers.results[i].name.last;
  name.innerHTML = `${firstName} ${lastName}`;
  personContainer.appendChild(name); // putting information in box

  // add email
  let email = document.createElement('p');
  email.innerHTML = customers.results[i].email;
  personContainer.appendChild(email);

  // address with 3 <p> tags inside
  let address = document.createElement('address');
  let line1 = document.createElement('p');
  let line2 = document.createElement('p');
  let phoneNumber = document.createElement('p');

  // add values, then add in appropriate order
  // street, address, city, phone number

  line1.innerHTML = `${customers.results[i].location.street}`;
  line2.innerHTML = `${customers.results[i].location.city} ${customers.results[i].location.state} ${customers.results[i]
    .location.postcode}`;
  phoneNumber.innerHTML = `${customers.results[i].cell}`;

  address.appendChild(line1);
  address.appendChild(line2);
  address.appendChild(phoneNumber);

  personContainer.appendChild(address);

  // add SSN #
  let ssn = document.createElement('p');
  ssn.innerHTML = `${customers.results[i].id.value}`;
  personContainer.appendChild(ssn);

  // add class to HTML
  // add 'person' class to div
  // += is a JS operator - appends. Use by default
  // container called person. Without this, we would have generic DIVs
  parent.className += 'person ';

  allPeopleContainer.appendChild(personContainer); // add new element to DOM
}

//
