Package.describe({
  summary: "Adds muppets to the Meteor.users collection."
});

Package.on_use(function (api) {
  api.use('accounts-base');

  api.add_files('bootstrap.users.js', 'server');

  api.add_files('muppets/Animal.jpg', "client", {isAsset: true});
  api.add_files('muppets/CrazyHarry.jpg', "client", {isAsset: true});
  api.add_files('muppets/DrHoneydew.jpg', "client", {isAsset: true});
  api.add_files('muppets/Fozzy.jpg', "client", {isAsset: true});
  api.add_files('muppets/Gonzo.jpg', "client", {isAsset: true});
  api.add_files('muppets/Kermit.jpg', "client", {isAsset: true});
  api.add_files('muppets/MsPiggy.jpg', "client", {isAsset: true});
  api.add_files('muppets/SamEagle.jpg', "client", {isAsset: true});
  api.add_files('muppets/Sweetums.jpg', "client", {isAsset: true});
});


