# Cereboard

This simple example shows how one would begin to construct a discussion forum with cerebellum.

This example uses a newly added feature that enables us to define which data to load directly in view components.

Categories, Board & Thread components declare their data sources with static **fetch** method. This enables us to keep
routes clear of **store.fetch** calls and you can instantly see what data the components use. Components are still also
fully reusable in other contexts.

Check out **routes.js**, routing can't get much simpler :)

## Initial steps

Install dependencies:

    npm install

Build:

    npm run build

Start (& reload server with nodemon on changes):

    npm start

Watch for changes (and rebuild public/js/app.js with source maps):

    npm run watch