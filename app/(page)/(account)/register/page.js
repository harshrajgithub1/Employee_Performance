

"use client"
import Head from 'next/head';
import { useRouter } from 'next/navigation';


export default function Register() {
  const router = useRouter();
  const logIn = () => {
     router.push("/login");
  }

  return (
    <>
      <Head>
        <title>Register</title>
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
                <input className="email" type="password" placeholder="re-type password" id="password" />
              </div>
              <div className="btn">
                <button className="btn-primary" type="submit" >Sign In</button>
              </div>
              <div className="signup">
                <p>Already have an account?</p>
               
                <button type="button" onClick={logIn}>LogIn</button>
              </div>
            
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
