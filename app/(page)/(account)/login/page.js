
"use client"
import Head from 'next/head';
//import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter();

    const signIn = () =>{
      router.push("/admin");
   }

  const signUp = () =>{
     router.push("/register");
  }
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
        <link rel="stylesheet" href="/index.css" />
      </Head>
      <header className="showcase">
        <div className="showcase-content">
        <h1>INFOICON TECHNOLOGY PVT LTD</h1>
          <div className="showcase-top">
            <h1>LOGIN</h1>
          </div>
          <div className="formm">
            <form>
              <h2>Welcome user!</h2>
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
