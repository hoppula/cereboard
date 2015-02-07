# Cereboard

This simple example shows how one would begin to construct a discussion forum with [Cerebellum](https://github.com/SC5/cerebellum).

This example uses a newly added feature that enables us to define which data to load directly in view components.

[Categories](https://github.com/hoppula/cereboard/blob/master/components/categories.js), [Board](https://github.com/hoppula/cereboard/blob/master/components/board.js) & [Thread](https://github.com/hoppula/cereboard/blob/master/components/thread.js) components declare their data sources with static **fetch** method.

This enables us to keep our routes clear of **store.fetch** calls and you can instantly see what data the components use. Components are still also fully reusable in other contexts.

Check out **[routes.js](https://github.com/hoppula/cereboard/blob/master/routes.js)**, isomorphic routing can't get much simpler :)

## Initial steps

Install dependencies:

    npm install

Build:

    npm run build

Start (& reload server with nodemon on changes):

    npm start

Watch for changes (and rebuild public/js/app.js with source maps):

    npm run watch