import React from 'react';
import "../pages/Testimonial.css"

function Testimonial() {
  return (
    <div>
        <html>
            <head> 
            <link rel = "stylesheet" type="text/css" href = "../pages/Testimonial.css" />
            
</head>

<h1> Testimonial Alumni Corner </h1>

<div class ="YTest"> 
<iframe width="560" height="315" src="https://www.youtube.com/embed/579X4gfqjDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<br/>
<br/>


<div className="AllTests">

<figure class="snip1192">
  <blockquote> Per Scholas has been amazing. Upon graduation, I recieved some many new jobs. The professional development also helped as well </blockquote>
  <div class="author">
    <img src="https://media.licdn.com/dms/image/C4E03AQGnMyinp6WMDQ/profile-displayphoto-shrink_800_800/0/1607118196704?e=1672272000&v=beta&t=jU5_uaUyxFWrdrM_YP63kOXKN3h_7eqnNCdPdYT-qBE" alt="sq-sample1"/>
    <h5>Daren Porter <span> Software Engineer </span></h5>
  </div>

</figure>
<figure class="snip1192 hover">
  <blockquote> As a Front End Developer, I can work with multiple people and projects to ensure the vision comes to pass </blockquote>
  <div class="author">
    <img src="https://media.licdn.com/dms/image/C5603AQGtnrIyZch9tw/profile-displayphoto-shrink_800_800/0/1663012935002?e=1672272000&v=beta&t=lmhIt7XHEYNZYKGBHAB65T8ClypvpRiQrUdi17uOlho" alt="sq-sample24"/>
    <h5> Terrell Owens <span> Front End Developer </span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote>As a Front End Developer, I can work with multiple people and projects to ensure the vision comes to pass.</blockquote>
  <div class="author">
    <img src="https://media.licdn.com/dms/image/D4E03AQGAbx1ZAu5bRw/profile-displayphoto-shrink_800_800/0/1664652865317?e=1672272000&v=beta&t=LZfJtS75Rx_oRVv-xMZ6NQWL6AORIuR3qOgeAnapsDY" alt="sq-sample29"/>
    <h5>Cam Duso<span> HTML & CSS Designer</span></h5>
  </div>
</figure>

<figure class="snip1192">
  <blockquote> As a media professional, understanding SE is crucial to the future of media</blockquote>
  <div class="author">
    <img src="https://media.licdn.com/dms/image/C5603AQEI9fVCsar5Rw/profile-displayphoto-shrink_800_800/0/1653174516227?e=1672272000&v=beta&t=AzwSs2YAD9taErIE9H_LarO1AsfgdjnhBq4TO4Oqa7A" alt="sq-sample29"/>
    <h5>Kamara Daughtry<span> Software Engineer and CSS Designer</span></h5>
  </div>
</figure>

</div>

<br/>

<img class = "Arrow" width="100" height="200" src="https://media1.giphy.com/media/VBveiwJDEjt254XhYp/giphy.gif?cid=ecf05e47cwyo1f0psa393bhp3lfyehshi5p6x6uvp5wyrmst&rid=giphy.gif&ct=s"></img>

<form className="SubmissionForm" action="/SubmitNow" method="post">


<div className = "SuccessStories"> 

<h2> We Want to Hear From You! </h2>

<div>
     
     <label> Name </label>
     <input className="InputStyle" type = "text" name = "name"/>
     
     <br/>

     <label> Graduation Year </label>
     <input type = "text" name = "GradYear"/>
     <br/>

     <label> Division </label>
     <input type = "text" name = "Division" />
     <br/>

     <label> City, State </label>
     <input type = "text" name = "CityState" />
     <br/>

     <label> How did Per Scholas help you? </label>
     <input type = "text" name = "SuccessStory"/>
     <br/>
     
     <label> Did your salary increase? </label>
     <input type = "text" name = "SalaryIncrease"/>
     <br/>

    <div id="display-image">
       <label> Upload Professinal Photo
     <input type="file" id="image-input" name = "UploadPhoto" accept="image/jpeg, image/png, image/jpg"/>

     </label>

     <input type="submit" value="Submit"/>


</div>
     </div>
     </div>

     </form>

        </html>
    )
      
    </div>
  )}

export default Testimonial