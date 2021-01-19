import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db, auth } from "./firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button, Input } from "@material-ui/core";
import ImageUpload from './ImageUpload';

//https://material-ui.com/components/modal/#api -> Modal syling
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  let url = "https://reactjs.org/";
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  //posts have username, caption and imageUrl
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscibe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user has logged in
        console.log(authUser);
        setUser(authUser);
        } else {
          //User has logged out
          setUser(null);
      }
    })

    return () => {
      // perform some cleanup actions
      unsubscibe();
    }
  }, [user, username]);

  // useEfffect --> Runs a piece of code in a specific condition
  useEffect(() => {
    // this is where the code runs
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // Every time a post is added this code fires. (This is where the code runs db.collection('name of collection'))
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
  }, []);

  // Sign up --> Close module once you sign up at the end of function
  const signUp = (event) => {
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({
          displayName: username
        })
      })
      .catch((error) => alert(error.message));
      setOpen(false);
  };

  // Sign in --> Close module once you sign up at the end of function
  const signIn = (event) => {
    event.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .catch((error) => console.log(error.message));
    setOpenSignIn(false);
  }

  return (
    <div className="App">
       {/* If the user is not null, logged in or user exist image can be uploaded. Else login to upload image*/}
       {/* optional chaining operator ?. validate that each reference in the chain is valid. --> nullish (null or undefined) check */}
      { user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ): (
        <h3>Sorry you need to login to upload</h3>
      )}      

      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""/>
              {/* <img className="app__secondHeaderImage" src="https://logodix.com/logo/1049778.png" alt=""/> */}
            </center>


            <Input
              placeholder="username"
              type="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}/>

            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}/>

            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}/>

            <Button type="submit" onClick={signUp}>
              Sign up
            </Button>
          </form>
        </div>
      </Modal>

      <Modal open={openSignIn} onClose={() => setOpenSignIn(false)}>
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img
                className="app__headerImage"
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                alt=""
              />
            </center>
            <Input
              placeholder="email"
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}/>
            <Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}/>

            <Button type="submit" onClick={signIn}>Sign in</Button>
          </form>
        </div>
      </Modal>

      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      {/* Logout/Sign up button from Material UI */}
      {/* If the user is not null, logged in or user exist logout is available.If user doesn't exist or null the Sign up is available*/}
      { user ? (
         <Button onClick={() => auth.signOut()}>Logout</Button>
      ): (
        <div className="app__loginContainer">
          <Button onClick={() => setOpenSignIn(true)}>Sign in</Button>
          <Button onClick={() => setOpen(true)}>Sign up</Button>
        </div>
      )}
      
      <h1> 📸 Instagram clone application with <a href={url}>React</a> 🚀</h1>
      {/* Posts: Send all posts in posts one at the time wit ucername, caption and imageUrl  */}
      { posts.map(({ id, post }) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
      ))}

      {/* Posts */}
      {/* <Post username="Hanna" caption="Yeah Baby way to go <3" imageUrl="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png" />
      <Post username="Simo" caption="This is so cool!" imageUrl="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png" /> */}
    </div>
  );
}

export default App;
