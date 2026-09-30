const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const methodOverride = require('method-override');

const User = require('./models/User');
const Child = require('./models/Child');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


// ==========================================
// MIDDLEWARE
// ==========================================

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));


// ==========================================
// MONGODB CONNECTION
// ==========================================

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch((error) => {
        console.error(
            'MongoDB connection error:',
            error.message
        );
    });


// ==========================================
// HOME ROUTE
// ==========================================

app.get('/', (req, res) => {

    res.send(`
        <!DOCTYPE html>

        <html>

        <head>

            <title>Family Management System</title>

            <link rel="stylesheet" href="/style.css">

        </head>

        <body>

        <div class="container">

            <h1>
                Family Management System
            </h1>

            <p>
                Server is running successfully.
            </p>


            <div class="card">

                <h2>
                    Create New User
                </h2>

                <form
                    action="/users"
                    method="POST"
                >

                    <label>
                        First Name
                    </label>

                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter first name"
                        required
                    >


                    <label>
                        Last Name
                    </label>

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter last name"
                        required
                    >


                    <label>
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                    >


                    <label>
                        Phone
                    </label>

                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter phone number"
                        required
                    >


                    <button type="submit">
                        Create User
                    </button>

                </form>

            </div>


            <br>

            <a href="/users">
                View All Users
            </a>

        </div>

        </body>

        </html>
    `);

});


// ==========================================
// POST /users
// CREATE USER
// ==========================================

app.post('/users', async (req, res) => {

    try {

        const {
            firstName,
            lastName,
            email,
            phone
        } = req.body;


        // Validation
        if (
            !firstName ||
            !lastName ||
            !email ||
            !phone
        ) {

            return res.status(400).send(`
                <h2>
                    All user fields are required.
                </h2>

                <a href="/">
                    Go Back
                </a>
            `);

        }


        // Create user
        const user = await User.create({

            firstName: firstName,

            lastName: lastName,

            email: email,

            phone: phone

        });


        console.log('User created:', user);


        // Redirect to user profile
        res.redirect(`/users/${user._id}`);

    } catch (error) {

        console.error(error);

        res.status(500).send(`
            <h2>
                Server error while creating user.
            </h2>

            <p>
                ${error.message}
            </p>

            <a href="/">
                Go Back
            </a>
        `);

    }

});


// ==========================================
// GET /users
// DISPLAY ALL USERS
// ==========================================

app.get('/users', async (req, res) => {

    try {

        const users = await User.find();

        res.render('users', {

            users: users,

            parent: null,

            children: []

        });

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Database error while fetching users.'
        );

    }

});


// ==========================================
// GET /users/search/:name
// SEARCH USER BY FIRST NAME
// ==========================================

app.get('/users/search/:name', async (req, res) => {

    try {

        const name = req.params.name;

        const users = await User.find({

            firstName: {
                $regex: name,
                $options: 'i'
            }

        });


        res.render('users', {

            users: users,

            parent: null,

            children: []

        });

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Error while searching users.'
        );

    }

});


// ==========================================
// GET /users/:id
// DISPLAY USER PROFILE
// ==========================================

app.get('/users/:id', async (req, res) => {

    try {

        const userId = req.params.id;


        // Validate MongoDB ID
        if (
            !mongoose.Types.ObjectId.isValid(userId)
        ) {

            return res.status(404).render('404', {

                message: 'Invalid User ID'

            });

        }


        // Find user
        const user = await User.findById(userId);


        // User doesn't exist
        if (!user) {

            return res.status(404).render('404', {

                message: 'User Not Found'

            });

        }


        // Find children belonging to this user
        const children = await Child.find({

            parentId: userId

        });


        res.render('profile', {

            user: user,

            children: children

        });

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Database/server error while loading profile.'
        );

    }

});


// ==========================================
// POST /users/:id/children
// CREATE CHILD
// ==========================================

app.post('/users/:id/children', async (req, res) => {

    try {

        const userId = req.params.id;


        // Validate parent ID
        if (
            !mongoose.Types.ObjectId.isValid(userId)
        ) {

            return res.status(404).send(
                'Invalid User ID'
            );

        }


        // Check whether parent exists
        const user = await User.findById(userId);


        if (!user) {

            return res.status(404).send(
                'Parent User Not Found'
            );

        }


        const {
            firstName,
            lastName,
            age,
            email
        } = req.body;


        // Validate required fields
        if (
            !firstName ||
            !lastName ||
            !age ||
            !email
        ) {

            return res.status(400).send(
                'All child fields are required.'
            );

        }


        // Create child
        await Child.create({

            firstName: firstName,

            lastName: lastName,

            age: age,

            email: email,

            // Parent-child relationship
            parentId: userId

        });


        // Return to profile
        res.redirect(`/users/${userId}`);

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Server error while creating child.'
        );

    }

});


// ==========================================
// GET /users/:id/children
// DISPLAY CHILDREN OF SPECIFIC USER
// ==========================================

app.get('/users/:id/children', async (req, res) => {

    try {

        const userId = req.params.id;


        // Validate ID
        if (
            !mongoose.Types.ObjectId.isValid(userId)
        ) {

            return res.status(404).send(
                'Invalid User ID'
            );

        }


        // Check user exists
        const user = await User.findById(userId);


        if (!user) {

            return res.status(404).send(
                'User Not Found'
            );

        }


        // Find only children belonging to user
        const children = await Child.find({

            parentId: userId

        });


        // No children
        if (children.length === 0) {

            return res.send(
                'No children found for this user.'
            );

        }


        res.render('users', {

            users: [],

            parent: user,

            children: children

        });

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Database error while fetching children.'
        );

    }

});


// ==========================================
// GET /users/:id/children/:childId
// CHECK CHILD-PARENT RELATIONSHIP
// ==========================================

app.get(
    '/users/:id/children/:childId',
    async (req, res) => {

        try {

            const userId = req.params.id;

            const childId = req.params.childId;


            // Validate both IDs
            if (
                !mongoose.Types.ObjectId.isValid(userId) ||
                !mongoose.Types.ObjectId.isValid(childId)
            ) {

                return res.status(404).send(
                    'Invalid User ID or Child ID'
                );

            }


            // Check parent exists
            const user = await User.findById(userId);


            if (!user) {

                return res.status(404).send(
                    'User Not Found'
                );

            }


            // IMPORTANT:
            // Check BOTH child ID and parent ID
            const child = await Child.findOne({

                _id: childId,

                parentId: userId

            });


            if (!child) {

                return res.status(404).send(
                    'Child Not Found for this user'
                );

            }


            res.render('child', {

                child: child,

                user: user

            });

        } catch (error) {

            console.error(error);

            res.status(500).send(
                'Server error while fetching child.'
            );

        }

    }
);


// ==========================================
// GET /users/:id/children/count
// BONUS
// ==========================================

app.get(
    '/users/:id/children/count',
    async (req, res) => {

        try {

            const userId = req.params.id;


            // Validate ID
            if (
                !mongoose.Types.ObjectId.isValid(userId)
            ) {

                return res.status(404).json({

                    success: false,

                    message: 'Invalid User ID'

                });

            }


            // Check user
            const user = await User.findById(userId);


            if (!user) {

                return res.status(404).json({

                    success: false,

                    message: 'User Not Found'

                });

            }


            // Count children
            const count = await Child.countDocuments({

                parentId: userId

            });


            res.json({

                success: true,

                user:
                    `${user.firstName} ${user.lastName}`,

                childCount: count

            });

        } catch (error) {

            console.error(error);

            res.status(500).json({

                success: false,

                message: 'Database error'

            });

        }

    }
);


// ==========================================
// PATCH /children/:id
// UPDATE CHILD
// ==========================================

app.patch('/children/:id', async (req, res) => {

    try {

        const childId = req.params.id;


        // Validate ID
        if (
            !mongoose.Types.ObjectId.isValid(childId)
        ) {

            return res.status(404).send(
                'Invalid Child ID'
            );

        }


        const {
            firstName,
            lastName,
            age,
            email
        } = req.body;


        // Build update object
        const updateData = {};


        if (firstName) {

            updateData.firstName = firstName;

        }


        if (lastName) {

            updateData.lastName = lastName;

        }


        if (age !== undefined && age !== '') {

            updateData.age = age;

        }


        if (email) {

            updateData.email = email;

        }


        // Update child
        const child = await Child.findByIdAndUpdate(

            childId,

            updateData,

            {
                new: true,
                runValidators: true
            }

        );


        if (!child) {

            return res.status(404).send(
                'Child Not Found'
            );

        }


        // Find parent
        const user = await User.findById(
            child.parentId
        );


        res.render('child', {

            child: child,

            user: user

        });

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Server error while updating child.'
        );

    }

});


// ==========================================
// DELETE /children/:id
// DELETE CHILD
// ==========================================

app.delete('/children/:id', async (req, res) => {

    try {

        const childId = req.params.id;


        // Validate ID
        if (
            !mongoose.Types.ObjectId.isValid(childId)
        ) {

            return res.status(404).json({

                success: false,

                message: 'Invalid Child ID'

            });

        }


        // Find child first
        const child = await Child.findById(
            childId
        );


        if (!child) {

            return res.status(404).json({

                success: false,

                message: 'Child Not Found'

            });

        }


        // Store parent ID
        const parentId = child.parentId;


        // Delete child
        await Child.findByIdAndDelete(
            childId
        );


        // Redirect back to parent profile
        res.redirect(`/users/${parentId}`);

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Server error while deleting child.'
        );

    }

});


// ==========================================
// DELETE /users/:id
// DELETE USER AND ALL CHILDREN
// ==========================================

app.delete('/users/:id', async (req, res) => {

    try {

        const userId = req.params.id;


        // Validate User ID
        if (
            !mongoose.Types.ObjectId.isValid(userId)
        ) {

            return res.status(404).render('404', {

                message: 'Invalid User ID'

            });

        }


        // Find user
        const user = await User.findById(
            userId
        );


        if (!user) {

            return res.status(404).render('404', {

                message: 'User Not Found'

            });

        }


        // Delete all children belonging
        // to this user
        await Child.deleteMany({

            parentId: userId

        });


        // Delete user
        await User.findByIdAndDelete(
            userId
        );


        // Redirect to users page
        res.redirect('/users');

    } catch (error) {

        console.error(error);

        res.status(500).send(
            'Server error while deleting user.'
        );

    }

});


// ==========================================
// CUSTOM 404
// ==========================================

app.use((req, res) => {

    res.status(404).render('404', {

        message: 'Page Not Found'

    });

});


// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});