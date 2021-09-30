var mongoose = require("mongoose");
const campground = require("./models/campground");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Chennai", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        description: "VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students."
    },
    {
        name: "Chennai", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        description: "VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students."
    },
    {
        name: "Chennai", image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        description: "VIT was established with the aim of providing quality higher education on par with international standards. It persistently seeks and adopts innovative methods to improve the quality of higher education on a consistent basis.The campus has a cosmopolitan atmosphere with students from all corners of the globe. Experienced and learned teachers are strongly encouraged to nurture the students."
    }
]

function seedDB() {

    Campground.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed ");

        data.forEach(function (seed) {
            Campground.create(seed, function (err, campground) {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log("Added");
                    Comment.create({text: "Good",
                            author: "Aravinth"
                        }, function (err, comment) {
                        if (err) {
                            console.log(err);

                        }
                        else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("created new Comment");
                        }

                    });
                }

            });

        }); 

    });
}

module.exports = seedDB;