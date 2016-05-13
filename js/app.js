// Problem: The form lacks interactivity.
// Solution: Add interactivity to the form using JavaScript.

// The first text field should be selected when the page loads.
document.getElementById("name").focus();

var nameField = document.getElementById("name");
var emailField = document.getElementById("mail");
// The email field should be validated.

// When "other" is selected in the Job Role dropdown
var role = document.getElementById("title");                        // The select menu
var firstFieldSet = document.getElementsByTagName("fieldset")[0];   // The first fieldset

var input = document.createElement("input");
input.setAttribute("class", "other_input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Your job role");

var chosen;
var jobRoleField;

role.onchange = function() {
  console.log("hmmm.");
  chosen = role.options[role.selectedIndex].text;
  // a text field should appear.
  if (chosen === "Other") {
    firstFieldSet.appendChild(input);
    jobRoleField = document.getElementsByClassName("other_input")[0];
  } else {
    jobRoleField = document.getElementsByClassName("other_input")[0];
    if (jobRoleField) {
        firstFieldSet.removeChild(input);
    } else {
    }
  }
}




// In the T-Shirt Info Section
var design = document.getElementById("design");
var colorPanel = document.getElementById("colors-js-puns");
var colorSelection = document.getElementById("color");

var message;
  // When the design is changed,
    // The color options should be updated.
// Hides the color options when the design is not selected.
colorPanel.style.display ="none";
var theme = design.options[0].text; // The selected theme.
design.onchange = function() {
  message = "";
  theme = design.options[design.selectedIndex].text;
  // These three if statements decide what information to display
  // based on the selected theme.
  if (theme === "Select Theme") {
    colorPanel.style.display ="none";
  }
  if (theme === "Theme - I ♥ JS") {
    message +=  "<option value=\"tomato\">Tomato (I &#9829; JS shirt only)</option>" +
                "<option value=\"steelblue\">Steel Blue (I &#9829; JS shirt only)</option>" +
                "<option value=\"dimgrey\">Dim Grey (I &#9829; JS shirt only)</option>"
    colorSelection.innerHTML = message;
    colorPanel.style.display = "block";
  }
  if (theme === "Theme - JS Puns") {
    message += "<option value=\"cornflowerblue\">Cornflower Blue (JS Puns shirt only)</option>" +
              "<option value=\"darkslategrey\">Dark Slate Grey (JS Puns shirt only)</option>" +
              "<option value=\"gold\">Gold (JS Puns shirt only)</option>";
    colorSelection.innerHTML = message;
    colorPanel.style.display = "block";
  }
}


// Register for Activities Section
var activityRegistration = document.getElementsByClassName("activities")[0];
  // When events are selected,
    // The cost will be added to the running total.
var total = 0;
// Array of activity objects to compare times and set prices.
var activities = [
  {
    name: "all",
    activity: "Main Conference",
    day: "Tuesday",
    cost: 200
  },
  {
    name: "js-frameworks",
    activity: "JavaScript Frameworks Workshop",
    day: "Tuesday",
    time: "9am-12pm",
    cost: 100
  },
  {
    name: "js-libs",
    activity: "JavaScript Libraries Workshop",
    day: "Tuesday",
    time: "1pm-4pm",
    cost: 100
  },
  {
    name: "express",
    activity: "Express Workshop",
    day: "Tuesday",
    time: "9am-12pm",
    cost: 100

  },
  {
    name: "node",
    activity: "Node.js Workshop",
    day: "Tuesday",
    time: "1pm-4pm",
    cost: 100
  },
  {
    name: "build-tools",
    activity: "Build tools Workshop",
    day: "Wednesday",
    time: "9am-12pm",
    cost: 100
  },
  {
    name: "npm",
    activity: "npm Workshop",
    day: "Wednesday",
    time: "1pm-4pm",
    cost: 100
  }
];
var checkboxes = []; // Creates the checkbox array.
// Adds items to the checkbox array.
for (var i = 0; i < activities.length; i++) {
  checkboxes.push(document.getElementsByName(activities[i].name)[0]);
}

// sets an event listener to each of the checkboxes.
for (var i = 0; i < checkboxes.length; i++) {
    var childElement = checkboxes[i];
    childElement.addEventListener('change', change, false);
}

// When the checkboxes are checked or unchecked,
// this function is called.
function change(e) {
  var selected = e.target.name;
  var index;
  // For loop to figure out which checkbox was checked.
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].name === selected) {
        index = i;
        break;
      }
  }
  check(index);  // Decides if the event conflicts with another.
  cost(index);   // Calculates the cost.
}


// You can't sign up for two events that occur at the same time.
// A running total of the costs should be displayed after all the checkboxes.
function check(x) {
  for (var i = 0; i < checkboxes.length; i++) {
    if (i === x) {
      continue;
    }
    if (checkboxes[x].checked) {
      if (activities[i].day === activities[x].day
          && activities[i].time === activities[x].time) {
          checkboxes[i].disabled = true;
            checkboxes[i].parentElement.style.color = "grey";
      }
    } else {
        if (activities[i].day === activities[x].day
            && activities[i].time === activities[x].time) {
            checkboxes[i].disabled = false;
            checkboxes[i].parentElement.style.color = "black";
        }
    }
  }
}

var displayTotal = document.createElement("p");
var counter = 0; // Counter to see how many checkboxes are selected
function cost(y) {
  if (checkboxes[y].checked) {
    counter++;
    total += activities[y].cost;
    console.log(counter);
  } else {
    counter--;
    total -= activities[y].cost;
    console.log(counter);
  }
  if (total > 0) {
    displayTotal.innerHTML = "Total: $" + total;
    activityRegistration.appendChild(displayTotal);
  }
  if (total === 0) {
    activityRegistration.removeChild(displayTotal);
  }
}


console.log(checkboxes);




// Payment info
var payment = document.getElementById("payment");
var paymentField = document.getElementsByTagName("fieldset")[3];

// Choices of payment.
var creditCard = document.getElementById("credit-card");
var payPal = paymentField.getElementsByTagName("p")[0];
var bitCoin = paymentField.getElementsByTagName("p")[1];

// Initially hides all of the payment options.
creditCard.style.display = "block";
payPal.style.display = "none";
bitCoin.style.display = "none";

// The selected payment method, default value of credit card.
var selectedPayment = payment.options[1].value;

// When a payment method is selected, the appropriate
// payment method is displayed.
payment.onchange = function() {
  selectedPayment = payment.options[payment.selectedIndex].value;
  if (selectedPayment === "select_method") {
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitCoin.style.display = "none";
  }
  if (selectedPayment === "credit card") {
    creditCard.style.display = "block";
    payPal.style.display = "none";
    bitCoin.style.display = "none";
  }
  if (selectedPayment === "paypal") {
    payPal.style.display = "block";
    creditCard.style.display = "none";
    bitCoin.style.display = "none";
  }
  if (selectedPayment === "bitcoin") {
    bitCoin.style.display = "block";
    payPal.style.display = "none";
    creditCard.style.display = "none";
  }
}



// All of the tags for each piece of information
var nameTag = document.getElementsByTagName("label")[0];
var emailTag = document.getElementsByTagName("label")[1];
var jobRoleTag = document.getElementsByTagName("label")[2];
var tShirtTag = document.getElementsByTagName("legend")[1];
var tShirtColorTag = document.getElementsByTagName("label")[5];
var activitiesTag = document.getElementsByTagName("legend")[2];
var paymentInfoTag = document.getElementsByTagName("legend")[3];


// Tags for the credit card information.
var creditCardNumber = document.getElementById("cc-num");
var zipCode = document.getElementById("zip");
var cvvCode = document.getElementById("cvv");
var zipCodeTag = document.getElementById("zip-label");
var creditCardNumberTag = document.getElementById("cc-num-label");
var cvvCodeTag = document.getElementById("cvv-label");

var tagText; // Used by the function below to set the label on elements.
// This function adds error messages and makes the text red.
function addErrorMessage(tag, errorMessage) {
  // To make sure the error message doesn't already exist.
  if (tagText.indexOf(errorMessage) < 0) {
    tag.innerHTML += errorMessage;
  }
  tag.style.color="red";  // Makes the text red.
}

// This function removes the error messages for when
// the form information is valid.
function removeErrorMessage(tag) {
    tag.innerHTML = tagText; // Changes the tag back to the original
    tag.style.color="black";
}


  // Display credit card text fields when selected.
  // Display a message for the Paypal and Bitcoin options.
var submitButton = document.getElementsByTagName("button")[0];
var ready = false;

// Validate all input to make sure it meets the requirements.
// If any input is invalid or missing, then stop the
// form from submitting.
// The name and email fields are filled in.
// If other is selected, make sure the text field associated with is it's empty.
// In the Register for Activities section, make sure at least one activity is selected.
// A payment option must be selected.
// Make sure the credit card number, zip code, and CVV code are all valid.

submitButton.onclick = function(event) {
  if (nameField.value === "") {
    console.log("Enter your name ");
    tagText = nameTag.textContent;
    addErrorMessage(nameTag, " This is a required field");
    event.preventDefault();
  } else {
    tagText = "Name: ";
    removeErrorMessage(nameTag);
  }
  if (emailField.value === "") {
    console.log("Enter your email ");
    tagText = emailTag.textContent;
    addErrorMessage(emailTag, " This is a required field");
    event.preventDefault();
  } else {
      var regex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      var tof = regex.test(emailField.value);
      console.log(tof);
      if (tof === false) {
        tagText = "Email:";
        removeErrorMessage(emailTag);
        addErrorMessage(emailTag, " Invalid Email | Try something like rtandel124@gmail.com");
        console.log("bad email");
        event.preventDefault();
      } else {
        console.log("nice email");
        tagText = "Email:";
        removeErrorMessage(emailTag);
      }
  }

  if (chosen === "Other") {
    if (jobRoleField.value === "") {
      console.log("You chose other, so enter a job role.");
      tagText = jobRoleTag.textContent;
      addErrorMessage(jobRoleTag, " When other is selected, this is a required field");
      event.preventDefault();
    } else {
      tagText = "Job Role"
      removeErrorMessage(jobRoleTag);
    }
  } else {
    tagText = "Job Role"
    removeErrorMessage(jobRoleTag);
  }
  if (theme === "Select Theme") {
    console.log("Select a theme");
    tagText = tShirtTag.textContent;
    addErrorMessage(tShirtTag, " Select a T-shirt");
    event.preventDefault();
  } else {
    tagText = "T-Shirt Info ";
    removeErrorMessage(tShirtTag);
  }

  if (counter === 0) {
    console.log("Select an activity.");
    tagText = activitiesTag.textContent;
    addErrorMessage(activitiesTag, " You must sign-up for at least one event");
    event.preventDefault();
  } else {
    tagText = "Register for Activities";
    removeErrorMessage(activitiesTag);
  }

  if (selectedPayment === "select_method") {
    console.log("select a payment option");
    tagText = paymentInfoTag.textContent;
    addErrorMessage(paymentInfoTag, " Choose a payment method.");
    event.preventDefault();
  } else {
    tagText = "Payment Info";
    removeErrorMessage(paymentInfoTag);
  }
  var regex = /[0-9]|\./;
  if (selectedPayment === "credit card") {
    if (creditCardNumber.value === "") {
      console.log("Enter your creditcard information.");
      tagText = creditCardNumberTag.textContent;
      addErrorMessage(creditCardNumberTag, "");
      event.preventDefault();
    } else {
      tagText = "Card Number:";
      removeErrorMessage(creditCardNumberTag);
      var tof = regex.test(creditCardNumber.value);
      if (tof) {
        tagText = "Card Number: ";
        removeErrorMessage(creditCardNumberTag);
      } else {
        tagText = creditCardNumberTag.textContent;
        addErrorMessage(creditCardNumberTag, " This field can only contain numbers.");
        event.preventDefault();
      }
    }
    if (cvvCode.value === "") {
      console.log("Enter your creditcard information.");
      tagText = cvvCodeTag.textContent;
      addErrorMessage(cvvCodeTag, "");
      event.preventDefault();
    } else {
      tagText = "CVV: ";
      removeErrorMessage(cvvCodeTag);
      var tof = regex.test(cvvCode.value);
      if (tof) {
        tagText = "CVV: ";
        removeErrorMessage(cvvCodeTag);
      } else {
        tagText = cvvCodeTag.textContent;
        addErrorMessage(cvvCodeTag, " This field can only contain numbers.");
        event.preventDefault();
      }
    }
    if (zipCode.value === "") {
      console.log("Enter your creditcard information.");
      tagText = zipCodeTag.textContent;
      addErrorMessage(zipCodeTag, "");
      event.preventDefault();
    } else {
      tagText = "Zip Code: ";
      removeErrorMessage(zipCodeTag);
      var tof = regex.test(cvvCode.value);
      if (tof) {
        tagText = "Zip Code: ";
        removeErrorMessage(zipCodeTag);
      } else {
        tagText = zipCodeTag.textContent;
        addErrorMessage(zipCodeTag, " This field can only contain numbers.");
        event.preventDefault();
      }
    }
  }
};
