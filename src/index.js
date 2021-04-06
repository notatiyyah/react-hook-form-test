import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from 'react-hook-form';
import "./styles.scss";

export default function App() {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="datetime" placeholder="Date" {...register("Date", {required: true})} />
      <textarea {...register} />
      <textarea {...register("What did you enjoy most about this week?", {required: true})} />
      <select {...register("Taking into account everything you've done since your last reflection, have you learned...", { required: true })}>
        <option value="A lot">A lot</option>
        <option value=" A little"> A little</option>
      </select>
      <textarea {...register} />
      <input type="number" placeholder="How would you rate your progress this week?" {...register("How would you rate your progress this week?", {required: true, max: 10, min: 1})} />
      <textarea {...register} />
      <input type="number" placeholder="How are you feeling right now?" {...register("How are you feeling right now?", {required: true, max: 10, min: 1})} />
      <textarea {...register("What makes you feel this way?", {required: true})} />
      <input type="text" placeholder="What do you think you could improve for next week?" {...register("What do you think you could improve for next week?", {required: true})} />
      <textarea {...register("Retro Diary Entry - STAR", {required: true})} />
      <input type="submit" />
    </form>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
