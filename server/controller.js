const babyGift = [
  {
    id: 0,
    name: "John Smith",
    email: "andrenone@gmail.com",
    gifts: ["Rocking Chair", "Dresser"],
  },
  {
    id: 1,
    name: "Mary Steven",
    email: "flavianone@gmail.com",
    gifts: ["Baby Monitor", "Lamp"],
  },
  {
    id: 2,
    name: "Peter Jones",
    email: "flavia@gmail.com",
    gifts: ["Bottle", "Sweater"],
  },
];

let id = 3;

module.exports = {
  getGifts: (req, res) => {
    res.status(200).send(babyGift);
  },

  addGifts: (req, res) => {
    babyGift.push({ id, ...req.body });
    id++;
    return res.status(200).send(babyGift);
  },

  deleteGifts: (req, res) => {
    const newId = parseInt(req.params.newId);

    if (!isNaN(newId)) {
      const index = babyGift.findIndex(gift => gift.id === newId);
      if (index !== -1) {
        babyGift.splice(index, 1);
        res.status(200).send(babyGift);
      } else {
        res.status(404).send("Gift not found");
      }
    } else {
      res.status(400).send("Invalid ID");
    }
  },

  editGifts: (req, res) => {
    const newId = parseInt(req.params.newId);

    if (!isNaN(newId)) {
      const index = babyGift.findIndex(gift => gift.id === newId);
      if (index !== -1) {
        const { name, email, gifts } = req.body;
        const newGift = {
          id: newId,
          name: name || babyGift[index].name,
          email: email || babyGift[index].email,
          gifts: gifts || babyGift[index].gifts,
        };

        babyGift.splice(index, 1, newGift);
        res.status(200).send(babyGift);
      } else {
        res.status(404).send("Gift not found");
      }
    } else {
      res.status(400).send("Invalid ID");
    }
  },
};
