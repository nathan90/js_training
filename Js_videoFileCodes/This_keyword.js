// https://www.youtube.com/watch?v=gvicrj31JOM
// If a function is a part of the object. then this references the object itself
// if a function is a regular function this references global (window object in browser, global in node)

// Test

const video = {
  title : 'Test title',
  tags : ['a', 'b', 'c'],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach(function(tag){
      console.log(this.title, tag);
    }, this)
  }
}

// video.stop = function() {
//   console.log(this);
// }

// This arrow function returns only empty object -why?
// because it is lexical scoping
//https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/
video.stop1 = () => {
  console.log(this)
}
//video.play()
//video.stop();
//video.stop1();

// function playVideo() {
//   console.log(this);
// }

// playVideo();

// Constructor function
// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

//const v = new Video("Matrix") // Creates a new empty object {} and sets "this" to the empty object

//video.showTags();





