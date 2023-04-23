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
    <>
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

      
    </>
  );
};

export default Landing;
