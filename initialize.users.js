// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;


    userId = Accounts.createUser({
      username: 'animal',
      password: 'animal',
      email: 'animal@test.org',
      profile: {
        name: 'Animal',
        role: 'Muppet',
        alignment: 'Chaotic Neutral',
        quote: 'Beat drums!  Beat drums!  Kill!  Kill!  Kill!',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/Animal.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/Animal.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'harry',
      password: 'harry',
      email: 'harry@test.org',
      profile: {
        name: 'Crazy Harry',
        role: 'Muppet',
        alignment: 'Chaotic Evil',
        quote: 'Did somebody say bang?',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/CrazyHarry.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/CrazyHarry.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'drhoneydew',
      password: 'drhoneydew',
      email: 'drhoneydew@test.org',
      profile: {
        name: 'Dr. Honeydew',
        role: 'Muppet',
        alignment: 'Lawful Evil',
        quote: 'At last, your family can be protected from the heartbreak of gorilla invasion.',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/DrHoneydew.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/DrHoneydew.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'fozzy',
      password: 'fozzy',
      email: 'fozzy@test.org',
      profile: {
        name: 'Fozzy',
        role: 'Muppet',
        alignment: 'Neutral Good',
        quote: 'My cousin is so dumb, he thinks eggs benedict is a mafia gangster!',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/Fozzy.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/Fozzy.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'gonzo',
      password: 'gonzo',
      email: 'gonzo@test.org',
      profile: {
        name: 'Gonzo',
        role: 'Muppet',
        alignment: 'Chaotic Good',
        quote: 'Cancel my bread impersonation act!  They didnt deliver my poppy seeds!  You wouldnt want me to walk out there naked, would you?',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/Gonzo.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/Gonzo.jpg'        
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'sam',
      password: 'sam',
      email: 'sam@test.org',
      profile: {
        name: 'Sam the Eagle',
        role: 'Muppet',
        alignment: 'Lawful Neutral',
        quote: 'You are all weird.',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/SamEagle.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/SamEagle.jpg'        
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'sweetums',
      password: 'sweetums',
      email: 'sweetums@test.org',
      profile: {
        name: 'Sweetums',
        role: 'Muppet',
        alignment: 'True Neutral',
        quote: 'Hey!  Hey, were you goin?  Hey!  Wait for me!  I wanna go to Hollywood!  Wait for me!  Cmon, guys!  Wait, please!  I wanna go to Hollywood!',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/Sweetums.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/Sweetums.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
      username: 'kermit',
      password: 'kermit',
      email: 'kermit@test.org',
      profile: {
        name: 'Kermit the Frog',
        role: 'Muppet',
        alignment: 'Lawful Good',
        quote: 'I guess I was wrong when I said I never promised anyone.  I promised me.',
        avatar: '/packages/awatson1978_accounts-muppets/muppets/Kermit.jpg',
        thumbnail: '/packages/awatson1978_accounts-muppets/muppets/thumbnails/Kermit.jpg'
      }
    });
    console.info('Account created: ' + userId);

    userId = Accounts.createUser({
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
    });
    console.info('Account created: ' + userId);




  }
});
