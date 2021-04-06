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
      <fieldset class="govuk-fieldset lbh-fieldset">
        <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
          <h1 class="govuk-fieldset__heading">Weekly Retro</h1>
        </legend>
        <hr></hr>
        <label class="govuk-label lbh-label" for="summary">
          Today's Date
        </label>
        <input type="date" placeholder="Today's date" {...register("Date", {required: true})} />   
        <label class="govuk-label lbh-label" for="summary">
          Summary of learning over the week
        </label>
        <textarea id="summary" class="govuk-textarea lbh-textarea" {...register("Summary of learning over the week")} />
        <label class="govuk-label lbh-label" for="enjoyed">
          What did you enjoy most about this week?
        </label>
        <textarea id="enjoyed" class="govuk-textarea lbh-textarea" {...register("What did you enjoy most about this week?", {required: true})} />
        <label class="govuk-label lbh-label" for="learned">
          Taking into account everything you've done since your last reflection, have you learned...
        </label>
        <select id="learned" class="govuk-select lbh-select" {...register("Taking into account everything you've done since your last reflection, have you learned...", { required: true })}>
          <option value="A lot">A lot</option>
          <option value=" A little"> A little</option>
        </select>
        <label class="govuk-label lbh-label" for="context">
          Feel free to add some context here...
        </label>
        <textarea id="context" class="govuk-textarea lbh-textarea" {...register("Feel free to add some context here...")} />
        <label class="govuk-label lbh-label" for="progress">
          How would you rate your progress this week?
        </label>
        <input id="progress" class="govuk-input lbh-input" type="number" placeholder="How would you rate your progress this week?" {...register("How would you rate your progress this week?", {required: true, max: 10, min: 1})} />
        <label class="govuk-label lbh-label" for="progress-reason">
          Weekly Progress Reason
        </label>
        <textarea id="progress-reason" class="govuk-textarea lbh-textarea" {...register} />
        <label class="govuk-label lbh-label" for="mood">
          How are you feeling right now?
        </label>
        <input id="mood" class="govuk-input lbh-input" type="number" placeholder="How are you feeling right now?" {...register("How are you feeling right now?", {required: true, max: 10, min: 1})} />
        <label class="govuk-label lbh-label" for="mood-reason">
          What makes you feel this way? 
        </label>
        <textarea id="mood-reason" class="govuk-textarea lbh-textarea" {...register("What makes you feel this way?", {required: true})} />
        <label class="govuk-label lbh-label" for="improve">
          What do you think you could improve for next week?
        </label>
        <input id="improve" class="govuk-input lbh-input" type="text" placeholder="What do you think you could improve for next week?" {...register("What do you think you could improve for next week?", {required: true})} />
        <label class="govuk-label lbh-label" for="star">
          Retro Diary Entry - STAR
        </label>
        <span id="more-detail-hint" class="govuk-hint lbh-hint">
          * Situation – explain the situation put it into context 
          * Task – explain about the task you were working on 
          * Action – what was your action, how did you contribute 
          * Result – what was the result, it may be an ongoing task but reflect on the outcomes so far
        </span>
        <textarea id="star" class="govuk-textarea lbh-textarea" {...register("Retro Diary Entry - STAR", {required: true})} />
        <input class="govuk-button lbh-button" type="submit" />
      </fieldset>
    </form>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
