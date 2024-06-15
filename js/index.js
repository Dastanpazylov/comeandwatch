const navLinks = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});



/// search showhide



const toggleBtn = document.getElementById('toggleBtn');
const targetElement = document.getElementById('targetElement');

// Add a click event listener to the button
toggleBtn.addEventListener('click', () => {
  // Toggle the display property of the target element
  if (targetElement.style.display === 'none') {
    targetElement.style.display = 'block';
  } else {
    targetElement.style.display = 'none';
  }
});






////////sliderposter







1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
var container = document.getElementById('container')
var slider = document.getElementById('slider');
var slides = document.getElementsByClassName('slide').length;
var buttons = document.getElementsByClassName('btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = slides - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
 containerWidth = container.offsetWidth;
 setParams(containerWidth);
}

function setParams(w) {
 if (w < 551) {
   slidesPerPage = 1;
 } else {
   if (w < 901) {
     slidesPerPage = 2;
   } else {
     if (w < 1101) {
       slidesPerPage = 3;
     } else {
       slidesPerPage = 4;
     }
   }
 }
 slidesCount = slides - slidesPerPage;
 if (currentPosition > slidesCount) {
   currentPosition -= slidesPerPage;
 };
 currentMargin = - currentPosition * (100 / slidesPerPage);
 slider.style.marginLeft = currentMargin + '%';
 if (currentPosition > 0) {
   buttons[0].classList.remove('inactive');
 }
 if (currentPosition < slidesCount) {
   buttons[1].classList.remove('inactive');
 }
 if (currentPosition >= slidesCount) {
   buttons[1].classList.add('inactive');
 }
}

setParams();

function slideRight() {
 if (currentPosition != 0) {
   slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
   currentMargin += (100 / slidesPerPage);
   currentPosition--;
 };
 if (currentPosition === 0) {
   buttons[0].classList.add('inactive');
 }
 if (currentPosition < slidesCount) {
   buttons[1].classList.remove('inactive');
 }
};

function slideLeft() {
 if (currentPosition != slidesCount) {
   slider.style.marginLeft = currentMargin - (100 / slidesPerPage) + '%';
   currentMargin -= (100 / slidesPerPage);
   currentPosition++;
 };
 if (currentPosition == slidesCount) {
   buttons[1].classList.add('inactive');
 }
 if (currentPosition > 0) {
   buttons[0].classList.remove('inactive');
 }
};



////category/////



document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.item');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          const category = button.getAttribute('data-category');

          items.forEach(item => {
              if (category === 'all' || item.getAttribute('data-category') === category) {
                  item.style.display = 'block';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});





