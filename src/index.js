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
          <h1 class="govuk-fieldset__heading">Weekly Retro<span class="required-marker">*</span></h1>
        </legend>
        <hr></hr>
        
        <div class={`govuk-form-group govuk-form-group${(errors.day || errors.month || errors.year) ? "--error" : ""} lbh-form-group`}>
          <fieldset
            class="govuk-fieldset"
            role="group"
            aria-describedby="date-errors-error"
          >
            <legend class="govuk-fieldset__legend">Today's Date<span class="required-marker">*</span></legend>
            {(errors.day || errors.month || errors.year) && (
              <span id="date-errors-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> Please enter a valid date
              </span>
            )}
            <div class="govuk-date-input lbh-date-input" id="date-errors">
              <div class="govuk-date-input__item">
                <div class="govuk-form-group">
                  <label
                    class="govuk-label govuk-date-input__label"
                    for="date-errors-day"
                  >
                    Day
                  </label>
                  <input
                    class={`govuk-input govuk-date-input__input govuk-input--width-2 govuk-input${errors.day ? "--error" : ""}`}
                    id="date-errors-day"
                    name="day"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    aria-invalid={errors.day ? "true" : "false"}
                    {...register("day", {required: true, max: 31, min: 1})}
                  />
                </div>
              </div>
              <div class="govuk-date-input__item">
                <div class="govuk-form-group">
                  <label
                    class="govuk-label govuk-date-input__label"
                    for="date-errors-month"
                  >
                    Month
                  </label>
                  <input
                    class={`govuk-input govuk-date-input__input govuk-input--width-2 govuk-input${errors.month ? "--error" : ""}`}
                    id="date-errors-month"
                    name="month"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    aria-invalid={errors.month ? "true" : "false"}
                    {...register("month", {required: true, max: 12, min: 1})}
                  />
                </div>
              </div>
              <div class="govuk-date-input__item">
                <div class="govuk-form-group">
                  <label
                    class="govuk-label govuk-date-input__label"
                    for="date-errors-year"
                  >
                    Year
                  </label>
                  <input
                    class={`govuk-input govuk-date-input__input govuk-input--width-4 govuk-input${errors.year ? "--error" : ""}`}
                    id="date-errors-year"
                    name="year"
                    type="text"
                    pattern="[0-9]*"
                    inputmode="numeric"
                    aria-invalid={errors.year ? "true" : "false"}
                    {...register("year", {required: true})}
                  />
                </div>
              </div>
            </div>
          </fieldset>
        </div>

        <div class="govuk-form-group lbh-form-group">
          <label class="govuk-label lbh-label" for="learningSummary">
            Summary of learning over the week
          </label>
          <textarea
            class="govuk-textarea lbh-textarea"
            id="learningSummary"
            name="learningSummary"
            rows="5"
            aria-describedby="learningSummary-hint"
          ></textarea>
        </div>
        
        <div class={`govuk-form-group govuk-form-group${errors.enjoyed ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="enjoyed">
            What did you enjoy most about this week?<span class="required-marker">*</span>
          </label>
          {errors.enjoyed && (
              <span id="enjoyed-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> This field is required
              </span>
            )}
          <textarea
            class={`govuk-textarea govuk-textarea${errors.enjoyed ? "--error" : ""} lbh-textarea`}
            id="enjoyed"
            name="enjoyed"
            rows="5"
            aria-describedby="enjoyed-error"
            {...register("enjoyed", {required: true})}
          ></textarea>
        </div>

        <label class="govuk-label lbh-label" for="learned" >
          Taking into account everything you've done since your last reflection, have you learned...<span class="required-marker">*</span>
        </label>
        <select id="learned" class="govuk-select lbh-select" {...register("Taking into account everything you've done since your last reflection, have you learned...", { required: true })}>
          <option value="A lot">A lot</option>
          <option value=" A little"> A little</option>
        </select>

        <div class="govuk-form-group lbh-form-group">
          <label class="govuk-label lbh-label" for="context">
            Feel free to add some context here...
          </label>
          <textarea
            class="govuk-textarea lbh-textarea"
            id="context"
            name="context"
            rows="5"
            aria-describedby="context-hint"
          ></textarea>
        </div>

        <label class="govuk-label lbh-label" for="progress">
          How would you rate your progress this week?<span class="required-marker">*</span>
        </label>
        <input id="progress" class="govuk-input lbh-input" type="number" {...register("How would you rate your progress this week?", {required: true, max: 10, min: 1})} />
        <label class="govuk-label lbh-label" for="progress-reason">
          Weekly Progress Reason<span class="required-marker">*</span>
        </label>
        <textarea id="progress-reason" class="govuk-textarea lbh-textarea" {...register} />

        <label class="govuk-label lbh-label" for="mood">
          How are you feeling right now?<span class="required-marker">*</span>
        </label>
        <input id="mood" class="govuk-input lbh-input" type="number" {...register("How are you feeling right now?", {required: true, max: 10, min: 1})} />
        
        <label class="govuk-label lbh-label" for="mood-reason">
          What makes you feel this way?<span class="required-marker">*</span>
        </label>
        <textarea id="mood-reason" class="govuk-textarea lbh-textarea" {...register("What makes you feel this way?", {required: true})} />
        
        <label class="govuk-label lbh-label" for="improve">
          What do you think you could improve for next week?<span class="required-marker">*</span>
        </label>
        <input id="improve" class="govuk-input lbh-input" type="text" {...register("What do you think you could improve for next week?", {required: true})} />
        
        <label class="govuk-label lbh-label" for="star">
          Retro Diary Entry - STAR<span class="required-marker">*</span>
        </label>
        <span id="learningSummary-hint" class="govuk-hint lbh-hint">
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
