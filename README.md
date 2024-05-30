[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/ex6pWDJu)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=15089931&assignment_repo_type=AssignmentRepo)
## Creative Coding 2: Custom Pixel

The images above are photos of Wellington CBD algorithmically processed with a lightly modified version of the [p5.js Pointillism example](https://p5js.org/examples/image-pointillism.html). The masks for each photo highlight various objects. Replace this text with your own which explains the source of your photos, masking, and applied algorithm.

For this project I began by looking at the class examples and brainstorming what subject matter I may be interested in focusing on for this assignment. At first I was interested in focusing on plants but upon further brainstorming I landed on the idea of focusing on eyes and having my filter warp this in some way.

With my theming of eyes I want my assignment to portray a twist on "the eyes are the window to the soul". I want to present that people can warp and manipulate others perception of themselves by acting presenting themselves in certain ways.

After deciding on this theme I began sourcing some test images to start training the AI to begin to recognise this subject.

First training images and masks:
![alt text](input_1-1.jpg)
![alt text](mask_1-1.png)
![alt text](input_2-1.jpg)
![alt text](mask_2-1.png)
![alt text](input_3-1.jpg)
![alt text](mask_3-1.png)

After processing these images with my input new:
![alt text](input_new.jpg)

I received an essentially blank mask back from the process:
![alt text](mask_new.png)

This showed me that I needed to provide more training images to have the system begin to recognise what my masks were highlighting.

I repeated this process and the output was much more accurate than my first attempt.

Second lot of training images and masks:
![alt text](input_4-1.jpg)
![alt text](mask_4-1.png)
![alt text](input_5-1.jpg)
![alt text](mask_5-1.png)
![alt text](input_6-1.jpg)
![alt text](mask_6-1.png)
![alt text](input_7-1.jpg)
![alt text](mask_7-1.png)

The new mask outputs for my new input images were much more accurate and recgonised my subject matter efficiently.

Once I processed my images through the system I began looking at how I want my filter to edit my subject matter.

I began with a basic wavy effect on my subject.
![alt text](<preview (15).jpg>)

After this I played around with the code a bit more and created this effect:
![alt text](<preview (16).jpg>)

Images sourced from pexels:
https://www.pexels.com/photo/photography-of-a-guy-wearing-green-shirt-1222271/
https://www.pexels.com/photo/man-in-brown-polo-shirt-614810/
https://www.pexels.com/photo/sensual-plus-size-female-with-shiny-rhinestone-on-face-looking-at-camera-3843382/
https://www.pexels.com/photo/serious-young-lady-with-colorful-stickers-on-face-and-hair-clips-against-green-background-6974021/
https://www.pexels.com/photo/old-lady-touching-temples-in-studio-7544645/
https://www.pexels.com/photo/young-woman-filming-video-in-light-apartment-7516247/
https://www.pexels.com/photo/calm-young-ethnic-woman-with-perfect-skin-touching-face-after-shower-5938648/
https://www.pexels.com/photo/stylish-ethnic-male-teenager-standing-on-street-near-weathered-wall-5721443/
https://www.pexels.com/photo/charming-woman-with-freckles-in-room-6001808/