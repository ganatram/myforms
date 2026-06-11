//controlled forms - please dont use state to collect and store data from form controls -- performance bottleleak
//un-controlled forms - dont store form control data in state - 1.FormData Interface (Native feature)
// routing -> thank you page.
// Form Validation:

// Native Validation - required,minlength,maxlength,pattern (constraint-validation api)
//    -- semi support - yes
//    -- cross experience can vary - yes
//    -- customization - no

// 3rd party - react hook forms : Validation + Acquire Data

import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';

export function ExampleComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  //  errors {
  //     reason:{
  //         message:'you must enter a reason',
  //         type:required
  //     }

  //notes:{
  //         message:'you must enter a reason',
  //         type:required
  //     }
  //   }

  /*   function onSubmit(e:FormEvent){
    e.preventDefault; 
    const formData = new FormData(e.currentTarget)
    
    const Data = {
        p1 : formData.get('reason'); 
        p2 : formData.get('notes'); 

    }

    console.log(Data); 



  } */

  function callbackFunction(data: FormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(callbackFunction())}>
      <input
        {...register('reason', { required: 'You must enter a reason' })}
        // name="reason"
        // ref="reason"
        // onChange={changeFunc}
        // onBlur={blurFunc}
      />
      <input
        {...register('notes', { required: 'You must enter a notes' })}
        // name="reason"
        // ref="reason"
        // onChange={changeFunc}
        // onBlur={blurFunc}
      />
      <div>{errors.reason.message}</div>
      <button type="submit" disabled={isSubmitting}>
        click here
      </button>
    </form>
  );
}
