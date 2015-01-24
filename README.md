**accounts-muppets** is a Meteorite package to populate your Meteor.users() collection with Muppets.


------------------------
### Installation

First, install the accounts-muppets package from the command line, like so:

````
meteor add awatson1978:accounts-muppets
````


------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'mspiggy',
  password: 'mspiggy',
  email: 'mspiggy@test.org',
  profile: {
    name: 'Ms. Piggy',
    role: 'Muppet',
    alignment: 'Neutral Evil',
    quote: 'Kermie, it seems that every time we have a beautiful lady on the show, you completely forget about me.',
    avatar: '/packages/awatson1978_accounts-muppets/muppets/MsPiggy.jpg',
    thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/MsPiggy.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  For the most part, the username and password will both be the person's first name, but a number of users are set as the last name.  All emails will be at the ``test.org`` domain.


------------------------
### Users List

Animal  
Crazy Harry  
Dr. Honeydew  
Fozzy the Bear  
Gonzo  
Kermit the Frog  
Ms. Piggy  
Sam the Eagle  
Sweetums  


------------------------
### Example Usage  

````html
{{#each userList}}
{{profile.name}}<br>
{{/each}}
````

````js
if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.registerHelper('userList', function(){
    return Meteor.users.find();
  });
}

if (Meteor.isServer) {
  Meteor.publish("users", function(){
    return Meteor.users.find();
  });
}
````

------------------------
### License

Images are copyright Jim Henson Productions.  Don't use in production without permission.  This package is for private, non-commercial use only.
