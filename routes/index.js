var express = require("express");
var router=express.Router();
var passport=require("passport");
const user = require("../models/user");
var User=require("../models/user");

router.get("/", function(req,res){
    res.render("landing");

});
router.get("/register",function(req,res){
    res.render("register.ejs");
});

router.post("/register",function(req,res){
var newUser=new User({username: req.body.username});

    User.register(newUser, req.body.password,function(err,user){
        if(err)
        {
            console.log(err)
            req.flash("error",err.message);
            return(res.redirect("register"));
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("success","Welcome ! "+ user.username);
            res.redirect("/campgrounds");
        });
    });
});


router.get("/login",function(req,res){
    res.render("login");

});


router.post("/login",passport.authenticate("local",
{
    
    //successRedirect:"/campgrounds",
    failureRedirect:"/login"
}), function(req,res){

    req.flash("success","Welcome ! "+ req.body.username);

    res.redirect("/campgrounds")

    

});


router.get("/logout",function(req,res){
    req.logOut();
    req.flash("success","Logged out Successfully !")
    res.redirect("/campgrounds");

});


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();

    }
    res.redirect("/login");
}

module.exports=router;