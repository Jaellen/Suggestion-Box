app.factory('suggestions', [function() {

  var data_object =
  {
    data_array:
    [
      {
          title:"Save the environment by having everyone to bring their own mugs and water bottles to work",
          upvotes:15,
          comments:[],
          star: false
      },
      {
          title:"Hold a demo night social for everyone to show off their awesome work",
          upvotes:11,
          comments:
          [
            {
              body: "I like this idea. We can do it monthly and schedule it way ahead to give people enough notice",
              upvotes:4
            },
            {
              body: "This may be cool if we do themes for each one",
              upvotes:5
            },
            {
              body: "What about employee hackathons? :)",
              upvotes:3
            },
            {
              body: "Themed hackathons, Love it!",
              upvotes:6
            }
          ],
          star: false
      },
      {
          title:"Implement a no-internal meeting day on Friday to allow employees to get more work done",
          upvotes:9,
          comments:[],
          star: false
      },
      {
          title:"Create an online swag shop for employees and customers to buy awesome company swag",
          upvotes:8,
          comments:[],
          star: false
      },
      {
          title:"Implement an easier system for meeting and board room bookings",
          upvotes:4,
          comments:[],
          star: false

      },
      {
          title:"Offer a discount for yoga sessions",
          upvotes:3,
          comments:[],
          star: false
      },
      {
          title:"Paint the back wall with inspirational quotes and company values",
          upvotes:1,
          comments:[],
          star: false
      }
    ]
  };

  return data_object;

  }]);

  /* empty array:
  var data_object =
  { data_array:[]};
    return data_object;
}]); */
