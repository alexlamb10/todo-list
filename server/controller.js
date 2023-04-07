let list = [
  {
    id: 1,
    task: "Go to the store",
    complete: false,
  },
  {
    id: 2,
    task: "Go to work",
    complete: true,
  },
  {
    id: 3,
    task: "Workout",
    complete: false,
  },
  {
    id: 4,
    task: "Do some coding challenges",
    complete: false,
  },
  {
    id: 5,
    task: "Create a website",
    complete: false,
  },
];

module.exports = {
  getList: (req, res) => {
    res.status(200).send(list);
  },
};
