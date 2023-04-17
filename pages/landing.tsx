import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/Landing.module.css";
import { useForm, SubmitHandler } from "react-hook-form";


interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

const Landing = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (e) => {
    
    const scriptURL = 'https://script.google.com/macros/s/AKfycby2HOBILwbZGiYjOz785hqPXzV7GG4STBE8mKllFcJoOOBDVilcAoPWyEwTbYjE4NKj/exec'
  const form = document.forms['contactUS']

  
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
   .then(() => {
       
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
    
  };
  return (
    <div className={styles.landing}>
      {/* The elements of Hero Section is here */}
      <header className={styles.hero}>
        <div className={styles.container}>
          {/* Left Part of the Hero section goes here */}

          <div className={styles.left}>
            <p>Recreating The Habit of Reading </p>
            <h1>
              We write to Make <br />
              <span>
                <b>You shine</b>
              </span>
            </h1>
            <p>
              Cause &#34;A reader lives a thousand lives before he dies . . . The man who never reads lives only one.&#34;
            </p>
            <div className={styles.content}>
              <Link href="/blogs">
                <a>Let&apos;s Gets Started !</a>
              </Link>
            </div>
          </div>
          {/* Right Part of the Hero section goes here */}

          <div className={styles.right}>
            <img src="/Herophoto1.png" alt="This is a photo" />
            <img src="/Herophoto2.png" alt="This is a photo" />

            {/* The table for WE GOT YOU COVERD GOES HERE */}
            <div className={styles.list}>
              <h3 className={styles.listitems}>We got you covered</h3>
              <hr />
              {/* <p>
                <embed src="/tick.svg" type="" />
                News
              </p> */}
              <p>
                <embed src="/tick.svg" type="" />
                Philosophy{" "}
              </p>
              <p>
                <embed src="/tick.svg" type="" />
                Government Schemes{" "}
              </p>
              {/* <p>
                <embed src="/tick.svg" type="" />
                Finance/ Economy
              </p> */}
              <p>
                <embed src="/tick.svg" type="" />
                English
              </p>
              {/* <p>
                <embed src="/tick.svg" type="" />
                Geography
              </p> */}
              {/* <p>
                <embed src="/tick.svg" type="" />
                History
              </p> */}
              <p>
                <embed src="/tick.svg" type="" />
                Astrology / Mythology
              </p>
              <p>
                <embed src="/tick.svg" type="" />
                More Coming Soon
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* The elements of the WHY CHOOSE US section */}
      <div className={styles.section1}>
        <div className={styles.sec1cont}>
          <h2>Why us?</h2>
          <hr />
          <div className={styles.perkscont}>
            <div className={styles.perks}>
              <embed className={styles.content} src="/language.svg" type="" />
              <h4>Bilingual</h4>
              <hr />
              <p>
              On this website, you will benefit from two languages which are Bengali and English. This will help you choose your own language to fully understand the topic.
              </p>
            </div>
            <div className={styles.perks}>
              <embed className={styles.content} src="/book.svg" type="" />
              <h4>Easy to read</h4>
              <hr />
              <p>
              On this website, all articles are easily readable and understandable. It helps you able to access and understand information that affects your daily life
              </p>
            </div>
            <div className={styles.perks}>
              <embed className={styles.content} src="/touch.svg" type="" />
              <h4>Clear concept</h4>
              <hr />
              <p>
              Here you will find ease of reading with full of depth knowledge, legibility, clarity of concept, its familiarity, and access to information. All these things expand your knowledge and make you grow higher.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* The elements of the CONTACT US section(Landing Page) */}
      <div id="contact" className={styles.section2}>
        <h2>Contact</h2>
        <hr />
        <div className={styles.container}>
          <div className={styles.leftsec2}>
            {submitted ? (
              <div className={styles.onsub}>
                <h2>Submitted Successfully!</h2>
                <p>Thanks For Your Efforts!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} name='contactUS'>
                <div id="name">
                  <input
                    required
                    {...register("name")}
                    className={styles.name}
                    placeholder=" "
                    type="text"
                    name="name"
                    id="name"
                  />
                  <label className={styles.nameT} htmlFor="name">
                    Name
                  </label>
                </div>
                <div id="email">
                  <input
                    required
                    {...register("email")}
                    className={styles.email}
                    placeholder=" "
                    type="email"
                    name="email"
                    id="email"
                  />
                  <label className={styles.emailT} htmlFor="email">
                    email
                  </label>
                </div>
                <div id="comment">
                  <textarea
                    required
                    {...register("comment")}
                    className={styles.comment}
                    placeholder=" "
                    name="comment"
                    id="comment"
                    cols={30}
                    rows={10}
                  />
                  <label className={styles.commentT} htmlFor="comment">
                    Comment
                  </label>
                </div>
                <input type="submit" name="submit" id="submit" />
              </form>
            )}
          </div>
          <div className={styles.rightsec2}>
            <img src="/aboutanim.svg" alt="this is a photo" />
          </div>
        </div>
      </div>

      {/* The elements of the ABOUT section (Landing Page) */}
      <div id="about" className={styles.section3}>
        <div className={styles.container}>
          <h2>About</h2>
          <hr />
          <div className={styles.subcont}>
            <div className={styles.leftsec3}>
              <img src="/avatar.svg" className={styles.avatar} />
              <div className={styles.icons}>
                <a
                  href="https://instagram.com/edusopher?igshid=ZDdkNTZiNTM="
                  target="_blank" rel="noreferrer"
                >
                  <img src="/insta.svg" className={styles.insta} />
                </a>
                <p>|</p>
                <a
                  href="https://www.facebook.com/edusopher?mibextid=ZbWKwL"
                  target="_blank" rel="noreferrer"
                >
                  <img src="/fb.svg" className={styles.fb} />
                </a>
                <p>|</p>
                <a
                  href="mailto:edusopher@gmail.com"
                  target="_blank" rel="noreferrer"
                >
                  <img src="/email.svg" className={styles.email} />
                </a>
              </div>
            </div>
            <div className={styles.rightsec3}>
              <div>
               <p>Welcome to Edusopher Family!!!</p> <br />
               <p> Edusopher is an educational channel that introduce the
                confluence of knowledge and wisdom.We believe in sharing
                knowledge and our motto is &quot;SHARING KNOWLEDGE TO GAIN
                PROSPERITY&quot;. </p>
                This channel serving you a full plate of knowledgeable and
                interesting topics,summery of books and many more, what you want
                to know.If you want to dive into the sea of knowledge and become
                an important member of our Edusopher family.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
