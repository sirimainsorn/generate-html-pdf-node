var users = [
  {
    id: 1,
    username: "goldroger",
    name: "Gol D. Roger",
  },
  {
    id: 2,
    username: "mrzero",
    name: "Sir Crocodile",
  },
  {
    id: 3,
    username: "luffy",
    name: "Monkey D. Luffy",
  },
  {
    id: 4,
    username: "kuzan",
    name: "Aokiji",
  },
  {
    id: 5,
    username: "shanks",
    name: "'Red-Haired' Shanks",
  },
];

const getAllUser = (req, res) => {
  res.json(users);
};

module.exports = {
  getAllUser,
};
