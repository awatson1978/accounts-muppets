import { get, has } from 'lodash';
import faker from 'faker';
import { Random } from 'meteor/random';

// import { Patient, Patients, PatientSchema } from 'meteor/clinical:hl7-resource-patient';

// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (process.env.INITIALIZE || get(Meteor, 'settings.private.initializePatients')) {
    Meteor.call("initializeMuppetsAsPatients");
  }
});

Meteor.methods({
  initializeMuppetsAsPatients:function (){
     console.info('Initializing muppets....');

     var userId = null;
     var users = [{
        username: 'animal',
        password: 'animal',
        email: 'animal@test.org',
        profile: {
          name: {
            text: 'Animal',
            given: 'Animal',
            family: 'Meyham'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Chaotic Neutral',
          quote: 'Beat drums!  Beat drums!  Kill!  Kill!  Kill!',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/Animal.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/Animal.jpg'
        }
      }, {
        username: 'harry',
        password: 'harry',
        email: 'harry@test.org',
        profile: {
          name: {
            text: 'Crazy Harry',
            given: 'Crazy',
            family: 'Harry'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Chaotic Evil',
          quote: 'Did somebody say bang?',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/CrazyHarry.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/CrazyHarry.jpg'
        }
      }, {
        username: 'drhoneydew',
        password: 'drhoneydew',
        email: 'drhoneydew@test.org',
        profile: {
          name: {
            text: 'Dr. Honeydew',
            given: 'Bunsen',
            family: 'Honneydew'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Lawful Evil',
          quote: 'At last, your family can be protected from the heartbreak of gorilla invasion.',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/DrHoneydew.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/DrHoneydew.jpg'
        }
      }, {
        username: 'fozzy',
        password: 'fozzy',
        email: 'fozzy@test.org',
        profile: {
          name: {
            text: 'Fozzy',
            given: 'Fozzy',
            family: 'Bear'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Neutral Good',
          quote: 'My cousin is so dumb, he thinks eggs benedict is a mafia gangster!',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/Fozzy.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/Fozzy.jpg'
        }
      }, {
        username: 'gonzo',
        password: 'gonzo',
        email: 'gonzo@test.org',
        profile: {
          name: {
            text: 'Gonzo',
            given: 'Gonzo',
            family: 'Great'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Chaotic Good',
          quote: 'Cancel my bread impersonation act!  They didnt deliver my poppy seeds!  You wouldnt want me to walk out there naked, would you?',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/Gonzo.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/Gonzo.jpg'
        }
      }, {
        username: 'sam',
        password: 'sam',
        email: 'sam@test.org',
        profile: {
          name: {
            text: 'Sam the Eagle',
            given: 'Sam',
            family: 'Eagle'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Lawful Neutral',
          quote: 'You are all weird.',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/SamEagle.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/SamEagle.jpg'
        }
      }, {
        username: 'sweetums',
        password: 'sweetums',
        email: 'sweetums@test.org',
        profile: {
          name: {
            text: 'Sweetums',
            given: 'Sweetums'
          },
          role: 'Muppet',
          gender: 'other',
          alignment: 'True Neutral',
          quote: 'Hey!  Hey, were you goin?  Hey!  Wait for me!  I wanna go to Hollywood!  Wait for me!  Cmon, guys!  Wait, please!  I wanna go to Hollywood!',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/Sweetums.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/Sweetums.jpg'
        }
      }, {
        username: 'kermit',
        password: 'kermit',
        email: 'kermit@test.org',
        profile: {
          name: {
            text: 'Kermit the Frog',
            given: 'Kermit',
            family: 'Frog'
          },
          role: 'Muppet',
          gender: 'male',
          alignment: 'Lawful Good',
          quote: 'I guess I was wrong when I said I never promised anyone.  I promised me.',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/Kermit.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/Kermit.jpg'
        }
      }, {
        username: 'mspiggy',
        password: 'mspiggy',
        email: 'mspiggy@test.org',
        profile: {
          name: {
            text: 'Ms. Piggy',
            given: 'Piggy',
            family: 'Lee'
          },
          role: 'Muppet',
          gender: 'female',
          alignment: 'Neutral Evil',
          quote: 'Kermie, it seems that every time we have a beautiful lady on the show, you completely forget about me.',
          photo: [{
            url: 'packages/awatson1978_accounts-muppets/muppets/MsPiggy.jpg'
          }],
          avatar: 'packages/awatson1978_accounts-muppets/muppets/thumbnails/MsPiggy.jpg'
        }
      }
     ];


    //  if (process.env.Patients) {

       var patientId;
       users.forEach (function(user){

         var fullName = "";
         if (has(user, 'profile.name.text')){
           fullName = get(user, 'profile.name.text')
         }
         
         if (Patients.find({'name.text': fullName}).count() === 0){           

          let streetAddress = faker.address.streetAddress() + ' ' + faker.address.streetName() + ' ' + faker.address.streetSuffix();
          
          var newPatient = {
             id: Random.id(),
             name: [{
               text: fullName,
               given: [get(user, 'profile.name.given')],
               family: get(user, 'profile.name.family')
             }],
            //  address: [{
            //   line: [ streetAddress ],
            //   city: faker.address.city(),
            //   state: faker.address.stateAbbr(),
            //   postalCode: faker.address.zipCode(),
            //   country: 'USA'
            //  }],
             active: true,
             gender: get(user, 'profile.gender'),
             birthDate: new Date("1955-01-01"),
             photo: [{
               url: get(user, "profile.avatar")
             }],
             maritalStatus: [{
               text: 'unknown',
               coding: [{
                code: 'UNK',
                display: "unknown"
              }]
             }],
             identifier: [],
             communication: [{
              preferred: true,
              language: {
                text: "English (United States)",
                coding: [{
                  code: 'en-US',
                  display: "English (United States)"
                }]
              }
             }]
           }
           newPatient.identifier.push({
              use : "usual",
              type : {
                text : "Medical record number",
                coding : [ 
                  {
                    system : "http://hl7.org/fhir/v2/0203",
                    code : "MR"
                  }
                ]
              },
              value : (Math.random() * 10000000).toFixed(0)
            });
          
           console.log('newPatient', newPatient)
           patientId = Patients.insert(newPatient, {
            validate: get(Meteor, 'settings.public.defaults.schemas.validate', false), 
            filter: get(Meteor, 'settings.public.defaults.schemas.filter', false), 
            removeEmptyStrings: get(Meteor, 'settings.public.defaults.schemas.removeEmptyStrings', false)
           }, function(error){
             console.log('error', error)
           });

           console.info('Patient created: ' + patientId);
         } else {
           console.log( fullName + ' already exists.  Skipping.');
         }
       });
  }
});
