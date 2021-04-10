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
        
        <div class={`"govuk-form-group govuk-form-group${ errors.ni ? "--error" : "" } lbh-form-group"`}>
          <label class="govuk-label lbh-label" for={`"input${ errors.ni ? "-with-error-message" : "" }"`}>
            National Insurance number
          </label>
          <span id={`"input${ errors.ni ? "-with-error-message" : "" }-hint"`} class="govuk-hint lbh-hint">
            It’s on your National Insurance card, benefit letter, payslip or P60. For
            example, ‘QQ 12 34 56 C’.
          </span>
          {errors.ni && (
          <span id="input-with-error-message-error" class="govuk-error-message">
            <span class="govuk-visually-hidden">Error:</span> Please enter a valid NI Number
          </span>
          )}          
          <input
            class={`"govuk-input lbh-input govuk-input${ errors.ni ? "--error" : "" }"`}
            id={`"input${ errors.ni ? "-with-error-message" : "" }"`}
            name="test-name-3"
            type="text"
            aria-describedby={`"input-${ errors.ni ? "-with-error-message" : "" }-hint input${ errors.ni ? "-with-error-message" : "" }-error"`}
            {...register("ni", {required: true, maxLength: 9, pattern: /^\s*[a-zA-Z]{2}(?:\s*\d\s*){6}[a-zA-Z]\s*$/i})}
          />
        </div>
        
        <input class="govuk-button lbh-button" type="submit" />
    </form>
  );

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);