//adding content
let my = [
    `<div class="movie2 common" data-movieid="1"><div class="img1"><img src="photos/image1.jpg"><h3 class="bottom-center">Dangerous</h3></div>
       <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 30 minutes</p></h4>
        <div href="dj action movies/dangerous.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.24GB 1080p .mp4</p></div>
       </div>
  </div>`,
         
      `<div  class="movie2 common" data-movieid="2"><div class="img1"><img src="photos/image2.jpg"><h3 class="bottom-center">Blind War</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 43 minutes</p></h4>
        <div
        href="dj action movies/blind war.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">0.99GB 1080p .mpg</p></div>
       </div>
    </div>`,

      `<div  class="movie2 common" data-movieid="3"><div class="img1"><img src="photos/image3.jpg"><h3 class="bottom-center">Black panther 2 </h3></div>
        <div class="clone"><h4 class="class">GENRE :<p class="genre">Sci-fi</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">2hr 41 minutes</p></h4>
        <div
        href="dj action movies/black panther 2a.MP4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">446MB 1080p .mp4</p></div>
        <div
        href="dj action movies/black panther 2b.MP4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">466MB 1080p .mp4</p></div>
       </div>
    </div>`,

      `<div class="movie2 common" data-movieid="4"><div class="img1"><img src="photos/image4.jpg"><h3 class="bottom-center">Chaos Walking</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Adventure</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 40 minutes</p></h4>
            <div
            href="dj action movies/chaos walking.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">0.97GB 1080p .MPG</p></div>
          </div>
    </div>`,

      `<div  class="movie2 common" data-movieid="5"><div class="img1"><img src="photos/image5.jpg"><h3 class="bottom-center">Carter</h3></div>
            <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">2hr 9 minutes</p></h4>
            <div
            href="dj action movies/carter 2022.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">616MB 1080p .MP4</p></div>
          </div>      
      </div>`,

      `<div  class="movie2 common" data-movieid="6"><div class="img1"><img src="photos/image6.jpg"><h3 class="bottom-center">Blood</h3></div>
            <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 44 minutes</p></h4>
            <div
            href="dj action movies/blood [2023].mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">469MB 1080p .MP4</p></div>
          </div>    
       </div>`,

      `<div  class="movie2 common" data-movieid="7"><div class="img1"><img src="photos/image7.jpg"><h3 class="bottom-center">wrong turn 4-6</h3></div>
            <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2014</p></h4><h4 class="class">Run Time:<p class="time">1hr 44 minutes</p></h4>
            <div
            href="dj action movies/wrong turn 4 over 18yrs.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">919MB 1080p .MPG</p></div>
            <div
            href="dj action movies/wrong turn 5 over 18yrs.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">884MB 1080p .MPG</p></div>
            <div
            href="dj action movies/wrong turn 6 over 18yrs.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">880MB 1080p .MPG</p>
          </div>
        </div>
      </div>`,

      `<div  class="movie2 common" data-movieid="8"><div class="img1"><img src="photos/image8.jpg"><h3 class="bottom-center">BLacklight</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 45 minutes</p></h4>
            <div
            href="dj action movies/blacklight.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.68GB 1080p .MP4</p></div>
          </div>
      </div>`,

      `<div  class="movie2 common" data-movieid="9"><div class="img1"><img src="photos/image9.jpg"><h3 class="bottom-center">12 hours</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 22 minutes</p></h4>
            <div
            href="dj action movies/12 hours [chinese].mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">388MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="10"><div class="img1"><img src="photos/image10.jpg"><h3 class="bottom-center">Cocaine Bear</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Thriller</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 34 minutes</p></h4>
            <div
            href="dj action movies/cocaine bear.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">413MB 1080p .MP4</p></div>
          </div>
      </div>`,

      `<div  class="movie2 common" data-movieid="11"><div class="img1"><img src="photos/image11.jpg"><h3 class="bottom-center">Collective Measures</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 42 minutes</p></h4>
            <div
            href="dj action movies/collective measures.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.95GB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="12"><div class="img1"><img src="photos/image12.jpg"><h3 class="bottom-center">Cold Harvest</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Sci-fi</p></h4><h4 class="class">DATE:<p class="year">1999</p></h4><h4 class="class">Run Time:<p class="time">1hr 28 minutes</p></h4>
            <div
            href="dj action movies/cold harvest.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">409MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="13"><div class="img1"><img src="photos/image13.jpg"><h3 class="bottom-center">Chlidren Of The Corn 3</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 28 minutes</p></h4>
            <div href="dj action movies/children of the corn 3.mp4"  class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">395MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="14"><div class="img1"><img src="photos/image14.jpg"><h3 class="bottom-center">A Few Less Men</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Comedy</p></h4><h4 class="class">DATE:<p class="year">2017</p></h4><h4 class="class">Run Time:<p class="time">1hr 25 minutes</p></h4>
            <div
            href="dj action movies/a few less men.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">383MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="15"><div class="img1"><img src="photos/image15.jpg"><h3 class="bottom-center">Bad Blood</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 13 minutes</p></h4>
            <div
            href="dj action movies/bad blood [horror].MP4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">335MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="16"><div class="img1"><img src="photos/image16.jpg"><h3 class="bottom-center">Black Cat Run</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Mystery</p></h4><h4 class="class">DATE:<p class="year">1998</p></h4><h4 class="class">Run Time:<p class="time">1hr 26 minutes</p></h4>
            <div
            href="dj action movies/black cat run.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">602MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="17"><div class="img1"><img src="photos/image17.jpg"><h3 class="bottom-center">Black Cobra</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 25 minutes</p></h4>
            <div
            href="dj action movies/black cobra.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">404MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="18"><div class="img1"><img src="photos/image18.jpg"><h3 class="bottom-center">Black Friday</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Comedy</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 30 minutes</p></h4>
            <div
            href="dj action movies/black friday.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.02GB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="19"><div class="img1"><img src="photos/image19.jpg"><h3 class="bottom-center">Blade Of The 36 Ronin</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Fantasy</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 44 minutes</p></h4>
            <div
            href="dj action movies/blade of 47 ronin.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">733MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="20"><div class="img1"><img src="photos/image20.jpg"><h3 class="bottom-center">Blowback</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Crime</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 32 minutes</p></h4>
            <div
            href="dj action movies/blowback 2022.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">918MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="21"><div class="img1"><img src="photos/image21.jpg"><h3 class="bottom-center">Bounty Hunter 2</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1996</p></h4><h4 class="class">Run Time:<p class="time">1hr 35 minutes</p></h4>
            <div
            href="dj action movies/bounty hunter 2 hardball.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">953MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="22"><div class="img1"><img src="photos/image22.jpg"><h3 class="bottom-center">Touching The Gold</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Fantasy</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 28 minutes</p></h4>
            <div
            href="dj action movies/touching golds strange coffin.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">837MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="23"><div class="img1"><img src="photos/image23.jpg"><h3 class="bottom-center">New Mr Vampire</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Comedy</p></h4><h4 class="class">DATE:<p class="year">1986</p></h4><h4 class="class">Run Time:<p class="time">1hr 37 minutes</p></h4>
            <div
            href="dj action movies/mr vampire [moon lee].mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">552MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="24"><div class="img1"><img src="photos/image24.jpg"><h3 class="bottom-center">Morbius</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Fantasy</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 34 minutes</p></h4>
            <div
            href="dj action movies/morbius.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">942MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="25"><div class="img1"><img src="photos/image25.jpg"><h3 class="bottom-center">Jurassic World Dominion</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Fantasy</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">2hr 17 minutes</p></h4>
            <div
            href="dj action movies/jurassic world dominion.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">640MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="26"><div class="img1"><img src="photos/image26.jpg"><h3 class="bottom-center">Joy Ride 1-2</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Thriller</p></h4><h4 class="class">DATE:<p class="year">2001</p></h4><h4 class="class">Run Time:<p class="time">1hr 35 minutes</p></h4>
            <div
            href="dj action movies/joy ride 1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">440MB 1080p .MP4</p></div>
            <div
            href="dj action movies/joy ride 2.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">413MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="27"><div class="img1"><img src="photos/image27.jpg"><h3 class="bottom-center">Man Vs Bee</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Comedy</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 3 minutes</p></h4>
            <div
            href="dj action movies/man vs bee.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">286MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="28"><div class="img1"><img src="photos/image28.jpg"><h3 class="bottom-center">Magnificent Natural Fists</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Comedy</p></h4><h4 class="class">DATE:<p class="year">1983</p></h4><h4 class="class">Run Time:<p class="time">1hr 24 minutes</p></h4>
            <div
            href="dj action movies/magnificent natural fist.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">391MB 360p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="29"><div class="img1"><img src="photos/image29.jpg"><h3 class="bottom-center">Dragons Forever</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action martial-arts</p></h4><h4 class="class">DATE:<p class="year">1988</p></h4><h4 class="class">Run Time:<p class="time">1hr 35 minutes</p></h4>
            <div
            href="dj action movies/dragons forever.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">733MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="30"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">Red Heat</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1988</p></h4><h4 class="class">Run Time:<p class="time">1hr 43 minutes</p></h4>
            <div
            href="dj action movies/red heat.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.0GB 1080p .MPG</p></div>
          </div>   
      </div>`,


     ` <div  class="movie2 common" data-movieid="31"><div class="img1"><img src="photos/image31.jpg"><h3 class="bottom-center">Man From Toronto</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 45 minutes</p></h4>
            <div
            href="dj action movies/man from toronto.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">485MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="79"><div class="img1"><img src="photos/image32.jpg"><h3 class="bottom-center">Buried In Barstow</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 25 minutes</p></h4>
            <div
            href="dj action movies/buried in barstow.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">854MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="32"><div class="img1"><img src="photos/image33.jpg"><h3 class="bottom-center">Crazy Fists</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action Martial-Arts</p></h4><h4 class="class">DATE:<p class="year">1977</p></h4><h4 class="class">Run Time:<p class="time">1hr 33 minutes</p></h4>
            <div
            href="dj action movies/36 crazy fists.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">428MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="33"><div class="img1"><img src="photos/image34.jpg"><h3 class="bottom-center">Crazy Couple</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">comedy</p></h4><h4 class="class">DATE:<p class="year">1979</p></h4><h4 class="class">Run Time:<p class="time">1hr 27 minutes</p></h4>
            <div
            href="dj action movies/crazy couple.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">210MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="34"><div class="img1"><img src="photos/image35.jpg"><h3 class="bottom-center">Code Name Banshee</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1988</p></h4><h4 class="class">Run Time:<p class="time">1hr 30 minutes</p></h4>
            <div
            href="dj action movies/code name banshee.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">897MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="35"><div class="img1"><img src="photos/image36.gif"><h3 class="bottom-center">Final Destination 1-5</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2000-2011</p></h4><h4 class="class">Run Time:<p class="time">1hr 35 minutes</p></h4>
            <div
            href="dj action movies/final destination pt1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">439MB 1080p .MP4</p></div>
             <div
             href="dj action movies/final destination pt2.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">402MB 1080p .MP4</p></div>
              <div
              href="dj action movies/final destination pt3.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">410MB 1080p .MP4</p></div>
               <div
               href="dj action movies/final destination pt4.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">361MB 1080p .MP4</p></div>
                <div
                href="dj action movies/final destination pt5.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">410MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="36"><div class="img1"><img src="photos/image37.jpg"><h3 class="bottom-center">Missing In Action3</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1984</p></h4><h4 class="class">Run Time:<p class="time">1hr 43 minutes</p></h4>
            <div
            href="dj action movies/braddock missing in action 3.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">476MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="37"><div class="img1"><img src="photos/image38.jpeg"><h3 class="bottom-center">Bullet Train</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 25 minutes</p></h4>
            <div
            href="dj action movies/bullet train down.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">388MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="38"><div class="img1"><img src="photos/image39.jpg"><h3 class="bottom-center">The Gray Man</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Thriller</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 56 minutes</p></h4>
            <div
            href="dj action movies/the gray man.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">610MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="39"><div class="img1"><img src="photos/image40.jpg"><h3 class="bottom-center">The Night Of The Running Man</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">crime</p></h4><h4 class="class">DATE:<p class="year">1995</p></h4><h4 class="class">Run Time:<p class="time">1hr 24 minutes</p></h4>
            <div
            href="dj action movies/night of the running man.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">841MB 1080p .MPG</p></div>
          </div>   
      </div>`,


      `<div  class="movie2 common" data-movieid="40"><div class="img1"><img src="photos/image41.jpg"><h3 class="bottom-center">Red Scorpion</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1988</p></h4><h4 class="class">Run Time:<p class="time">1hr 45 minutes</p></h4>
            <div
            href="dj action movies/red scorpion.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.02GB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="41"><div class="img1"><img src="photos/image42.jpg"><h3 class="bottom-center">Ip Man Awakening</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action martail-arts</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 19 minutes</p></h4>
            <div
            href="dj action movies/ip man awakening.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">369MB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="42"><div class="img1"><img src="photos/image43.jpg"><h3 class="bottom-center">Hunter Killer</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Thriller</p></h4><h4 class="class">DATE:<p class="year">2018</p></h4><h4 class="class">Run Time:<p class="time">1hr 53 minutes</p></h4>
            <div
            href="dj action movies/hunter killer.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.10GB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="43"><div class="img1"><img src="photos/image44.jpg"><h3 class="bottom-center">Fear Pham 2</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 14 minutes</p></h4>
            <div
            href="dj action movies/fear pham 2.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">744MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="44"><div class="img1"><img src="photos/image45.jpeg"><h3 class="bottom-center">Black Site</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 26 minutes</p></h4>
            <div
            href="dj action movies/black site.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">862 MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="45"><div class="img1"><img src="photos/image46.jpg"><h3 class="bottom-center">Buy Me A Rose 1-4</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Drama</p></h4><h4 class="class">DATE:<p class="year">2012-2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 20 minutes</p></h4>
            <div
            href="dj action movies/buy me a rose 1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">559MB 1080p .MP4</p></div>
            <div
            href="dj action movies/buy me a rose 1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">542MB 1080p .MP4</p></div>



            <div
            href="dj action movies/buy me a rose 1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">504MB 1080p .MP4</p></div>



            <div
            href="dj action movies/buy me a rose 1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">499MB 1080p .MP4</p></div>

          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="46"><div class="img1"><img src="photos/image47.jpg"><h3 class="bottom-center">Chill Factor</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1999</p></h4><h4 class="class">Run Time:<p class="time">1hr 38 minutes</p></h4>
            <div
            href="dj action movies/chill factor.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">983MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="47"><div class="img1"><img src="photos/image48.jpg"><h3 class="bottom-center">Class OF 1999</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Thriller</p></h4><h4 class="class">DATE:<p class="year">1990</p></h4><h4 class="class">Run Time:<p class="time">1hr 33 minutes</p></h4>
            <div
            href="dj action movies/class of 1999 pt1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.02GB 1080p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="48"><div class="img1"><img src="photos/image49.jpeg"><h3 class="bottom-center">Dead Heat</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1988</p></h4><h4 class="class">Run Time:<p class="time">1hr 23 minutes</p></h4>
            <div
            href="dj action movies/dead heat.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">823MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="49"><div class="img1"><img src="photos/image50.jpg"><h3 class="bottom-center">Deep Fear</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Horror</p></h4><h4 class="class">DATE:<p class="year">2021</p></h4><h4 class="class">Run Time:<p class="time">1hr 19 minutes</p></h4>
            <div
            href="dj action movies/DEEP FEAR.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">791B 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="50"><div class="img1"><img src="photos/image51.jpg"><h3 class="bottom-center">Delta Force</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Adventure</p></h4><h4 class="class">DATE:<p class="year">1990</p></h4><h4 class="class">Run Time:<p class="time">1hr 47 minutes</p></h4>
            <div
            href="dj action movies/delta force 2.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">1.04GB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="51"><div class="img1"><img src="photos/image52.jpg"><h3 class="bottom-center">Desperado</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Crime</p></h4><h4 class="class">DATE:<p class="year">1995</p></h4><h4 class="class">Run Time:<p class="time">1hr 42 minutes</p></h4>
            <div
            href="dj action movies/desperado.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">460MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="52"><div class="img1"><img src="photos/image53.jpg"><h3 class="bottom-center">Desperate Rescue</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Drama</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 27 minutes</p></h4>
            <div
            href="dj action movies/dangerous.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">396MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="53"><div class="img1"><img src="photos/image54.jpg"><h3 class="bottom-center">District B13</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2004</p></h4><h4 class="class">Run Time:<p class="time">1hr 22 minutes</p></h4>
            <div
            href="dj action movies/district b13 pt 1.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">379MB 1080p .MP4</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="54"><div class="img1"><img src="photos/image55.jpg"><h3 class="bottom-center">Dragon The Young Master</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Comedy</p></h4><h4 class="class">DATE:<p class="year">1979</p></h4><h4 class="class">Run Time:<p class="time">1hr 24 minutes</p></h4>
            <div
            href="dj action movies/dj_action_dragon_the_young(360p).mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">199MB 360p .MP4</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="55"><div class="img1"><img src="photos/image56.jpg"><h3 class="bottom-center">Double Impact</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1991</p></h4><h4 class="class">Run Time:<p class="time">1hr 46 minutes</p></h4>
            <div
            href="dj action movies/double impact.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">492MB 1080p .MP4</p></div>
          </div>   
      </div>`,
     ` <div  class="movie2 common" data-movieid="56"><div class="img1"><img src="photos/image57.jpg"><h3 class="bottom-center">Double Threat</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Thriller</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 32 minutes</p></h4>
            <div
            href="dj action movies/double threat.mpg" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">917MB 1080p .MPG</p></div>
          </div>   
      </div>`,
   `<div  class="movie2 common" data-movieid="57"><div class="img1"><img src="photos/image61.jpg"><h3 class="bottom-center">Executive Target</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1997</p></h4><h4 class="class">Run Time:<p class="time">1hr 30 minutes</p></h4>
            <div
            href="dj action movies/executive target.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">419MB 720p .MP4</p></div>
          </div>   
      </div>`,
             `<div  class="movie2 common" data-movieid="58"><div class="img1"><img src="photos/image58.jpg"><h3 class="bottom-center">Dragon Hero</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action Martial-arts</p></h4><h4 class="class">DATE:<p class="year">2001</p></h4><h4 class="class">Run Time:<p class="time">1hr 29 minutes</p></h4>
            <div
            href="dj action movies/dragon hero [2001].mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">402MB 360p .MP4</p></div>
          </div>
        </div>`,

     ` <div  class="movie2 common" data-movieid="59"><div class="img1"><img src="photos/image59.jpg"><h3 class="bottom-center">Enter The Fat Dragon</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action Martial-arts</p></h4><h4 class="class">DATE:<p class="year">1978</p></h4><h4 class="class">Run Time:<p class="time">1hr 32 minutes</p></h4>
            <div
            href="dj action movies/enter the fat dragon [ sammo hung ].mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">645MB 360p .MP4</p></div>
          </div>   
      </div>`,
           ` <div  class="movie2 common" data-movieid="60"><div class="img1"><img src="photos/image60.jpg"><h3 class="bottom-center">Eraser Reborn</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2022</p></h4><h4 class="class">Run Time:<p class="time">1hr 39 minutes</p></h4>
            <div
            href="dj action movies/eraser reborn.mp4" class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">565MB 720p .MP4</p></div>
          </div>   
      </div>`,
      
        `<div  class="movie2 common" data-movieid="61"><div class="img1"><img src="photos/image44.jpg"><h3 class="bottom-center">Retribution</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 26minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">397MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="62"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">sisu</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 26 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">405MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="63"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">The Mother</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 45 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">496MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="64"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">Fair Game</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">1995</p></h4><h4 class="class">Run Time:<p class="time">1hr 30 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">411MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="65"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">FAR CRY</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2008</p></h4><h4 class="class">Run Time:<p class="time">1hr 25 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">387MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="66"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">HANDS UP</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action Comedy</p></h4><h4 class="class">DATE:<p class="year">2003</p></h4><h4 class="class">Run Time:<p class="time">1hr 33 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">392B 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="67"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">HIDDEN STRIKE</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 43 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">452MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="68"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">King of killers</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 32minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">405MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="69"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">INVICIBLE GUARD</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 10 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">324MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="70"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">FURIES a.k.a THAN SOI</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 45 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">478MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="71"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">THE FLOOD</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action horror</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 29 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">404MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="72"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">THE ISLAND</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 31 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">418MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="73"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">the black demon</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">HORROR</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 33 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">428MB 1080p .MPG</p></div>
          </div>   
      </div>`,

     ` <div  class="movie2 common" data-movieid="74"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">EVIL DEAD RISE</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">HORROR</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 31 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">420MB 1080p .MPG</p></div>
          </div>   
      </div>`,

        `<div  class="movie2 common" data-movieid="75"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">EXTRACTION</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2018</p></h4><h4 class="class">Run Time:<p class="time">1hr 57 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">535MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="76"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">EXTRACTION 2 </h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 52 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">512MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="77"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">BREAKOUT</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 23 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">372MB 1080p .MPG</p></div>
          </div>   
      </div>`,

      `<div  class="movie2 common" data-movieid="78"><div class="img1"><img src="photos/image30.jpg"><h3 class="bottom-center">THE BEST MAN</h3></div>
          <div class="clone"><h4 class="class">GENRE :<p class="genre">Action</p></h4><h4 class="class">DATE:<p class="year">2023</p></h4><h4 class="class">Run Time:<p class="time">1hr 29 minutes</p></h4>
            <div class="download"><div onclick="initiat()" type="button" id="downloadButton" class="downloadButton">Download</div><p class="space">407MB 1080p .MPG</p></div>
          </div>   
      </div>`
  ];
console.log(document.getElementsByClassName('active'));
let itemtobe = document.getElementsByClassName('display2');
const moviesContainer = document.getElementById('pagination');
document.addEventListener("DOMContentLoaded", function () {
    let isTypeClicked = false;

    let plugins = document.getElementsByClassName("type");
    for (var i = 0; i < plugins.length; i++) {
        plugins[i].addEventListener('click', function (event) {
            isTypeClicked = true;
          document.getElementById("Content").style.display = 'none'
            // Clear previously appended elements
            while (moviesContainer.firstChild) {
                moviesContainer.removeChild(moviesContainer.firstChild);
            }

            let genrename = event.target.textContent;
            my.forEach(movieHTML => {
                const tempDiv1 = document.createElement('div');
                tempDiv1.innerHTML = movieHTML;
                const movieElement = tempDiv1.firstElementChild;

                if (movieElement) {
                    const genreElement = movieElement.querySelector('.genre');
                    if (genreElement) {
                        const genreText = genreElement.textContent;
                        if (genrename == genreText) {
                            moviesContainer.appendChild(tempDiv1);
                            initializeMovieScript();
                            paginationinit();

                        }
                    }
                }
            });
        }, false);
    }

    // Check if the element with class "type" is not clicked
    if (!isTypeClicked) {
        // Clear previously appended elements
        while (moviesContainer.firstChild) {
            moviesContainer.removeChild(moviesContainer.firstChild);
        }

        // Your second code block here
        my.forEach(movie => {
            const tempDiv = document.createElement('div');
            tempDiv.setAttribute('class', 'inner-div');
            tempDiv.innerHTML = movie;
            moviesContainer.appendChild(tempDiv);
            initializeMovieScript();
            paginationinit();
        });
    }
});


// slide script
  
  var counter =1;
  setInterval(function(){
    document.getElementById('radio'+counter).checked=true;
    counter++;
    if (counter >5) {
      counter=1;
    }
  }, 5000);


        // search engine script
  let content = document.getElementById("Content");
  function searchMovies() {
      while (moviesContainer.firstChild) {
            moviesContainer.removeChild(moviesContainer.firstChild);
        }
                while (content.firstChild){
            content.removeChild(content.firstChild);
        }
        let num = document.getElementById("pageNumbers");
        num.style.display='none';
       let query = document.getElementById("searchInput").value.toLowerCase();
       let not = "<div class='div'><P class='p'>"+query+" "+"SEARCH RESULT NOT FOUND</P></div>"
       let foundResults = false;
       my.forEach(movie1HTML => {
        const tempDiv1 = document.createElement('div');
        tempDiv1.innerHTML = movie1HTML;
        const movieElement = tempDiv1.firstElementChild;
        if (movieElement) {
        const link = movieElement.getElementsByTagName("h3")[0].innerText.toLowerCase();
        if (link.includes(query)) {
          foundResults = true;
         moviesContainer.appendChild(tempDiv1);       
         initializeMovieScript(); 
        content.style.display='none';
        
        }
        if (!foundResults) {
      while (content.firstChild){
            content.removeChild(content.firstChild);
        }
          document.getElementById("Content").style.display='block';
          document.getElementById("Content").innerHTML=not;
        }
          
          }
    });
  }
   
//.............Movie script..........

    
      function initializeMovieScript() {
        let num = document.getElementById("pageNumbers");
        
        let contentisclicked = false;
        let link = document.getElementsByClassName('movie2');
        let pagination = document.getElementById("pagination");
        for (let i = 0; i < link.length; i++) {
            link[i].addEventListener('click', function(event) {
              contentisclicked = true;
              handleMovieClick(link[i]);
            }, false);
        }
        if (!contentisclicked) {
          pagination.style.display = 'flex';
          document.getElementById("Content1").style.display = 'none' ;
        }
        }
        function handleMovieClick(movieElement) {
    let pagination = document.getElementById("pagination");
    let num = document.getElementById("pageNumbers");
    pagination.style.display = 'none';
    num.style.display = 'none';
    let items = movieElement.children;
                let item1 = items.item(0);
                let item2 = items.item(1);
                let child = item1.children;
                let img = child.item(0);
                let h3 = child.item(1);
                item1.style.width = '50vw';
                item1.style.height = '50vw';
                img.style.width = '45vw';
                img.style.height = '45vw';
                h3.style.margin = '-1%';
                item2.style.display = 'block';
                let content = movieElement.innerHTML;
    document.getElementById("Content").innerHTML = content;
    document.getElementById("Content").style.display = 'block';
    document.getElementById("Content1").style.display = 'block';
   let tobe=itemtobe;
   for (var i = 0; i < tobe.length; i++) {
if (tobe[i].classList.contains('active')) {
      tobe[i].classList.remove('active')
    }
   }
if (moviesContainer.classList.contains('active')) {
      moviesContainer.classList.remove('active')
    }
   
      let movieplaced= movieElement;
      movieplaced.classList.add('active');
      getCurrentMovieId(movieplaced);
}


//...lastest posts script....//
  document.addEventListener("DOMContentLoaded", function () {
  let post = [];
  let elements = document.getElementsByClassName("movie2");

  let bakDiv = document.getElementById("bak");
  for (let i = 0; i < elements.length; i++) {
    let yearElement = elements[i].querySelector(".year");
    if (yearElement && parseInt(yearElement.textContent) >= 2022) {
      let element = elements[i].innerHTML;
      let id = elements[i].getAttribute('data-movieid');
      let obj = `<div class="display2 common" id="display2" data-movieid='${id}'>` + element + `</div>`;
      post.push(obj);
    }
  }
  items = [...post];
  let value = items.join("");
  bakDiv.innerHTML = value;

  contentisclicked= false;
   
   for (var i = 0; i < itemtobe.length; i++) {  
  itemtobe[i].addEventListener('click', function(event) {
      let movie1 = event.target.parentNode;
      let clone = movie1.parentNode.cloneNode(true);
      let num = document.getElementById("pageNumbers");
        let pagination = document.getElementById("pagination");
              contentisclicked = true;
                pagination.style.display = 'none';
                num.style.display = 'none';
                let items = clone.children;
                let item1 = items.item(0);
                let item2 = items.item(1);
                let child = item1.children;
                let img = child.item(0);
                let h3 = child.item(1);
                item1.style.width = '50vw';
                item1.style.height = '50vw';
                img.style.width = '45vw';
                img.style.height = '45vw';
                h3.style.margin = '-1%';
                item2.style.display = 'block';
                let content = clone.innerHTML;
                document.getElementById("Content").innerHTML = content;
                document.getElementById("Content").style.display = 'block'
                document.getElementById("Content1").style.display = 'block'
if (moviesContainer.classList.contains('active')) {
      moviesContainer.classList.remove('active')
    }
  let tobe=itemtobe;
   for (var i = 0; i < tobe.length; i++) {
if (tobe[i].classList.contains('active')) {
      tobe[i].classList.remove('active')
    }
   }
      let movieplaced=movie1.parentNode;
      movieplaced.classList.add('active');
      getCurrentMovieId(movieplaced);

        
        if (!contentisclicked) {
       document.getElementById("Content1").style.display = 'none' ;
          pagination.style.display = 'flex';

        }
  }, false);
}
});


    //.........pagination script......//
  function paginationinit() {
 
  

    // Get all movie items
    const movieItem =document.getElementsByClassName('inner-div');
    let movieItems = Array.from(movieItem);
    // Items per page
    const itemsPerPage = 30;

    // Current page
    let currentPage = 1;

    // Function to show items for the current page
    function showItems() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
      movieItems.forEach((item, index) => {
        if (index >= startIndex && index < endIndex) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    }

    // Function to go to a specific page
    function goToPage(page) {
      currentPage = page;
      showItems();
      generatePageNumbers();
    }

    // Generate page numbers
    function generatePageNumbers() {
      const totalPages = Math.ceil(movieItems.length / itemsPerPage);
      const pageNumbersDiv = document.getElementById('pageNumbers');
      
      let pageNumbersHTML = '';
      let startPage = Math.max(currentPage - 2, 1);
      let endPage = Math.min(startPage + 4, totalPages);

      //additional syntax
      let pageposition = "Page"+currentPage+"of"+totalPages+"pages"
      if (startPage > 1) {
        pageNumbersHTML += '<<';
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbersHTML += `<span class="pageNumber">${i}</span>`;
      }
      
      if (endPage < totalPages) {
        pageNumbersHTML += ' >>';
      }
      
      pageNumbersDiv.innerHTML = pageNumbersHTML;
      
      // Attach click event listeners to page numbers
      const pageNumbers = Array.from(document.querySelectorAll('.pageNumber'));
      pageNumbers.forEach((pageNumber) => {
        pageNumber.addEventListener('click', () => {
          const page = Number(pageNumber.textContent);
          goToPage(page);
        });
      });
    }

    // Show initial items for the first page
    showItems();

    // Generate initial page numbers
    generatePageNumbers();
}






//...........download script.........

  // Handle download button click
  function initiat(){
    // Prompt user to pay and enter phone number
    var confirmPayment = confirm("To download this movie, you need to pay KES 10. Proceed with payment?");
    if (confirmPayment) {
      var phoneNumber = prompt("Enter your phone number:");
      if (phoneNumber) {
        // Make API request to initiate payment
        makePayment(phoneNumber);
      } else {
        alert("Phone number is required!");
      }
    }
  }

  // Function to initiate the payment process
  function makePayment(phoneNumber) {

    // Make API request to M-Pesa API for payment initiation
    // Use the appropriate endpoint and API library for the M-Pesa API you are integrating with
    // Ensure you have the necessary API credentials and authentication in place
    // Example using Safaricom's Daraja API library:
    Daraja.init({ apiKey: '<your_api_key>', username: '<your_username>', password: '<your_password>' });
    
    var amount = 10;
    var reference = generateReference(); // Generate a unique reference ID for the transaction

    Daraja.lipaNaMpesaOnline(amount, phoneNumber, reference).then(function(response) {
      // Payment request successful, prompt user to confirm payment on their phone
      alert("Payment request sent to your phone. Please confirm the payment.");
      // Start monitoring the payment status using the transaction reference ID
      monitorPaymentStatus(reference);
    }).catch(function(error) {
      // Handle payment initiation error
      console.log(error);
      alert("Payment initiation failed. Please try again.");
    });
  }

  // Function to monitor payment status
  function monitorPaymentStatus(reference) {
    // Make API request to check the payment status using the reference ID
    // Continuously check the payment status until it is successful or times out
    // Example using Safaricom's Daraja API library:
    Daraja.queryLipaNaMpesaOnlineStatus(reference).then(function(response) {
      // Check the payment status in the response
      if (response.status === 'success') {
        // Payment successful, allow the user to download the movie
        startMovieDownload();
      } else if (response.status === 'failed') {
        // Payment failed, notify the user
        alert("Payment failed. Please try again.");
      } else {
        // Payment still in progress, continue monitoring
        setTimeout(function() {
          monitorPaymentStatus(reference);
        }, 3000); // Wait for 3 seconds before checking again
      }
    }).catch(function(error) {
      // Handle payment status check error
      console.log(error);
      alert("Error checking payment status. Please try again.");
    });
  }

  // Function to start the movie download
  function startMovieDownload() {
    // Implement the logic to start the movie download here
    // This could involve generating a download link or triggering a download action
    alert("Payment successful! Movie download starting...");
    // Add your code to initiate the movie download
  }

  // Function to generate a unique reference ID
  function generateReference() {
    // Implement your logic to generate a unique reference ID here
    // This could involve using a timestamp, random string, or any other unique identifier
    return 'your_unique_reference_id';
  }

//login authentication ................
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
const token = getCookie('token');
if (token) {
  const tokenPayload = JSON.parse(atob(token.split('.')[1]));
  const username = tokenPayload.name;
  const userEmail = tokenPayload.email;
  let userplace = document.getElementById("user-place");
  userplace.innerHTML=`<marquee>Hey ${username} Welcome to dj action movies now you will be able to comment on the movies and get updates for new movies each time they are added thank you for trusting us</marquee>`;
} else {
  document.addEventListener('DOMContentLoaded', () => {
    let userplace = document.getElementById("user-place");
    userplace.innerHTML=`<marquee>Please register and login to dj action movies for free to be able to comment on the movies and get updates for new movies</marquee>`
    alert('Please login for free to get a better expirience');
  });
  

}
function setexpires(name1){
document.cookie = `${name1}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
function deleteCookie(name) {
setexpires("token");
window.location.reload();
} 

// privacy policy
document.getElementById('policy').addEventListener('click', ()=>{
  document.getElementById('1').style.display='none';
  document.getElementById('2').style.display='none';
  document.getElementById('Privacy-policy').style.display='block';
});


// comment section............................................................................................................
function appendingcomments(){
  let commentN = document.createElement('span');
        commentN.setAttribute('class', 'commentN');
        commentN.innerHTML='Leave us a comment';
  let commentInput = document.createElement("textarea");
        commentInput.setAttribute('id', 'commentInput');
  let displaycomment = document.createElement("button");
        displaycomment.setAttribute('id', 'button');
  let commentContainer = document.createElement("div");
        commentContainer.setAttribute('id', 'commentContainer');        
}
    const moviesContainer1 = document.getElementById('pagination');
    const commentContainer = document.getElementById('commentContainer');
    function fetchComments(movieId) {
        fetch(`/api/movies/${movieId}/comments`)
            .then(response => response.json())
            .then(comments => {
                // Display comments in the comment container
              //loads when the comment is add needs some change
              //console.log(comments);
                commentContainer.innerHTML = comments.map(comment => `<p>${comment.comment}</p>`).join('');
            })
            .catch(error => console.error('Error fetching comments:', error));
    }

    // Function to submit a new comment
    function submitComment() {
        const commentText = document.getElementById("commentInput").value;
        const tokenPayload = JSON.parse(atob(token.split('.')[1]));
        const username = tokenPayload.name;
          let movieId = getCurrentMovieId();
        fetch(`/api/movies/${movieId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ comment: commentText })
        })
        .then(response => response.json())
        .then(newComment => {

            //console.log('Comment posted successfully:', newComment);
            fetchComments(movieId);
        })
        .catch(error => console.error('Error posting comment:', error));
    }

    function getCurrentMovieId(movieplaced) {
      const movieId = movieplaced.getAttribute('data-movieid');
        console.log(movieId);
            return movieId;
            fetchComments(movieId);
}