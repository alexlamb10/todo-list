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
    // console.log(list);
    res.status(200).send(list);
  },
  addTodo: (req, res) => {
    let { todo } = req.body;
    console.log("ADD TODO", todo);
    let id = list.length + 1;
    const item = {
      id: id,
      task: todo,
      complete: false,
    };
    list.push(item);
    res.status(200).send(list);
  },
  markComplete: (req, res) => {
    let { id } = req.params;

    let index = list.findIndex((x) => {
      return x.id == id;
    });
    if (list[index].complete === true) {
      list[index].complete = false;
    } else if (list[index].complete === false) {
      list[index].complete = true;
    }

    res.status(200).send(list);
  },
};
