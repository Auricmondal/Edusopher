import React, { useEffect } from 'react'
import styles from '../styles/blog.module.css'


const comments = (props) => {
  const _id= props._id;
// console.log(getComments(_id).then((a)))

useEffect(() => {
  getComments(_id);

  
}, [])



  return (
    <div>
    <main className={styles.sComments} id='ComCont'>
    <h3>Comments</h3>
    <hr />
    
      

  </main>
  </div>
  )
}

export default comments


const getComments= (_idP)=>{
    let scriptURL='https://script.google.com/macros/s/AKfycbzkxvY-zzDDW8FFkbzTvpwhK-K0Xs7-xPo3fCc8yYjZwwTII5yo4yObvSsZ88yDgyFM/exec';
    let Data=[];
    try{
        fetch(scriptURL)
        .then((response) => response.json())
        .then((comments) => {
          comments.map(element => {
            let division,para,span1,span2,span3,hr;
            if(_idP==element._id){
              let cont= document.getElementById('ComCont');
              division=document.createElement("div");
              division.setAttribute('key',element._idC);
              // division.textContent=element.name + ':' + element.comment ;
              para=document.createElement("p");
              span1=document.createElement("span");
              span2=document.createElement("span");
              span3=document.createElement("span");
              hr=document.createElement("hr");
              span1.textContent=element.name;
              span2.textContent=element.email;
              span3.textContent=element.comment;
              para.appendChild(span1)
              para.appendChild(span2)
              para.appendChild(span3)
              division.appendChild(para)
              division.appendChild(hr)
              cont.appendChild(division)
            }
          });
           
        });
    
    }
    catch{
        console.log('404: Some Error Has Occured');
        
      }
    
      
      
     
       
       // division=document.createElement("div");
       // division.setAttribute('key',elem._idC);
       // para=document.createElement("p");
       // span=document.createElement("span");
       // span.value=elem.name;
       // para.appendChild(span)
       // division.appendChild(para)
       // cont.appendChild(division);
      // }
    
}

