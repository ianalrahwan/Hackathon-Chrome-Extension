# Lablr
#### This was made by Ian Alrahwan, Vineel Reddy Gajjala, and Sai Kurelli

### Inspiration
With the introduction of social media, misinformation, body dysmorphia and mental health issues are at an all-time high. Young teens are seeing their favorite online personalities in their skinniest and edited forms, which can lead to body dysmorphia in the viewers which is a cause for disorders such as anorexia, bulimia, and others. It’s also led to an uptick in teenagers suicides since 2010, the founding year of Instagram. With younger sisters and brothers of our own, we came to one simple question: What can we do to help them? Enter, Lablr, a chrome extension that offers a fresh perspective on social media.

### What it does
Lablr classifies an Instagram account in 3 different categories - red, yellow, or white. These classification align with 3 different options that the user can select for: misleading information, looking through crowdsourced data, and looking through machine learning classification. Lablr displays this information in an intuitive yet non-intrusive way, with teddy bears right next to the instagram username with different color backgrounds to represent them. When clicked on, these bears show why the account was marked.

### How we built it
We primarily built this program through JavaScript, CSS, jQuery, HTML, and Google Fonts API. We were able to collaborate with each other by making sure to have different branches on Github and use the project page on Github to make sure we had clear tasks assigned to each other, which was especially useful in the early stages. We would then merge these separate branches together when we pushed to the remote.

### Challenges we ran into
We ran into an issue with the DOM that while Instagram brought in new content as we scrolled down, our bear stopped appearing. After testing we figured out an implementation that would allow us to rerun our script after a set period of time. Another issue we ran into was that the bear icon was being replaced an infinite number of times which greatly slowed down the efficiency of the website and the non-intrusive nature. By adding a button id and appending the button to a parent element, we found a way to both add the Bear button into the page but also make sure not to attempt adding a second button.

### Accomplishments that we're proud of
We’re proud that we were able to manage our different git branches and collaborate on code with each other pretty effectively. We’re also glad that we were able to make a product that wasn’t too obstructive to a user’s experience with the app and simply serves as a reminder that they are often not seeing the true person behind the screen.

### What we learned
We learned how JavaScript is able to make some pretty powerful edits on the DOM page as well as the basics of making a chrome extension as it was our first time doing so. Making this was a great team-bonding experience and we were glad to be able to make something effective from it.

### What's next for Lablr
Lablr is definitely a project that we plan to work more on in the future. The first step that we would take is to add a Machine Learning Library that we could run on the images to tell if the instagram post has been edited or not. This will greatly increase the benefit of Lablr and would help many more young teenagers who feel victim to the rampant misinformation of social media.
