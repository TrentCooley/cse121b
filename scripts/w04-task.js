/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    /* Populate Profile Object with placesLive objects */
    name: 'Trent Cooley',
    photoUrl : 'images/Glasses.jpg',
    favoriteFoods:['Banana','Apple','Pizza','Ice Cream','German Pancakes','Potatoes'],
    hobbies: ['Video games', 'TV shows', 'Programming'],
    placesLived : []
};

myProfile.placesLived.push({
    place: 'Marryville, TN',
    length: '15 years'
},{
    place: 'Fort Mill, SC',
    length: '3 years'
},{
    place: 'Rexburg, ID',
    length: '2 years'
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = myProfile.name;

/* Photo with attributes */
let photoElement = document.getElementById('photo');
photoElement.src = myProfile.photoUrl;
photoElement.alt = myProfile.name;

/* Favorite Foods List*/
let foodList = document.getElementById('favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    foodList.appendChild(li);
});

/* Hobbies List */
let hobbyList = document.getElementById('hobbies');
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    hobbyList.appendChild(li);
});

/* Places Lived DataList */
let placesList = document.getElementById('places-lived');
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    dt.textContent = place.place;
    placesList.appendChild(dt);

    let dd = document.createElement('dd');
    dd.textContent = place.length;
    placesList.appendChild(dd);
});


