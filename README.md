# BaseLight

An interactive light-and-shadow animation built with HTML, CSS, and JavaScript. It uses mouse movements (on desktop) and finger touch (on mobile) to simulate dynamic light sources casting shadows on colored balls.

![image](https://github.com/user-attachments/assets/17e75f82-5b62-48ec-9026-fbbf4f7332c6)


## Features

✅ Smooth light-following interaction  
✅ Shadows react dynamically to light position  
✅ Works on both desktop (mouse) and mobile (touch)  
✅ Responsive and performant  
✅ Clean, modern CSS and JavaScript structure

## Live Demo

👉 [Click here to view the demo](https://base-light.vercel.app/)  

## How It Works

- The `mousemove` event updates the CSS variables `--mx` and `--my` to track cursor position.
- The `touchmove` event does the same on mobile devices.
- CSS variables drive the transformations and gradients of each `.ball` and `.shadow` element to simulate realistic lighting effects.
