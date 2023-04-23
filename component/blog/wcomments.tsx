import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import {useForm, SubmitHandler} from "react-hook-form"
import styles from '../../styles/blog.module.css'

interface PostsId{
  _id:string
}

interface IFormInput{
  _id:string;
  _idC:string;
  name:string;
  email:string;
  comment: string;
}
const wcomments = ({_id}:PostsId) => {
  
  const [submitted, setSubmitted]= useState(false)
  const {register, handleSubmit, formState:{errors},}= useForm<IFormInput>();
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzkxvY-zzDDW8FFkbzTvpwhK-K0Xs7-xPo3fCc8yYjZwwTII5yo4yObvSsZ88yDgyFM/exec'
  const onSubmit: SubmitHandler<IFormInput> = (e) => {
    
    const form = document.forms['comment']
    
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
    <div className={styles.wComment}>
          {submitted?(
            <div className={styles.onsub}>
              <h2>Submitted Successfully!</h2>
              <p>Thank Your For Your Valuable Effort!</p>
            </div>
          ):
        (<form onSubmit={handleSubmit(onSubmit)} name="comment">
        <input  {...register("_id")} type="hidden" name='_id' value={_id} />
        <input  {...register("_idC")} type="hidden" name='_idC' value={`${uuidv4()}`}/>
       <div> 
         <input className={styles.name} {...register("name")} required placeholder=" " type="text" name="name" id="name" />
        <label className={styles.nameT} htmlFor="name">Name</label>
        </div>  
        <div> 
          <input className={styles.email} {...register("email")}required placeholder=" "  type="email" name="email" id="email" />
        <label className={styles.emailT} htmlFor="email">email</label>
        </div>    
        <div> 
          <textarea className={styles.comment} {...register("comment")} required placeholder=" " name="comment" id="comment" rows={10}/>
        <label className={styles.commentT} htmlFor="comment">Comment</label>
        </div>
        <input type="submit" name="submit" id="submit" value='comment'/>
      </form>)}
      </div>
  )
}

export default wcomments