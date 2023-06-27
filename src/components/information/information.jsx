import React from "react";
import style from "./style.module.css";

export const Information = () => {
   
    return (
      <div className={style.container}>
        <h4 className={`${style.title} ${style.title1}`}>Information</h4>

        <form action="" autocomplete="off" enctype="multipart/form-data" method="post" className={style.taks}>
          <input className={`${style.inputplaceholder} ${style.inputMargin}`} type="text" name="taskname" id="task name"  placeholder="Task Name"/>
          <input className={style.inputplaceholder}  type="text" name="taskdescription" id="taskdescription" placeholder="Task Descripción"/>       
        </form>
        
        <div>
            <h4 className={`${style.title} ${style.title2}`}>Phases</h4>
            <span className={style.subtitulo}>Select Phases you want to attach to the task</span>

            <div className="phases_camps">
                <form action="" autocomplete="off" enctype="multipart/form-data" method="post">
                    <div className={style.checkboxes}>
                    <input className={style.checklist} type="checkbox" name="Ceremonies" id="Ceremonies" />
                    <label className={style.labelCheck}>Ceremonies</label>
                    </div>
                    <div className={style.checkboxes}>
                    <input className={style.checklist} type="checkbox" name="Discovery" id="Discovery" />
                    <label className={style.labelCheck}>Discovery</label>
                    </div>
                    <div className={style.checkboxes}>
                    <input className={style.checklist} type="checkbox" name="Planning" id="Planning" />
                    <label className={style.labelCheck}>Planning</label>
                    </div>
                    <div className={style.checkboxes}>
                    <input className={style.checklist} type="checkbox" name="Development" id="Development" />
                    <label className={style.labelCheck}>Development</label>
                    </div>
                    <div className={style.checkboxes}>
                    <input className={style.checklist} type="checkbox" name="Deployement" id="Deployement" />
                    <label className={style.labelCheck}>Deployement</label>
                    </div>
                    <div className={style.checkboxes}>
                    <input className={style.checklist} type="checkbox" name="Training" id="Training" />
                    <label className={style.labelCheck}>Training</label>
                    </div>
                </form>
            </div>
        </div>
      </div>

      
    );
  };
  