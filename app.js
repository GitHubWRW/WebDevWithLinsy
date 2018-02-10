// var name = "Bill";

// var sentence = name + " is the best";


// console.log("sentence ", sentence);

// var isBlue = !true;

// console.log("isBlue ", isBlue);

// var a = 5 > 6;

// console.log("a ", a);

// var n = 5;

// var increment = n++;

// n++

// console.log("n ", n);

// var items = {
//     coke: "$2", 
//     gum: "$1"
// }

// items.chips = "$3";

// console.log("items ", items);

// console.log("price of gum ", items.gum);

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log("array ", array);

// array.push({key: 999 });

// console.log("array after push ",array);

// for (var i = 0; i < numbers.length; i++) {
//     console.log("i ", i);

// }

// console.log("document ", document);

// var btn  = document.createElement("BUTTON");       // Create a <button> element
// var t    = document.createTextNode("CLICK ME");    // Create a text node
// var para = document.createElement("P");            // Create a <p> element

// para.appendChild(t);                               // Append the text to <p>
// document.body.appendChild(para);                   // Append <p> to <body>

// document.getElementById("demo").classList.add("myStyle", "anotherClass", "thirdClass");

var followSuggestions = [
    {
      name: "Cindy CSS",
      handle: "@cindycss",
      avatarUrl: "https://avatarfiles.alphacoders.com/115/115265.png"
    },
    {
      name: "Joe JavaScript",
      handle: "@joejavascript",
      avatarUrl: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_960_720.png"
    },
    {
      name: "Peter",
      handle: "@peterpython",
      avatarUrl: "https://www.valleybusinessreport.com/wp-content/uploads/2017/07/default-avatar-tech-guy.png"
    }
  ];

// <div class="suggestion">
// <img class="fs-avatar" src="https://avatarfiles.alphacoders.com/115/115265.png" /img>
// <div>
//    <p class="name">
//       Cindy CSS
//       <span class="handle">@cindycss</span>
//    </p>
// <!--       <button>Button</button> -->
//   <div class="follow-button">Follow</div>        
// </div>
// </div>

var suggestions = document.getElementById("suggestions");
console.log('suggestions ', suggestions);

var suggestionDiv;
var avatar;
var wrapper;
var nameAndHandle;
var handle;
var followButton;

for (var i = 0; i < followSuggestions.length; i++) {
     console.log("i ", i);
     console.log("followSuggestions[i]", followSuggestions[i])
  
// Create a div element     
     suggestionDiv = document.createElement("div");
// Add a class 
     suggestionDiv.classList.add("suggestion");

// Create an img element
     avatar = document.createElement("img");
     avatar.src = followSuggestions[i].avatarUrl;
     avatar.classList.add("fs-avatar");
     suggestionDiv.appendChild(avatar);

     wrapper = document.createElement("div");

// Create a p element
     nameAndHandle = document.createElement("p");
//   nameAndHandle.innerHTML(followSuggestions[i].name);
     nameAndHandle.innerHTML = followSuggestions[i].name;
     nameAndHandle.classList.add("name");
     wrapper.appendChild(nameAndHandle);

     handle = document.createElement("span");
//   handle.classList.add("name");
     handle.innerHTML = followSuggestions[i].handle;
     handle.classList.add("handle");
     nameAndHandle.appendChild(handle);
//   wrapper.appendChild(handle);


     suggestionDiv.appendChild(wrapper);

//   Follow Button
followButton = document.createElement("div");
followButton.classList.add("follow-button");
followButton.innerHTML = "Follow";

wrapper.appendChild(followButton);

suggestionDiv.appendChild(wrapper);




     suggestions.appendChild(suggestionDiv);

     


}

     