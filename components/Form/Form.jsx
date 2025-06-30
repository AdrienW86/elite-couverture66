"use client"

import React, {useState} from 'react'
import {useForm} from 'react-hook-form';
import styles from './form.module.css'

export default function Form() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSended, setIsSended] = useState(false);
 
  const { register, handleSubmit, reset, formState: { errors }, } = useForm()

  const onSubmit = async(data) => {
    if (!isLoading) {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
      });

      const result = await response.json();
      setIsLoading(false);

      if (!response.ok) {
          console.log("error");
          alert("le formulaire n'as pas pu être envoyé")
      } else {
          console.log("ok");
          reset();
          setIsSended(true);
          alert("le formulaire a été envoyé avec succès")
      }
  }
};

  return (
  <>   
    <section className={styles.form}>
        {isSended && (
            <div className={styles.confirm} > 
              <p className={styles.pConfirm} >
                Votre message a bien été envoyé. <br/>
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
        )}
        {!isSended && (
            <form onSubmit={handleSubmit(onSubmit)}>           
              <h3 className={styles.h3}> Demandez votre devis gratuit </h3>    
                <div className={styles.formContent}>
                  <input className={styles.input} placeholder='Nom' {...register('name', {required: true})} />
                    {errors.name && <span className={styles.error}> Ce champ est requis.</span>}          
                  <input className={styles.input} placeholder='Email' {...register('email', {required: true})} />
                    {errors.email && <span className={styles.error}> Ce champ est requis.</span>}          
                  <input className={styles.input} placeholder='Demande' {...register('subject', {required: true})} />
                    {errors.subject && <span className={styles.error}> Ce champ est requis.</span>}           
                  <textarea className={styles.textarea} placeholder='Message'  {...register('message', {required: true})} />
                    {errors.message && <span className={styles.error}> Ce champ est requis.</span>}     
                </div>
                <div>
                  <button className={styles.submit} type="submit">Envoyer</button>
                </div>     
            </form>
        )}
    </section>
  </>
  );
}