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
        <span id="red-hint" class="govuk-hint lbh-hint">*Required</span>
        <div class={`govuk-form-group govuk-form-group${(errors.day || errors.month || errors.year) ? "--error" : ""} lbh-form-group`}>
          <fieldset
            class="govuk-fieldset"
            role="group"
            aria-describedby={`date${(errors.day || errors.month || errors.year) ? "-errors-error" : ""}`}
          >
            <legend class="govuk-fieldset__legend">Today's Date<span class="required-marker">*</span></legend>
            {(errors.day || errors.month || errors.year) && (
              <span id="date-errors-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> Please enter a valid date
              </span>
            )}
            <div class="govuk-date-input lbh-date-input" id={`date-${errors.day ? "-errors" : ""}`}>
              <div class="govuk-date-input__item">
                <div class="govuk-form-group">
                  <label
                    class="govuk-label govuk-date-input__label"
                    for={`date-${errors.day ? "-errors" : ""}-day`}
                  >
                    Day
                  </label>
                  <input
                    class={`govuk-input govuk-date-input__input govuk-input--width-2 govuk-input${errors.day ? "--error" : ""}`}
                    id={`date-${errors.day ? "-errors" : ""}-day`}
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
                    for={`date-${errors.month ? "-errors" : ""}-month`}
                  >
                    Month
                  </label>
                  <input
                    class={`govuk-input govuk-date-input__input govuk-input--width-2 govuk-input${errors.month ? "--error" : ""}`}
                    id={`date-${errors.month ? "-errors" : ""}-month`}
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
                    for={`date-${errors.year ? "-errors" : ""}-year`}
                  >
                    Year
                  </label>
                  <input
                    class={`govuk-input govuk-date-input__input govuk-input--width-4 govuk-input${errors.year ? "--error" : ""}`}
                    id={`date-${errors.year ? "-errors" : ""}-year`}
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
            aria-describedby={`enjoyed-${errors.enjoyed ? "-error" : ""}`}
            {...register("enjoyed", {required: true})}
          ></textarea>
        </div>

        <div class={`govuk-form-group govuk-form-group${errors.learned ? "--error" : ""} lbh-form-group`}>
          <fieldset class="govuk-fieldset" aria-describedby={`learned-${errors.learned ? "-error" : ""}`}>
            <legend class="govuk-fieldset__legend">
              Taking into account everything you've done since your last reflection, have you learned...<span class="required-marker">*</span>
            </legend>
            {errors.learned && (
              <span id="learned-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> This field is required
              </span>
            )}
            <div class="govuk-radios lbh-radios">
              <div class="govuk-radios__item">
                <input
                  class="govuk-radios__input"
                  id="learned"
                  name="learned"
                  type="radio"
                  value="A Lot"
                  {...register("learned", { required: true })}
                />
                <label class="govuk-label govuk-radios__label" for="learned">
                  A Lot
                </label>
              </div>
              <div class="govuk-radios__item">
                <input
                  class="govuk-radios__input"
                  id="learned-2"
                  name="learned"
                  type="radio"
                  value="A Little"
                  {...register("learned", { required: true })}
                />
                <label class="govuk-label govuk-radios__label" for="learned-2">
                  A Little
                </label>
              </div>
            </div>
          </fieldset>
        </div>

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

        <div class={`govuk-form-group govuk-form-group${errors.progress ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="progress">
            How would you rate your progress this week?<span class="required-marker">*</span>
          </label>
          {errors.progress && (
            <span id="input-with-error-message-error" class="govuk-error-message">
              <span class="govuk-visually-hidden">Error:</span> Please enter a number between 1 and 10
            </span>
          )}        
          <input
            class={`govuk-input lbh-input govuk-input${errors.progress ? "--error" : ""}`}
            id="progress"
            name="progress"
            type="text"
            aria-describedby={`progress-${errors.progress ? "-error" : ""}`}
            {...register("progress", {required: true, max: 10, min: 1})}
          />
        </div>
        
        <div class={`govuk-form-group govuk-form-group${errors.progressReason ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="progressReason">
            Weekly Progress Reason<span class="required-marker">*</span>
          </label>
          {errors.progressReason && (
              <span id="progressReason-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> This field is required
              </span>
            )}
          <textarea
            class={`govuk-textarea govuk-textarea${errors.progressReason ? "--error" : ""} lbh-textarea`}
            id="progressReason"
            name="progressReason"
            rows="5"
            aria-describedby={`progressReason-${errors.progressReason ? "-error" : ""}`}
            {...register("progressReason", {required: true})}
          ></textarea>
        </div>

        <div class={`govuk-form-group govuk-form-group${errors.mood ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="mood">
            How are you feeling right now?<span class="required-marker">*</span>
          </label>
          {errors.mood && (
            <span id="mood-error" class="govuk-error-message">
              <span class="govuk-visually-hidden">Error:</span> Please enter a number between 1 and 10
            </span>
          )}
          <input
            class={`govuk-input lbh-input govuk-input${errors.mood ? "--error" : ""}`}
            id="mood"
            name="mood"
            type="number"
            aria-describedby={`mood-${errors.mood ? "-error" : ""}`}
            {...register("mood", {required: true, max: 10, min: 1})}
          />
        </div>
        
        <div class={`govuk-form-group govuk-form-group${errors.moodReason ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="moodReason">
          What makes you feel this way?<span class="required-marker">*</span>
          </label>
          {errors.moodReason && (
              <span id="moodReason-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> This field is required
              </span>
            )}
          <textarea
            class={`govuk-textarea govuk-textarea${errors.moodReason ? "--error" : ""} lbh-textarea`}
            id="moodReason"
            name="moodReason"
            rows="5"
            aria-describedby={`moodReason-${errors.moodReason ? "-error" : ""}`}
            {...register("moodReason", {required: true})}
          ></textarea>
        </div>

        <div class={`govuk-form-group govuk-form-group${errors.improve ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="improve">
            What do you think you could improve for next week?<span class="required-marker">*</span>
          </label>
          {errors.improve && (
            <span id="improve-error" class="govuk-error-message">
              <span class="govuk-visually-hidden">Error:</span> This field is required
            </span>
          )}
          <input
            class={`govuk-input lbh-input govuk-input${errors.improve ? "--error" : ""}`}
            id="improve"
            name="improve"
            type="text"
            aria-describedby={`improve-${errors.improve ? "-error" : ""}`}
            {...register("improve", {required: true})}
          />
        </div>
        
        <div class={`govuk-form-group govuk-form-group${errors.star ? "--error" : ""} lbh-form-group`}>
          <label class="govuk-label lbh-label" for="star">
            Retro Diary Entry - STAR<span class="required-marker">*</span>
          </label>
          <span id="more-detail-hint" class="govuk-hint lbh-hint">
            * Situation – explain the situation put it into context<br/>
            * Task – explain about the task you were working on<br/>
            * Action – what was your action, how did you contribute<br/>
            * Result – what was the result, it may be an ongoing task but reflect on the outcomes so far
          </span>
          {errors.star && (
              <span id="star-error" class="govuk-error-message">
                <span class="govuk-visually-hidden">Error:</span> This field is required
              </span>
            )}
          <textarea
            class={`govuk-textarea govuk-textarea${errors.star ? "--error" : ""} lbh-textarea`}
            id="star"
            name="star"
            rows="5"
            aria-describedby={`star-${errors.star ? "-error" : ""}`}
            {...register("star", {required: true})}
          ></textarea>
        </div>
        
        <input class="govuk-button lbh-button" type="submit" />
      </fieldset>
    </form>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
