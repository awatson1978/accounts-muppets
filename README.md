**accounts-muppets** is a Meteorite package to populate your Meteor.users() collection with Muppets.


------------------------
### Installation

First, install the accounts-muppets package from the command line, like so:

````
mrt add accounts-muppets
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````js
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "accounts-muppets": {
      "git": "https://github.com/awatson1978/accounts-muppets.git"
    }
  }
}

````


------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'drhoneydew',
  password: 'drhoneydew',
  email: 'drhoneydew@test.org',
  profile: {
    name: 'Dr. Honeydew',
    role: 'Muppet',
    alignment: 'Lawful Evil',
    quote: 'At last, your family can be protected from the heartbreak of gorilla invasion.',
    avatar: '/avatars/DrHoneydew.jpg'
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
### License

Images are copyright Jim Henson Productions.  Don't use in production without permission.  This package is for private, non-commercial use only.


