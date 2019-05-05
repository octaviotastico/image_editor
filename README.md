#### To do list:    

---

##### Important stuff:    

* Main Screen - ✔ Done    
* Navigation Between Screens - ✔ Done    
* Canvas Screen - ✗    
* Use camera to take photos - ✗    
* Use galery to search photos - ✗    

##### Basic functions:    

* Crop - ✗    
* Rotate - ✗    
* Flip - ✗    
* Bright - ✗    
* Contrast - ✗    
* Temperature - ✗    
* Saturation - ✗    
* Vignette - ✗    

##### Aesthetic functions:    

* **Moire**: ✗    

> A pattern old TV's used to show a lot when an image with lines gets small in screen.    
> Don't know the algorithm, need research.    

* **Dithering**: ✔ Done    

> Implemented with Floyd-Steinberg algorithm.    
> Need to implement user input on how many colors will the dither have, and connect with canvas.    

* **RGB Shift**: ✗    

> Will separate the image in two copies like 3D films, with:    
> Red - Cian    
> Violet - Cian    
> Violet - Green    
> I will probably need to: Make a copie of the image, and move it within a given offset (choosed by the user), then paint one with in colorA and other with colorB.    

* **Recursive Image**: ✗    

> It will repeat the original image in smaller ones, one inside the other.    

* **Negative**: ✗    

> It will invert the colors.    

* **Negative Glitch**: ✗    

> It will invert the colors but it will glitch the screen (like some parts would not be negative).    
> Probably just 1/2, or 2/3 of screen.    

* **Cut Glitch**: ✗    

> It will choose a (probably random) y1 and y2, and move it (with an offset) to left or right (probably random too), repeating the last pixel.    

* **WinXP Glitch**: ✗    

> It will choose a (probably random) y1 and y2, or x1 and x2, and it will repeat the last pixel, like counter-strike camera when glitchs off the map or Windows XP when a window left a trace.    

* **Chromatic Aberration**: ✗    

> This effect is made by low quality lenses.    
> Will simulate ir by shifting every channel (Red, Green, Blue).    
> Make two copies of the image, leave copy1 only with channel Red, and other only with channel Blue, and move it with the offset leaving the original (with the green values) intact.    

* **Pixelate**: ✗    

> Just pixelates an image.    

* **Bad TV Signal**: ✗    

> It will create 'waves' by selecting and y value, and offsetting it by drawing the entire row with +1 or -1 offset, relative to the original image.    
> Pixel loss by painting it to black.    

* **Stickers**: ✗    

> Adding images on top of the original or edited image, like PC's, w95 icons, etc.    
> Probably will use Giphy API? Or just download some .gif's images and put it in the project.    

* **Filters**: ✗    

> Normal filters, and things like 'moire' that converts the image to black and white and shows a distorted grid on top of the grey and black values.    


