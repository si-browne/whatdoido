angular.module("QuickclaimsModule").controller("QuickclaimsController", function ($scope, $window) {

  // *** VARIABLE DEFINITIONS - Model *** //
  $scope.insurance_policy = [
  {
    policy_id: 1,
    company_id: 1,
    policyholder_name: "Mr Simon Browne",
    policyholder_dob: new Date(1989, 04, 16),
    date_started: new Date(2019, 01, 01),
    date_end: new Date(2021, 01, 01),
    policy_type: "Third Party Fire & Theft"
  },
  {
    policy_id: 2,
    company_id: 2,
    policyholder_name: "Mr Fred Flintstone",
    policyholder_dob: new Date(1991, 06, 21),
    date_started: new Date(2019, 05, 21),
    date_end: new Date(2021, 05, 21),
    policy_type: "Fully Comprehensive"
  }
  ];

  $scope.car_insurance_company = [
  {
    company_id: 1,
    company_name: "Aviva UK",
    address: "3rd Floor, 6 Apple Street Pomona Business Centre, Nottingham",
    postcode: "N11 8JJ",
    tel: 08435040320
  },
  {
    company_id: 2,
    company_name: "Churchill Insurance",
    address: "27 Manchester Walk Way, Liverpool",
    postcode: "L13 7TY",
    tel: 08007776542
  }
  ];

  $scope.car_insurance_claim = [
  {
    claim_id: 1,
    policy_id: 1,
    company_id: 1,
    claim_title: "Side Smash",
    datetimeofaccident: new Date(2019, 09, 21, 09, 33, 00),
    car_reg: "ND13 TTY",
    car_make: "Ford Focus",
    car_model: "Titanium",
    car_colour: "Blue",
    parked_unparked: true,
    weather: "Sunny",
    light_level: "Bright",
    road_quality: "Good",
    damage_description: "Right side of car is totally smashed, seems quite severe. Hit by a white van.",
    injury_description: "None",
    geolocation: "53.396920, -2.169654",
    manual_location: "",
    to_blame: false
  },
  {
    claim_id: 2,
    policy_id: 2,
    company_id: 2,
    claim_title: "St Johns Road Incident",
    datetimeofaccident: new Date(2018, 07, 13, 11, 45, 00),
    car_reg: "DR19 OER",
    car_make: "Volkswagen",
    car_model: "Polo",
    car_colour: "Red",
    parked_unparked: false,
    weather: "Raining",
    light_level: "Dim",
    road_quality: "Terrible",
    damage_description: "Front bonnet is crumpled pretty badly.",
    injury_description: "Yes, my right leg is badly hurt, maybe fractured.",
    geolocation: "",
    manual_location: "St Johns Road, Sheffield",
    to_blame: false
  },
  {
    claim_id: 3,
    policy_id: 1,
    company_id: 1,
    claim_title: "Garden Incident, Hole House Lane",
    datetimeofaccident: new Date(2017, 07, 13, 17, 35, 00),
    car_reg: "ND13 TTY",
    car_make: "Ford Focus",
    car_model: "Titanium",
    car_colour: "Blue",
    parked_unparked: true,
    weather: "Dull but Dry",
    light_level: "Dusk",
    road_quality: "Normal",
    damage_description: "Rear of car has a dent. I ran over a few garden gnomes",
    injury_description: "Nobody injured, just a few garden gnomes.",
    geolocation: "53.483140, -1.596854",
    manual_location: "",
    to_blame: true
  },
  {
    claim_id: 4,
    policy_id: 2,
    company_id: 2,
    claim_title: "M1 Ferrari Crash",
    datetimeofaccident: new Date(2020, 02, 13, 10, 11, 00),
    car_reg: "MU19 ITR",
    car_make: "Ferrari",
    car_model: "F40",
    car_colour: "Red",
    parked_unparked: false,
    weather: "Sunny",
    light_level: "Bright",
    road_quality: "Good",
    damage_description: "Right wingmirror is gone.",
    injury_description: "Nobody injured, near miss.",
    geolocation: "53.465562, -1.451345",
    manual_location: "M1 Near Chapeltown",
    to_blame: true
  }
  ];

  $scope.claim_person = [
  {
    person_id: 1,
    claim_id: 1,
    is_driver: true,
    is_witness: false,
    is_owner: true,
    person_name: "Jill Peterson",
    address: "26 Windamere lane, Stockport",
    postcode: "SK7 8TY",
    car_reg: "HR13 NUY",
    has_insurance: true,
    insurance_comp: "Axa Insurance",
    insurance_addr: "N/A",
    insurance_postcode: "N/A",
    wit_statement: "None"
  },
  {
    person_id: 2,
    claim_id: 1,
    is_driver: false,
    is_witness: true,
    is_owner: false,
    person_name: "Mr Craig McGavigan",
    address: "8 Vienna Road, Stockport",
    postcode: "SK8 TY",
    car_reg: "NULL",
    has_insurance: false,
    insurance_comp: "NULL",
    insurance_addr: "NULL",
    insurance_postcode: "NULL",
    wit_statement: "I witnessed a white van careering into a blue Ford Focus on 21/09/19."
  },
  {
    person_id: 3,
    claim_id: 2,
    is_driver: true,
    is_witness: false,
    is_owner: true,
    person_name: "Mr James Woods",
    address: "28 Free Lane, London",
    postcode: "L13 7TY",
    car_reg: "NI11 PBT",
    has_insurance: true,
    insurance_comp: "Churchill",
    insurance_addr: "27 Manchester Walk Way, Liverpool",
    insurance_postcode: "L13 7TY",
    wit_statement: "N/A"
  },
  {
    person_id: 4,
    claim_id: 2,
    is_driver: false,
    is_witness: true,
    is_owner: false,
    person_name: "Miss Penny Washington",
    address: "6 Whites Lane, Liverpool",
    postcode: "LI98 9GH",
    car_reg: "",
    has_insurance: "",
    insurance_comp: "",
    insurance_addr: "",
    insurance_postcode: "",
    wit_statement: "Terrible crash on St Johns Road, hard to tell who was at fault, it seems that the Volkswagen was hit by the other vehicle."
  },
  {
    person_id: 5,
    claim_id: 3,
    is_driver: true,
    is_witness: true,
    is_owner: false,
    person_name: "Mrs Shirley Valentine",
    address: "9 Lightway Avenue, Bristol",
    postcode: "BR89 0NU",
    car_reg: "BP19 BNS",
    has_insurance: false,
    insurance_comp: "",
    insurance_addr: "",
    insurance_postcode: "",
    wit_statement: "My husband owns the house, a small mishap my Gnomes were destroyed."
  },
  {
    person_id: 6,
    claim_id: 3,
    is_driver: false,
    is_witness: false,
    is_owner: true,
    person_name: "Mr David Valentine",
    address: "9 Lightway Avenue, Bristol",
    postcode: "BR89 0NU",
    car_reg: "BP19 BNS",
    has_insurance: true,
    insurance_comp: "M&S Buildings insurance",
    insurance_addr: "",
    insurance_postcode: "",
    wit_statement: "N/A"
  },
  {
    person_id: 7,
    claim_id: 4,
    is_driver: true,
    is_witness: false,
    is_owner: true,
    person_name: "Mr Barry White",
    address: "10 Leaping Lane, Southampton",
    postcode: "SO9 7TY",
    car_reg: "TA11 FGY",
    has_insurance: true,
    insurance_comp: "Marks & Spencer",
    insurance_addr: "",
    insurance_postcode: "",
    wit_statement: ""
  },
  {
    person_id: 8,
    claim_id: 4,
    is_driver: false,
    is_witness: true,
    is_owner: false,
    person_name: "Mr Ben Stokes",
    address: "11 Whitechapel Road, Surrey",
    postcode: "SR7 8GH",
    car_reg: "",
    has_insurance: "",
    insurance_comp: "",
    insurance_addr: "",
    insurance_postcode: "",
    wit_statement: "I saw Mr Whites vehicle try to switch lanes and take the wing mirror off that beautiful Ferrai."
  }
  ];

  // *** VARIABLE DEFINITIONS - menu *** //
  $scope.showHome = true;
  $scope.showClaimAdmin = false;
  $scope.showPeopleAdmin = false;
  $scope.showProfile = false;
  $scope.showClaim = false;
  $scope.showHelp = false;

  // *** VARIABLE DEFINITIONS - claim start logic *** //
  $scope.hasregistered = false;

  // *** CONTROLLER/DIV SHOW AND HIDE LOGIC *** //
  // *** REMEMBER! KEEP FUNCTION NAME DIFFERENT THAN VARIABLES!! *** //
  $scope.showHomefunc = function () {
      $scope.showHome = true;
      $scope.showClaimAdmin = false;
      $scope.showPeopleAdmin = false;
      $scope.showProfile = false;
      $scope.showClaim = false;
      $scope.showHelp = false;
      //reset claim. this is also the claim cancel button.
      $scope.showStage1();
  };

  $scope.showCladmin = function () {
      $scope.showHome = false;
      $scope.showClaimAdmin = true;
      $scope.showPeopleAdmin = false;
      $scope.showProfile = false;
      $scope.showClaim = false;
      $scope.showHelp = false;
  };

  $scope.showPeop = function () {
      $scope.showHome = false;
      $scope.showClaimAdmin = false;
      $scope.showPeopleAdmin = true;
      $scope.showProfile = false;
      $scope.showClaim = false;
      $scope.showHelp = false;
  };

  $scope.showPro = function () {
      $scope.showHome = false;
      $scope.showClaimAdmin = false;
      $scope.showPeopleAdmin = false;
      $scope.showProfile = true;
      $scope.showClaim = false;
      $scope.showHelp = false;

  };

  $scope.showClm = function () {
      $scope.showHome = false;
      $scope.showClaimAdmin = false;
      $scope.showPeopleAdmin = false;
      $scope.showProfile = false;
      $scope.showClaim = true;
      $scope.showHelp = false;
  };

  $scope.showHlp = function () {
    $scope.showHome = false;
    $scope.showClaimAdmin = false;
    $scope.showPeopleAdmin = false;
    $scope.showProfile = false;
    $scope.showClaim = false;
    $scope.showHelp = true;
  };

  $scope.readyforclaim = function () {
    if ($scope.hasregistered == false)
    {
      return $window.alert("Please enter your policy number using the Profile section");
    }
    else if ($scope.hasregistered == true)
    {
      return showClm();
    }
  };

  // *** AUTHENTICATION LOGIC *** //
  $scope.hasauthenticated = false;

  $scope.authenticate = function () {

    $scope.hasauthenticated = true;

  };

  // *** ADMINISTRATION LOGIC *** //
  //need to enter policy number that matches, use validation here
  $scope.hasauthenticated = false;
  var lengthofpolicyarray = $scope.insurance_policy.length;
  $scope.selectedCarInsClaims = []; //empty array to store insurance claims

  $scope.findPolicy = function(key){
    //key = policy_id
    for (i = 0; i < lengthofpolicyarray;i++)
    {
      //Match input to for loop variable
      if(key == $scope.insurance_policy[i].policy_id)
      {
        //select and store the identified policy item in selectedPolicyItem
        $scope.selectedPolicyItem = $scope.insurance_policy[i];

        //saving these for when a claim needs to be made
        $scope.compIdVar = $scope.insurance_policy[i].company_id;
        $scope.polIdVar = $scope.insurance_policy[i].policy_id;

        //run along array the length of car insurance company
        for (z = 0; z < $scope.car_insurance_company.length;z++)
        {
          //take the car insurance claim, match it to the policyholder
          if($scope.insurance_policy[z].company_id == $scope.compIdVar)
          {
            $scope.selectedInsCompItem = $scope.car_insurance_company[z];
          }
        }

        //run along array the length of car insurance claim
        for (x = 0; x < $scope.car_insurance_claim.length;x++)
        {
          //take the car insurance claim, match it to the policyholder
          if($scope.car_insurance_claim[x].policy_id == $scope.insurance_policy[i].policy_id)
          {
            //capture the claim data store for a certain policy holder
            $scope.selectedCarInsClaims[x] = $scope.car_insurance_claim[x];
          }
        }
        return $scope.hasauthenticated = true;
      }
    }

    //set this after the for loop, to notify if a policy does not exist
    //based on the input
    if (key >= 0){
        $scope.hasauthenticated = false;
        return $window.alert("Your policy number does not exist.");
    }
  };

  //----------------------------------------------------------------------------------------GET CLAIM EDIT SECTION
  //NAVIGATION VARIABLES
  $scope.editClaim = false;
  $scope.viewClaim = false;
  $scope.listClaims = true;
  $scope.singleClaim = [];

  $scope.displaySingleClaim = function(claim_id){

    //grab the claim
    //this works, but it points to index, need to make it point to actual value.
    //probably best if you make it iterate through the array values.
    //$scope.singleClaim = $scope.car_insurance_claim[claim_id];
    for (p = 0; p < $scope.selectedCarInsClaims.length; p++)
    {
      if($scope.car_insurance_claim[p].claim_id == claim_id)
      {
        $scope.listClaims = false;
        $scope.viewClaim = true;
        $scope.editClaim = false;

        $scope.singleClaim = $scope.selectedCarInsClaims[p];
      }
    }
  };

  $scope.cancelEditClaim = function(){

    //important to empty the model
    //before another attempt at editing
    $scope.editCarReg = "";
    $scope.editCarReg = "";
    $scope.editCarMake = "";
    $scope.editCarModel = "";
    $scope.editCarColour = "";
    $scope.editParked = "";
    $scope.editWeather = "";
    $scope.editLightLevel = "";
    $scope.editRoadQual = "";
    $scope.editDamageDesc = "";
    $scope.editInjuryDesc = "";
    $scope.editLocation = "";
    $scope.editToBlame = "";

    //switch the view
    $scope.listClaims = true;
    $scope.editClaim = false;
    $scope.viewClaim = false;

  };

  $scope.showEditClaim = function(){

    //switch the view + populate the view with editable data
    $scope.editCarReg = $scope.singleClaim.car_reg;
    $scope.editCarMake = $scope.singleClaim.car_make;
    $scope.editCarModel = $scope.singleClaim.car_model;
    $scope.editCarColour = $scope.singleClaim.car_colour;
    $scope.editParked = $scope.singleClaim.parked_unparked;
    $scope.editWeather = $scope.singleClaim.weather;
    $scope.editLightLevel = $scope.singleClaim.light_level;
    $scope.editRoadQual = $scope.singleClaim.road_quality;
    $scope.editDamageDesc = $scope.singleClaim.damage_description;
    $scope.editInjuryDesc = $scope.singleClaim.injury_description;
    $scope.editLocation = $scope.singleClaim.manual_location;
    $scope.editToBlame = $scope.singleClaim.to_blame;

    $scope.listClaims = false;
    $scope.editClaim = true;
    $scope.viewClaim = false;

  };

  $scope.updateClaim = function(claim_id){

    //need to build an update object to replace the current object
    //assign the object current values, + ng-model values (user input)
    var updateClaimObj = {
      claim_id: $scope.singleClaim.claim_id,
      policy_id: $scope.singleClaim.policy_id,
      company_id: $scope.singleClaim.company_id,
      claim_title: $scope.singleClaim.claim_title,
      datetimeofaccident: $scope.singleClaim.datetimeofaccident,
      car_reg: $scope.editCarReg,
      car_make: $scope.editCarMake,
      car_model: $scope.editCarModel,
      car_colour: $scope.editCarColour,
      parked_unparked: $scope.editParked,
      weather: $scope.editWeather,
      light_level: $scope.editLightLevel,
      road_quality: $scope.editRoadQual,
      damage_description: $scope.editDamageDesc,
      injury_description: $scope.editInjuryDesc,
      geolocation: $scope.singleClaim.geolocation,
      manual_location: $scope.editLocation,
      to_blame: $scope.editToBlame
    };

    var updateConfirm = confirm("Are you sure you wish to update this claim?");

    if (updateConfirm == true){

      for (i = 0; i < $scope.car_insurance_claim.length; i++)
      {
        //claim id, will not always be the same value as the index item number
        //match claim_id and leave i as index value
        if($scope.car_insurance_claim[i].claim_id == claim_id)
        {
          //after update reset view
          $scope.editClaim = false;
          $scope.viewClaim = false;
          $scope.listClaims = true;

          //use splice to remove array item
          //use splice to replace the array item with the updated object built above
          //(indexof claim to edit, #of items(1), updated object to replace)
          //$scope.selectedCarInsClaims.splice(i, 1, updateClaimObj);
          $scope.car_insurance_claim.splice(i, 1, updateClaimObj);

          //NECESSARY TO SYNCHRONISE THE CLAIMS PER POLICY NUMBER
          //run along array the length of car insurance claim
          for (x = 0; x < $scope.car_insurance_claim.length;x++)
          {
            //take the car insurance claim, match it to the policyholder
            if($scope.car_insurance_claim[x].policy_id == $scope.polIdVar)
            {
              //capture the claim data store for a certain policy holder
              $scope.selectedCarInsClaims[x] = $scope.car_insurance_claim[x];
            }
          }

          return true;
        }
      }
    }
    else{
      return false;
    }
  };

  //grab the claim_id from the already defined singleClaim.claim_id
  $scope.deleteClaim = function(claim_id){

    var deleteConfirm = confirm("Are you sure you wish to delete this claim?");

    if (deleteConfirm == true){

      for (i = 0; i < $scope.selectedCarInsClaims.length; i++)
      {
        //claim id, will not always be the same value as the index item number
        //match claim_id and leave i as index value
        if($scope.car_insurance_claim[i].claim_id == claim_id)
        {
          //after delete reset view
          $scope.editClaim = false;
          $scope.viewClaim = false;
          $scope.listClaims = true;

          //better to serve another list of arrays and use that to interface with the view
          $scope.selectedCarInsClaims.splice(i, 1);
          $scope.car_insurance_claim.splice(i, 1);
          // think about prospect of splicing car insurance claim too

          return true;
        }
      }
    }
    else{
      return false;
    }
  };

  //---------------------------------------------------------------------------PEOPLE ADMIN
  // *** VARIABLE DEFINITIONS - PEOPLE ADMIN *** //
  $scope.findClaimPeople = true;
  $scope.listClaimPeople = false;
  $scope.viewPerson = false;
  $scope.editPerson = false;
  $scope.addPerson = false;
  $scope.personList = [];

  $scope.showClaimList = function () {

    $scope.findClaimPeople = true;
    $scope.listClaimPeople = false;
    $scope.viewPerson = false;
    $scope.editPerson = false;
    $scope.addPerson = false;

    //reset the person list, very important step
    $scope.personList = [];

  };

  $scope.showPeople = function (claim_id) {

    //grab the claim_id input parameter
    //search through length of recorded persons
    for (a = 0; a < $scope.claim_person.length; a++)
    {
      //check claim_id input against each indexed array item
      if($scope.claim_person[a].claim_id == claim_id)
      {

        //build custom array of filtered data
        //using push to do this, eliminates creation of redundant array item values
        $scope.personList.push($scope.claim_person[a])

        //switch the view
        $scope.findClaimPeople = false;
        $scope.listClaimPeople = true;
        $scope.viewPerson = false;
        $scope.editPerson = false;
        $scope.addPerson = false;

      }
    }
  };

  $scope.displaySinglePerson = function(person_id){
    //grab the person
    //working off personList
    for (i = 0; i < $scope.personList.length; i++)
    {
      if($scope.personList[i].person_id == person_id)
      {
        //switch the view
        $scope.findClaimPeople = false;
        $scope.listClaimPeople = false;
        $scope.viewPerson = true;
        $scope.editPerson = false;
        $scope.addPerson = false;

        $scope.singlePerson = $scope.personList[i];

        return $scope.singlePerson;
      }
    }
  };

  $scope.cancelAddPerson = function(){

    //important to empty the model
    //before another attempt at adding
    $scope.newPerson_name = "";
    $scope.newPerson_is_witness = "";
    $scope.newPerson_is_driver = "";
    $scope.newPerson_is_owner = "";
    $scope.newPerson_address = "";
    $scope.newPerson_postcode = "";
    $scope.newPerson_car_reg = "";
    $scope.newPerson_has_insurance = "";
    $scope.newPerson_insurance_comp_name = "";
    $scope.newPerson_insurance_comp_addr = "";
    $scope.newPerson_insurance_postcode = "";
    $scope.newPerson_wit_statement = "";

    //switch the view
    $scope.findClaimPeople = true;
    $scope.listClaimPeople = false;
    $scope.viewPerson = false;
    $scope.editPerson = false;
    $scope.addPerson = false;

  };

  $scope.cancelEditPerson = function(){

    //important to empty the model
    //before another attempt at editing
    $scope.edit_is_driver = "";
    $scope.edit_is_witness = "";
    $scope.edit_is_owner = "";
    $scope.edit_person_name = "";
    $scope.edit_person_address = "";
    $scope.edit_person_postcode = "";
    $scope.edit_person_car_reg = "";
    $scope.edit_person_has_insurance = "";
    $scope.edit_person_insurance_comp_name = "";
    $scope.edit_person_insurance_comp_addr = "";
    $scope.edit_person_insurance_postcode = "";
    $scope.edit_wit_statement = "";

    //switch the view
    $scope.findClaimPeople = false;
    $scope.listClaimPeople = true;
    $scope.viewPerson = false;
    $scope.editPerson = false;
    $scope.addPerson = false;

  };

  $scope.showEditPerson = function(){

    //switch the view + populate the view with editable data
    $scope.edit_is_driver = $scope.singlePerson.is_driver;
    $scope.edit_is_witness = $scope.singlePerson.is_witness;
    $scope.edit_is_owner = $scope.singlePerson.is_owner;
    $scope.edit_person_name = $scope.singlePerson.person_name;
    $scope.edit_person_address = $scope.singlePerson.address;
    $scope.edit_person_postcode = $scope.singlePerson.postcode;
    $scope.edit_person_car_reg = $scope.singlePerson.car_reg;
    $scope.edit_person_has_insurance = $scope.singlePerson.has_insurance;
    $scope.edit_person_insurance_comp_name = $scope.singlePerson.insurance_comp;
    $scope.edit_person_insurance_comp_addr = $scope.singlePerson.insurance_addr;
    $scope.edit_person_insurance_postcode= $scope.singlePerson.insurance_postcode;
    $scope.edit_wit_statement = $scope.singlePerson.wit_statement;

    $scope.findClaimPeople = false;
    $scope.listClaimPeople = false;
    $scope.viewPerson = false;
    $scope.editPerson = true;
    $scope.addPerson = false;

  };

  $scope.updatePerson = function(person_id){

    //need to build an update object to replace the current object
    //assign the object current values, + ng-model values (user input)
    var updatePersonObj = {
      person_id: $scope.singlePerson.person_id,
      claim_id: $scope.singlePerson.claim_id,
      is_driver: $scope.edit_is_driver,
      is_witness: $scope.edit_is_witness,
      is_owner: $scope.edit_is_owner,
      person_name: $scope.edit_person_name,
      address: $scope.edit_person_address,
      postcode: $scope.edit_person_postcode,
      car_reg: $scope.edit_person_car_reg,
      has_insurance: $scope.edit_person_has_insurance,
      insurance_comp: $scope.edit_person_insurance_comp_name,
      insurance_addr: $scope.edit_person_insurance_comp_addr,
      insurance_postcode: $scope.edit_person_insurance_postcode,
      wit_statement: $scope.singlePerson.wit_statement
    };

    var updatePersonConfirm = confirm("Are you sure you wish to update this persons details?");

    if (updatePersonConfirm == true){

      for (i = 0; i < $scope.claim_person.length; i++)
      {
        //person id, will not always be the same value as the index item number
        //match claim_id and leave i as index value
        if($scope.claim_person[i].person_id == person_id)
        {
          //after update reset view
          $scope.findClaimPeople = true;
          $scope.listClaimPeople = false;
          $scope.viewPerson = false;
          $scope.editPerson = false;

          //use splice to remove array item
          //use splice to replace the array item with the updated object built above
          //(indexof person to edit, #of items(1), updated object to replace)
          $scope.claim_person.splice(i, 1, updatePersonObj);

          //empty the custom person list, very important step
          $scope.personList = [];

          return true;
        }
      }
    }
    else{
      return false;
    }
  };

  $scope.showAddPerson = function(claim_id){

     var checkPerIndexVal = $scope.claim_person.length - 1;

    //grab last index item, store the value, iterate by 1
    $scope.newPerson_ID = $scope.claim_person[checkPerIndexVal].person_id + 1;

    $scope.newPersonClaim_ID = claim_id;

    $scope.findClaimPeople = false;
    $scope.listClaimPeople = false;
    $scope.viewPerson = false;
    $scope.editPerson = false;
    $scope.addPerson = true;

  };

  $scope.addNewPerson = function(){

    //need to build an update object to replace the current object
    //assign the object current values, + ng-model values (user input)
    var addPersonObj = {
      person_id: $scope.newPerson_ID,
      claim_id: $scope.newPersonClaim_ID,
      is_driver: $scope.newPerson_is_driver,
      is_witness: $scope.newPerson_is_witness,
      is_owner: $scope.newPerson_is_owner,
      person_name: $scope.newPerson_name,
      address: $scope.newPerson_address,
      postcode: $scope.newPerson_postcode,
      car_reg: $scope.newPerson_car_reg,
      has_insurance: $scope.newPerson_has_insurance,
      insurance_comp: $scope.newPerson_insurance_comp_name,
      insurance_addr: $scope.newPerson_insurance_comp_addr,
      insurance_postcode: $scope.newPerson_insurance_postcode,
      wit_statement: $scope.newPerson_wit_statement
    };

    var addPersonConfirm = confirm("Are you sure you wish to add this person?");

    if (addPersonConfirm == true){

    //after update reset view
    $scope.findClaimPeople = true;
    $scope.listClaimPeople = false;
    $scope.viewPerson = false;
    $scope.editPerson = false;
    $scope.addPerson = false;

    //use push to add new person to claim_person
    $scope.claim_person.push(addPersonObj);

    //empty the custom person list, very important step
    $scope.personList = [];

    //empty the input values to allow a new person to be added
    $scope.newPerson_ID = "";
    $scope.newPersonClaim_ID = "";
    $scope.newPerson_is_driver = false;
    $scope.newPerson_is_witness = false;
    $scope.newPerson_is_owner = false;
    $scope.newPerson_name = "";
    $scope.newPerson_address = "";
    $scope.newPerson_postcode = "";
    $scope.newPerson_car_reg = "";
    $scope.newPerson_has_insurance = "";
    $scope.newPerson_insurance_comp_name = "";
    $scope.newPerson_insurance_comp_addr = "";
    $scope.newPerson_insurance_postcode = "";
    $scope.newPerson_wit_statement = "";

    return true;

    }
    else{
      return false;
    }
  };

  //grab the person from the already defined singleClaim.claim_id
  $scope.deletePerson = function(person_id){

    var deletePersonConfirm = confirm("Are you sure you wish to delete this person?");

    if (deletePersonConfirm == true){

      for (i = 0; i < $scope.claim_person.length; i++)
      {
        //person id, will not always be the same value as the index item space number
        //match person id and leave i as index value
        if($scope.claim_person[i].person_id == person_id)
        {
          //after delete reset view
          $scope.findClaimPeople = true;
          $scope.listClaimPeople = false;
          $scope.viewPerson = false;
          $scope.editPerson = false;

          $scope.claim_person.splice(i, 1);

          //empty the custom person list, very important step
          $scope.personList = [];

          return true;
        }
      }
    }
    else{
      return false;
    }
  };
  //--------------------------------------------------------------------------------CREATE CLAIM
  // *** VARIABLE DEFINITIONS - CREATE CLAIM *** //
  $scope.showStg1 = true;
  $scope.showStg2 = false;
  $scope.showStg3 = false;
  $scope.showStg4 = false;
  $scope.showStg4_1 = false;
  $scope.showStg5 = false;
  $scope.showStg6 = false;
  $scope.showStg7 = false;
  //victim, but application cant figure out specific scenario, basic recommendation
  $scope.advise_victim = false;
  //victim of insured driver
  $scope.advise_victim_of_insured = false;
  //victim of uninsured driver, with fully comprehensive insurance
  $scope.advise_victim_of_uninsured_and_fully_comp = false;
  //victim of uninsured driver, with third party fire and theft insurance
  $scope.advise_victim_of_insured_and_third_party = false;
  //user is admitting blame and wants to notify insurance company
  $scope.advise_transgressor = false;

  //503 message, will remain inactive for this prototype, as no web services
  $scope.view_503 = false;

  $scope.hasregistered = false;

  // *** CONTROLLER/DIV SHOW AND HIDE LOGIC *** //
  // *** REMEMBER! KEEP FUNCTION NAME DIFFERENT THAN VARIABLES!! *** //

  //DEFAULT
  $scope.showStage1 = function () {
    $scope.showStg1 = true;
    $scope.showStg2 = false;
    $scope.showStg3 = false;
    $scope.showStg4 = false;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = false;
  };

  $scope.showStage2 = function () {
    $scope.showStg1 = false;
    $scope.showStg2 = true;
    $scope.showStg3 = false;
    $scope.showStg4 = false;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = false;
  };

  $scope.showStage3 = function () {
    $scope.showStg1 = false;
    $scope.showStg2 = false;
    $scope.showStg3 = true;
    $scope.showStg4 = false;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = false;
  };

  $scope.showStage4 = function () {
    $scope.showStg1 = false;
    $scope.showStg2 = false;
    $scope.showStg3 = false;
    $scope.showStg4 = true;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = false;
  };

  $scope.showStage4_1 = function () {
    $scope.showStg1 = false;
    $scope.showStg2 = false;
    $scope.showStg3 = false;
    $scope.showStg4 = false;
    $scope.showStg4_1 = true;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = false;
  };

  $scope.startClaim = function () {

    //if the input is untouched (pristine), then start a claim WITHOUT creating a new person
    if(($scope.isdriverOwner == undefined) &&
    ($scope.driverName == undefined) &&
    ($scope.driverAddress == undefined) &&
    ($scope.driverPostcode == undefined) &&
    ($scope.driverReg == undefined) &&
    ($scope.isdriverInsured == undefined) &&
    ($scope.driverInsComp == undefined) &&
    ($scope.driverInsCompAddr == undefined) &&
    ($scope.driverInsCompPost == undefined)) {

    //grab length of array list, -1 account for indexing
    var checkLastClaimIndexVal = $scope.car_insurance_claim.length - 1;

    //use index value above to get actual value from claim_id in last array item
    //increment by one, store it for new claim object
    $scope.newClaim_ID = $scope.car_insurance_claim[checkLastClaimIndexVal].claim_id + 1;

    //account for unchecked input box, auto input here, making life easy for user
    if ($scope.areyouBlame == undefined)
    {
      $scope.areyouBlame = false;
    }

    //adding a new claim, so it can be edited going forward
    var startClaimWithoutPerson = {
      //length is +1 than 0, adds a new row
      //adding a new claim_id with blame and NULLS to start off a claim
      ////++ to compensate for array index value.
      claim_id: $scope.newClaim_ID,
      policy_id: $scope.polIdVar,
      company_id: $scope.compIdVar,
      claim_title: $scope.claimTitleRecorded,
      datetimeofaccident: new Date(),
      car_reg: "",
      car_make: "",
      car_model: "",
      car_colour: "",
      parked_unparked: false,
      weather: "",
      light_level: "",
      road_quality: "",
      damage_description: "",
      injury_description: "",
      geolocation: "",
      manual_location: "",
      to_blame: $scope.areyouBlame
    };

    $scope.car_insurance_claim.push(startClaimWithoutPerson);
    //push the same item to selectedCarInsClaims
    //$scope.selectedCarInsClaims.push(startClaimWithoutPerson);

      //if any of the form values have been edited
    } else if (($scope.driverName != undefined) ||
    ($scope.driverAddress != undefined) ||
    ($scope.driverPostcode != undefined) ||
    ($scope.driverReg != undefined) ||
    ($scope.isdriverInsured != undefined) ||
    ($scope.driverInsComp != undefined) ||
    ($scope.driverInsCompAddr != undefined) ||
    ($scope.driverInsCompPost != undefined)) {

    //for the cancel function
    $scope.claimWithPerson = true;

    //grab length of array list, -1 account for indexing
    var checkLastClaimIndexVal = $scope.car_insurance_claim.length - 1;

    //use index value above to get actual value from claim_id in last array item
    //increment by one, store it for new claim object
    $scope.newClaim_ID = $scope.car_insurance_claim[checkLastClaimIndexVal].claim_id + 1;

    //account for unchecked input box
    if ($scope.areyouBlame == undefined)
    {
      $scope.areyouBlame = false;
    }

    //adding a new claim, so it can be edited going forward
    var startClaimWithPerson = {
      //length is +1 than 0, adds a new row
      //adding a new claim_id with blame and NULLS to start off a claim
      claim_id: $scope.newClaim_ID,
      policy_id: $scope.polIdVar,
      company_id: $scope.compIdVar,
      claim_title: $scope.claimTitleRecorded,
      datetimeofaccident: new Date(),
      car_reg: "",
      car_make: "",
      car_model: "",
      car_colour: "",
      parked_unparked: false,
      weather: "",
      light_level: "",
      road_quality: "",
      damage_description: "",
      injury_description: "",
      geolocation: "",
      manual_location: "",
      to_blame: $scope.areyouBlame
    };

    //grab length of array list, -1 account for indexing
    var checkLastPersonIndexVal = $scope.claim_person.length - 1;

    //use index value above to get actual value from person_id in last array item
    //increment by one, store it for new person object
    $scope.newPerson_ID = $scope.claim_person[checkLastPersonIndexVal].person_id + 1;

    var addClaimPerson = {
      //length is +1 than 0, adds a new row
      //adding a new person_id, and claim_id
      person_id: $scope.newPerson_ID,
      claim_id: $scope.newClaim_ID,
      is_driver: $scope.isdriverOwner,
      //witness purposely false at this stage, gathering targeted information for claim
      is_witness: false,
      is_owner: $scope.isdriverOwner,
      person_name: $scope.driverName,
      address: $scope.driverAddress,
      postcode: $scope.driverPostcode,
      car_reg: $scope.driverReg,
      has_insurance: $scope.isdriverInsured,
      insurance_comp: $scope.driverInsComp,
      insurance_addr: $scope.driverInsCompAddr,
      insurance_postcode: $scope.driverInsCompPost,
      wit_statement: ""
    };

    //simple add person
    $scope.claim_person.push(addClaimPerson);
    //NOTE* claim will always be at bottom of index
    $scope.car_insurance_claim.push(startClaimWithPerson);
    //$scope.selectedCarInsClaims.push(startClaimWithPerson);

    }

  // proceed to next stage
  $scope.showStg1 = false;
  $scope.showStg2 = false;
  $scope.showStg3 = false;
  $scope.showStg4 = false;
  $scope.showStg4_1 = false;
  $scope.showStg5 = true;
  $scope.showStg6 = false;
  $scope.showStg7 = false;

  };

  $scope.createClaim = function () {

  //logically, the claim started earlier is always at the bottom of the claim list
  //begin by grabbing the length of array list, -1 account for indexing
  var grabNewClaimIndexPos = $scope.car_insurance_claim.length - 1;
  //var grabNewClaimIndexPos2 = $scope.selectedCarInsClaims.length;

  //account for unchecked input box
  if ($scope.createParkedUnparked == undefined)
  {
    $scope.createParkedUnparked = false;
  }

  //adding a new claim, so it can be edited going forward
  var finaliseClaimObj = {
    //building rest of new claim using existing values and ng-model bindings from view
    claim_id: $scope.car_insurance_claim[grabNewClaimIndexPos].claim_id,
    policy_id: $scope.car_insurance_claim[grabNewClaimIndexPos].policy_id,
    company_id: $scope.car_insurance_claim[grabNewClaimIndexPos].company_id,
    claim_title: $scope.car_insurance_claim[grabNewClaimIndexPos].claim_title,
    datetimeofaccident: new Date(),
    car_reg: $scope.createVehicleReg,
    car_make: $scope.createVehicleMake,
    car_model: $scope.createVehicleModel,
    car_colour: $scope.createVehicleColour,
    parked_unparked: $scope.createParkedUnparked,
    weather: $scope.createWeather,
    light_level: $scope.createLightLevel,
    road_quality: $scope.createRoadQuality,
    damage_description: $scope.createDamageReport,
    injury_description: $scope.createInjuryReport,
    geolocation: "",
    manual_location: $scope.createManualLocation,
    to_blame: $scope.car_insurance_claim[grabNewClaimIndexPos].to_blame
  };

  //use splice to replace the array item with the updated object built above
  //(indexof claim to edit, #of items(1), updated object to replace)
  $scope.car_insurance_claim.splice(grabNewClaimIndexPos, 1, finaliseClaimObj);
  //add the newly formed claim to existing list of claims

  //NECESSARY TO SYNCHRONISE THE CLAIMS PER POLICY NUMBER
  //run along array the length of car insurance claim
  for (x = 0; x < $scope.car_insurance_claim.length;x++)
  {
    //take the car insurance claim, match it to the policyholder
    if($scope.car_insurance_claim[x].policy_id == $scope.polIdVar)
    {
      //capture the claim data store for a certain policy holder
      $scope.selectedCarInsClaims[x] = $scope.car_insurance_claim[x];
    }
  }

  // proceed to next stage, will use this in conjunction with recommendation system to designate stage 6
  $scope.showStg1 = false;
  $scope.showStg2 = false;
  $scope.showStg3 = false;
  $scope.showStg4 = false;
  $scope.showStg4_1 = false;
  $scope.showStg5 = false;
  $scope.showStg6 = true;
  $scope.showStg7 = false;

  //********************************************************RECOMMENDATION SYSTEM********************************************** */

  //need to grab person at bottom of array, to compare against new claim information
  //if other driver has not been created during claim, this data will reflect on condition
  //var grabNewPersonIndexPos = $scope.claim_person.length - 1;

  //recommendation system, sequenced in a way
  if(finaliseClaimObj.to_blame == true)
  {
    //user is admitting blame and wants to notify insurance company of accident
    $scope.advise_transgressor = true;
  }
  //match not to blame
  else if(finaliseClaimObj.to_blame == false){

    //user is victim, but application cant figure out specific scenario, basic recommendation
    $scope.advise_victim = true;
  };

  //match not to blame
  //match other driver exists
  //match other driver has no insurance
  //match user has third party fire and theft insurance
  // else if((finaliseClaimObj.to_blame == false) &&
  //     (finaliseClaimObj.claim_id == $scope.claim_person[grabNewPersonIndexPos].claim_id) &&
  //     ($scope.claim_person[grabNewPersonIndexPos].has_insurance == false) &&
  //     (($scope.selectedPolicyItem.has_insurance) == (("Thi") || ("3rd") || ("thi")))){

  //   //victim of uninsured driver, with third party fire and theft insurance
  //   $scope.advise_victim_of_insured_and_third_party = true;
  // }

  //match not to blame
  //match other driver exists
  //match other driver has no insurance
  //match user has fully comprehensive insurance
  // else if((finaliseClaimObj.to_blame == false) &&
  //     (finaliseClaimObj.claim_id == $scope.claim_person[grabNewPersonIndexPos].claim_id) &&
  //     ($scope.claim_person[grabNewPersonIndexPos].has_insurance == false) &&
  //     (($scope.selectedPolicyItem.has_insurance) == (("Ful") || ("ful") || ("com") || ("Com")))){

  //   //victim of uninsured driver, with fully comprehensive insurance
  //   $scope.advise_victim_of_uninsured_and_fully_comp = true;
  // }

  //match not to blame
  //match other driver exists
  //match other driver has insurance
  // else if(finaliseClaimObj.to_blame == false  &&
  //   (finaliseClaimObj.claim_id == $scope.claim_person[grabNewPersonIndexPos].claim_id) &&
  //   ($scope.claim_person[grabNewPersonIndexPos].has_insurance == true)){

  //   //victim of insured driver
  //   $scope.advise_victim_of_insured = true;
  // }



  //***************************************************RECOMMENDATION SYSTEM END********************************************** */

  };

  // **EXPERIMENTAL FEATURES** //
  $scope.takePicture = function () {

    $window.alert("Feature still in development.");

  };

  $scope.geoLocation = function () {

    $window.alert("Feature still in development.");

  };
  // **----------------------** //

  $scope.useQuickclaims = function () {

    // proceed to next stage
    $scope.showStg1 = false;
    $scope.showStg2 = false;
    $scope.showStg3 = false;
    $scope.showStg4 = false;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = true;

    $scope.quickclaims_success = true;

  }

  $scope.saveClaim = function () {

    // proceed to next stage
    $scope.showStg1 = false;
    $scope.showStg2 = false;
    $scope.showStg3 = false;
    $scope.showStg4 = false;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = true;

    $scope.save_success = true;

  }

  $scope.cancelClaim = function () {

    var exitClaimConfirm = confirm("Are you sure you wish to cancel this claim?");

    if (exitClaimConfirm == true){

    //remove newly created claim
    $scope.car_insurance_claim.splice($scope.car_insurance_claim.length - 1, 1);

    if($scope.claimWithPerson = true)
    {
      //remove newly created person if claim is cancelled and reset variable
      $scope.claim_person.splice($scope.claim_person.length - 1, 1);
      $scope.claimWithPerson = false;
    }


    //cleanse-reset all data
    $scope.claimTitleRecorded = undefined;
    $scope.areyouBlame = undefined;

    $scope.createVehicleReg = undefined;
    $scope.createVehicleMake = undefined;
    $scope.createVehicleModel = undefined;
    $scope.createVehicleColour = undefined;
    $scope.createParkedUnparked = undefined;
    $scope.createWeather = undefined;
    $scope.createLightLevel = undefined;
    $scope.createRoadQuality = undefined;
    $scope.createDamageReport = undefined;
    $scope.createInjuryReport = undefined;
    $scope.createManualLocation = undefined;

    $scope.isdriverOwner = undefined;
    $scope.driverName = undefined;
    $scope.driverAddress = undefined;
    $scope.driverPostcode = undefined;
    $scope.driverReg = undefined;
    $scope.isdriverInsured = undefined;
    $scope.driverInsComp = undefined;
    $scope.driverInsCompAddr = undefined;
    $scope.driverInsCompPost = undefined;

    //return to homepage and clear all the values to enable creation of a new claim
    $scope.showHome = true;
    $scope.showClaimAdmin = false;
    $scope.showPeopleAdmin = false;
    $scope.showProfile = false;
    $scope.showClaim = false;
    $scope.showHelp = false;

    $scope.showStg1 = true;
    $scope.showStg2 = false;
    $scope.showStg3 = false;
    $scope.showStg4 = false;
    $scope.showStg4_1 = false;
    $scope.showStg5 = false;
    $scope.showStg6 = false;
    $scope.showStg7 = false;

    $scope.advise_victim = false;
    $scope.advise_victim_of_insured = false;
    $scope.advise_victim_of_uninsured_and_fully_comp = false;
    $scope.advise_victim_of_insured_and_third_party = false;
    $scope.advise_transgressor = false;

    $scope.quickclaims_success = false;
    $scope.save_success = false;

      return true;
    }
    else{
      return false;
    }
  }

  $scope.exitClaim = function () {

  //allowing return to homescreen without message or removing claim

  //cleanse-reset all data
  $scope.claimTitleRecorded = undefined;
  $scope.areyouBlame = undefined;

  $scope.createVehicleReg = undefined;
  $scope.createVehicleMake = undefined;
  $scope.createVehicleModel = undefined;
  $scope.createVehicleColour = undefined;
  $scope.createParkedUnparked = undefined;
  $scope.createWeather = undefined;
  $scope.createLightLevel = undefined;
  $scope.createRoadQuality = undefined;
  $scope.createDamageReport = undefined;
  $scope.createInjuryReport = undefined;
  $scope.createManualLocation = undefined;

  $scope.isdriverOwner = undefined;
  $scope.driverName = undefined;
  $scope.driverAddress = undefined;
  $scope.driverPostcode = undefined;
  $scope.driverReg = undefined;
  $scope.isdriverInsured = undefined;
  $scope.driverInsComp = undefined;
  $scope.driverInsCompAddr = undefined;
  $scope.driverInsCompPost = undefined;

  //return to homepage and clear all the values to enable creation of a new claim
  $scope.showHome = true;
  $scope.showClaimAdmin = false;
  $scope.showPeopleAdmin = false;
  $scope.showProfile = false;
  $scope.showClaim = false;
  $scope.showHelp = false;

  $scope.showStg1 = true;
  $scope.showStg2 = false;
  $scope.showStg3 = false;
  $scope.showStg4 = false;
  $scope.showStg4_1 = false;
  $scope.showStg5 = false;
  $scope.showStg6 = false;
  $scope.showStg7 = false;

  $scope.advise_victim = false;
  $scope.advise_victim_of_insured = false;
  $scope.advise_victim_of_uninsured_and_fully_comp = false;
  $scope.advise_victim_of_insured_and_third_party = false;
  $scope.advise_transgressor = false;

  $scope.quickclaims_success = false;
  $scope.save_success = false;

  }

  $scope.showUserDetails = false;

  $scope.stage4ShowDetails = function () {

    $scope.showStg4 = false;
    $scope.showUserDetails = true;
  };

  $scope.stage4ShowDetailsReturn = function () {

    $scope.showStg4 = true;
    $scope.showUserDetails = false;
  };

});
