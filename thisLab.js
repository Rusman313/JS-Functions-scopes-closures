/*## Exercise: This

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
 4. logs the current photo name.
 5. Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.*/




/*1* we are saying here is our object  */
var slideshow = 
{



	/*1* here is our array called photoList and it contains the names of photos as strings*/
	photoList: ['RR1.jpg', 'RR2.jpg', 'aahana and salina.jpg', 'my family.jpg'],
	//JS functions 3 Lab 1 - create an empty property named playInterval. 
	playInterval : null,

	/*2 here is our currentPhotoIndex which is represented as an integer (0 = RR1.jpg referenced in photoList) */
	 currentPhotoIndex: 0,
	


	/*5*/getCurrentPhoto: function() 
		{		// says hey when I call getCurrentPhoto I want you to tell me that I am in this photoList "Item", in this currentPhotoIndex.
			console.log(this.photoList[this.currentPhotoIndex]);
		},

	

	/*3 our function inside of our object, is an anonymous function */
		nextPhoto : function() 
		{
				//says if this currentPhotoIndex is < this photoList length -1(because of 0) cont.
		 	if (this.currentPhotoIndex < this.photoList.length)
		 	{	
		 		//log this photolist[in this curentPhotoIndex]
		 		console.log(this.photoList[this.currentPhotoIndex]);
		 		//then take this currentPhotoIndex and add 1
		 		this.currentPhotoIndex ++;
		 	} else { /*otherwise if this currentPhotIndex is > or = then return this message
		 		return console.log('End of slideshow')*/
		 		this.pause();
		 	}		
		},

	/*4*/prevPhoto: function () 
		{
			// says if this currentPhotoIndex is greater than 0(because of the 1st place in the array)
			if(this.currentPhotoIndex > 0)
			{		// then take this currentPhotoIndex and subtract 1
				this. currentPhotoIndex --;
				//log this photolist[in this curentPhotoIndex]
				console.log(this.photoList[this.currentPhotoIndex]);
			} else {  //otherwise if this currentPhotIndex is < or = then return this message
				console.log ('Start of slideshow');
			}
		},

	/*JS functions 3 Lab 2- A play() function that moves to the next photo ever 2000ms until the end.  */
		play: function()
		{this.playInterval = setInterval(function() {slideshow.nextPhoto()}, 2000)
		

		},

		pause: function()
		{ clearInterval(this.playInterval);
			console.log("Paused");

		},
}
// used to text out our solutions, this calls the object.function
/*slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.prevPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();*/


slideshow.play();


