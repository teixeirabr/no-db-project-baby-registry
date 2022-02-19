const babyGift = [
  {
    id: 0,
    name: "John Smith ",
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
    const { newId } = req.params;

    console.log(req.params);
    const index = babyGift.findIndex((gift, id) => {
      console.log("index: ", id, " -> ", gift.id, +newId);
      //If the 'return' is true then the index where the 'true' was found is returned
      return gift.id === +newId;
    });
    babyGift.splice(index, 1);
    res.status(200).send(babyGift);
  },

  editGifts: (req, res) => {
    const { newId } = req.params;
    console.log(newId);
    const { name, email, gifts } = req.body;
    console.log(req.body);
    const index = babyGift.findIndex((e) => e.id === +newId);
    console.log(index);

    const newGift = {
      id: +newId || babyGift[index].id,
      name: name || babyGift[index].name,
      email: email || babyGift[index].email,
      gifts: gifts || babyGift[index].gifts,
    };
    console.log(newGift);
    babyGift.splice(index, 1, newGift);
    // console.log(babyGift);
    res.status(200).send(babyGift);
  },
};
