const router = require('express').Router();
const { Module } = require('module');
const { Intro, About, Project, Course, Experience, Contact } = require('../models/myapimodels');
const { User } = require('../models/usermodel'); 

// get all myapi data
router.get("/get-myapi-data", async (req, res) => {
    try {
        const intros = await Intro.find();
        const abouts = await About.find();
        const projects = await Project.find();
        const courses = await Course.find();
        const experiences = await Experience.find();
        const contacts = await Contact.find();

        res.status(200).send({
            intro: intros[0],
            about: abouts[0],
            projects: projects,
            contact: contacts[0],
            experiences: experiences,
            courses: courses,
        });


    } catch (error) {
        res.status(500).send(error);
    }
});

// update intro 
router.post("/update-intro", async (req, res) => {
    try {
        const intro = await Intro.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: intro,
            success: true,
            message: "Intro Updated Successfully"
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// update about 
router.post("/update-about", async (req, res) => {
    try {
        const about = await About.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: about,
            success: true,
            message: "About Updated Successfully"
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// add experience

router.post("/add-experience", async (req, res) => {
    try {
        const experience = new Experience(req.body);
        await experience.save();
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience Updated Successfully",
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// Update experience

router.post("/update-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete Experience

router.post("/delete-experience", async (req, res) => {
    try {
        const experience = await Experience.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: experience,
            success: true,
            message: "Experience deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// add project

router.post("/add-project", async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(200).send({
            data: project,
            success: true,
            message: "Project Updated Successfully",
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// Update project

router.post("/update-project", async (req, res) => {
    try {
        const project = await Project.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: project,
            success: true,
            message: "project updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete project

router.post("/delete-project", async (req, res) => {
    try {
        const project = await Project.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: project,
            success: true,
            message: "Project deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// add course

router.post("/add-course", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(200).send({
            data: course,
            success: true,
            message: "Course Updated Successfully",
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// Update course

router.post("/update-course", async (req, res) => {
    try {
        const course = await Course.findOneAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: course,
            success: true,
            message: "Course updated successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// Delete course

router.post("/delete-course", async (req, res) => {
    try {
        const course = await Course.findOneAndDelete({ _id: req.body._id });
        res.status(200).send({
            data: course,
            success: true,
            message: "Course deleted successfully",
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

// update contact 
router.post("/update-contact", async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            { _id: req.body._id },
            req.body,
            { new: true }
        );
        res.status(200).send({
            data: contact,
            success: true,
            message: "Contact Updated Successfully"
        });

    } catch (error) {
        res.status(500).send(error);
    }
});

// admin login
router.post("/admin-login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username,
            password: req.body.password,
        });
        user.password = "";
        if (user) {
            res.status(200).send({
                data: user,
                success: true,
                message: "Login successfully",
                
            });
        }
        else {
            res.status(200).send({
                data: user,
                success: false,
                message: "Invalid username or password"
            });
        }
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = router;