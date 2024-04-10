
"use client"

import Head from 'next/head';
import { useRouter } from 'next/navigation'
//import User from "../../../models/User";
export default  function Login() {
    const router = useRouter();

    const signIn = () =>{
      router.push("/Admin");
   }

  const signUp = () =>{
     router.push("/register");
  }

 
   //const user =  User.find({});

   //const user = await getCollection('users');
   //console.log(user);
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <header className="showcase">
        <div className="showcase-content">
        <div className="logo-details">
          <img src="/assets/img/Infoiconlogo-black.png" alt="Logo" className="logo_image" />
        </div>

          <div className="formm">
            <form>
            
              <div className="info">
                <input className="email" type="email" placeholder="Email" id="email" /> <br />
                <input className="email" type="password" placeholder="Password" id="password" />
              </div>
              <div className="btn">
                <button type="button" className="btn-primary" onClick={signIn}>Sign In</button>
              </div>
           
              <div className="help">
                <div>
                  <input value="true" type="checkbox" /><label>Remember me</label>
                </div>
              </div>
              <div className="signup">
                <p>New to User ?</p>
               
                <button type="button" onClick={signUp}>Sign up now</button>
              </div>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
