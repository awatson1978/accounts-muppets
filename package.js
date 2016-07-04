Package.describe({
  summary: "Adds muppets to the Meteor.users collection.",

  // update this value before you run 'meteor publish'
  version: "1.0.3",

  // if this value isn't set, meteor will default to the directory name
  name: "awatson1978:accounts-muppets",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-muppets.git"
});

Package.on_use(function (api) {
  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.addFiles('initialize.users.js', 'server');

  api.addFiles('muppets/Animal.jpg', "client", {isAsset: true});
  api.addFiles('muppets/CrazyHarry.jpg', "client", {isAsset: true});
  api.addFiles('muppets/DrHoneydew.jpg', "client", {isAsset: true});
  api.addFiles('muppets/Fozzy.jpg', "client", {isAsset: true});
  api.addFiles('muppets/Gonzo.jpg', "client", {isAsset: true});
  api.addFiles('muppets/Kermit.jpg', "client", {isAsset: true});
  api.addFiles('muppets/MsPiggy.jpg', "client", {isAsset: true});
  api.addFiles('muppets/SamEagle.jpg', "client", {isAsset: true});
  api.addFiles('muppets/Sweetums.jpg', "client", {isAsset: true});

  api.addFiles('muppets/thumbnails/Animal.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/CrazyHarry.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/DrHoneydew.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/Fozzy.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/Gonzo.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/Kermit.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/MsPiggy.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/SamEagle.jpg', "client", {isAsset: true});
  api.addFiles('muppets/thumbnails/Sweetums.jpg', "client", {isAsset: true});
});
