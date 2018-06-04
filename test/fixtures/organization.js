module.exports = {
  id: 1,
  name: "Helping Hand Mission",
  description: "Provide relief and support to needy families and victims of fire.",
  website: "http://helpinghandmission.org/",
  image: "http://helpinghandmission.org/wp-content/uploads/edd/2016/12/hhm-building-366x220.jpg",
  logo: "http://helpinghandmission.org/wp-content/uploads/2016/12/hhm-newlogo-200x90.png",
  accepted_items: ["household items", "clothing and accessories"],
  pickups: [
    { date: "Friday, June 1, 2018",
      accepted_items: [
        "clothing and accessories",
        "furniture",
        "household items"
      ],
      zipcodes: [
        {zipcode: "80303"},
        {zipcode: "80302"},
        {zipcode: "80304"}
      ],
    }
  ]
}
