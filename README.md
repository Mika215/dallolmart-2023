# An Elegant E-commerce built with React,styled components and Material UI.

This is a full stack e-commerce. Inorder to run the code which is kept in to two separate folders Namely `client` and `server`; you will need to navigate through both folders as follows:\
Front-end: `cd client` then hit `npm start` on your terminal\
Back-end: `cd server` the `npm start`on a new terminal

Then you will need to create your own `.env`file and pass the folloing variables:\
`PORT= ` any port number for the server(Back end).\
`CLIENT_URL=` Port for the client(Front end) - since this project was built with react the client will run on port `3000` by default [Read more on this topic](https://www.geeksforgeeks.org/how-to-specify-a-port-to-run-a-create-react-app-based-project/).\
`JWT_SEC_KEY= ` JSON Web token secret key for encryption and decryption of passwords.\
`MONGO_URL= ` Your Mongo DB connection string to get connected to your Database.\
`STRIPE_SEC_KEY= ` Your stripe payment secret key.\
`JWT_EMAIL_ACT_SEC_KEY= ` To enable the automatic emailing service.

Check out the [dallolmart e-commerce](https://mikacodes.netlify.app/) deployed on Cyclic.

## Technologies

In order to realize such an elegant project the following thecnologies have been used

### Front-end

**React**\
**Material UI**\
**styled components**\
**axios**

### Back-end

**NodeJS**\
**Express**\
**MongoDB**\
**Mongoose**\
**Firebase**\
**Nodemailer & Googleapis**

### Payment System

**[Stripe](https://stripe.com/)**

### Deployment

**[Cyclic](https://www.cyclic.sh/)** _Free Tier_
