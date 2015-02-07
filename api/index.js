const router = require('express').Router();

// mock data
const boards = [
  {id: 0, title: "Announcements"},
  {id: 1, title: "General"},
  {id: 2, title: "Feature requests"},
  {id: 3, title: "Pull requests"},
];

const threads = [
  [
    {id: 0, title: "Release 0.6.0", body: "Version 0.6.0 was just released, go get it."},
    {id: 1, title: "Release 0.5.0", body: "Version 0.5.0 is here, the new features are..."},
    {id: 2, title: "Welcome", body: "Welcome to this board. Every post comes from static mock, but don't let that fool you."}
  ],
  [
    {id: 3, title: "This forum changed my life", body: "I never knew something like this was possible."},
    {id: 4, title: "Why isomorphic apps suck", body: "Because JavaScript is a toy language and it should go away."},
    {id: 5, title: "Lottery numbers", body: "4, 8, 15, 16, 23 and 42."}
  ],
  [
    {id: 6, title: "Please add moer Flux!", body: "This does not have enough Flux, so it can't be good."},
    {id: 7, title: "Not reactive enough", body: "You should get some tasty Bacon."},
    {id: 8, title: "Replace promises with callbacks", body: "Because I don't like promises, I can never keep them."}
  ],
  [
    {id: 9, title: "New homepage", body: "Added new homepage."},
    {id: 10, title: "Better documentation", body: "Added a wiki page and organized documentation."},
    {id: 11, title: "Fixed a typo", body: "Added one dot."}
  ]
];

const flattenThreads = threads.reduce(function(a, b) {
  return a.concat(b);
});

router.get("/categories", (req, res) => {
  return res.json([
    {
      id: 0,
      title: "General",
      boards: [boards[0], boards[1]]
    },
    {
      id: 1,
      title: "Development",
      boards: [boards[2], boards[3]]
    }
  ]);
});

router.get("/boards/:id", (req, res) => {
  return res.json({
    id: req.params.id,
    title: boards[req.params.id].title,
    threads: threads[req.params.id]
  });
});

router.get("/threads/:id", (req, res) => {
  return res.json({
    id: req.params.id,
    title: flattenThreads[req.params.id].title,
    body: flattenThreads[req.params.id].body
  });
});

export default router;