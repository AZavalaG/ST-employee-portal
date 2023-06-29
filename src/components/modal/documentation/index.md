# Modal Component Documentation

## How to use component
-------

#### To fire modal component you will have to import component using the following instruction and make sure you import useState Hook too. Like this:

    import React, { useState } from 'react';
    import ModalWindow from "./components/modal";

 Then set configure Hook adding the following to where you want to add the Modal JSX code (make sure you declare a constant):

    const [show, setShow] = useState(false);

 Then, to fire the event create a button to call Hook function in charge to update show status. Make sure to add tag
 for ModalWindow component.

  __Make sure to add this code with at least these shown properties in order to work as intended__
 
    <button onClick={()=>setShow(true)}>Click Me</button>
    <ModalWindow onClose={() => setShow(false)} show={show}>
      // Add content here that will appear on the Modal Window you wish to create
    </ModalWindow>

 The ModalWindow component accepts some props that will allow you to customize the component easily.

| Name of property | Description                                                         |  property |                                                                  Values                                                                 |
|:----------------:|---------------------------------------------------------------------|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------:|
| title            | Title for the  Modal Window                                                | title     | Any                                                                                                                                     |
| Modal Type      | This property allows you to choose between 2 types of Modal Window. | modalType | 1. Confirm: Will generate 2 buttons. Accept and Cancel  2. Informative (Default): Will generate a button to accept or close the window  |


 Here is an example of how you can use this component.
   ```javascript
      import React, { useState } from 'react';
      import ModalWindow from "./components/modal";

      const App = () => {
      const [show, setShow] = useState(false);

      return ( 
         <>
         <button onClick={()=>setShow(true)}>Click Me</button>
         <ModalWindow onClose={() => setShow(false)} show={show} title="Titulo Ventana" modalType="confirm">
            <div id="after_submit"></div>
            <form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
            <div class="row">
               <label class="required" for="name">Your name:</label><br />
               <input id="name" class="input" name="name" type="text" value="" size="30" /><br />
               <span id="name_validation" class="error_message"></span>
            </div>
            <div class="row">
               <label class="required" for="email">Your email:</label><br />
               <input id="email" class="input" name="email" type="text" value="" size="30" /><br />
               <span id="email_validation" class="error_message"></span>
            </div>
            <div class="row">
               <label class="required" for="message">Your message:</label><br />
               <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
               <span id="message_validation" class="error_message"></span>
            </div>
            <div class="row">
               <label class="required" for="message">Your message:</label><br />
               <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
               <span id="message_validation" class="error_message"></span>
            </div>
            <div class="row">
               <label class="required" for="message">Your message:</label><br />
               <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
               <span id="message_validation" class="error_message"></span>
            </div>
            <div class="row">
               <label class="required" for="message">Your message:</label><br />
               <textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
               <span id="message_validation" class="error_message"></span>
            </div>
            </form>
         </ModalWindow>
         <h1>Employee Portal!</h1></>
         );
      }
      
      export default App;
      