---
title: 'Theme'
---

# Theme

## Go to page which themes the widget
- Sign in to [Predictable Dialogs](https://predictabledialogs.com/sign-in). Click your existing agent. Click "Theme" on menu.

### Customize Widget Background Color 
Select *Background* tab and select color

### Customize Widget Font & Brand 
Select *Font & Brand* tab and select brand and font

### Update Avatars
- Prerequisite: You need an image url to update the avatar.
- Select *Avatars* tab 
- Click on the toggle button next to the Avatar label.
- Click on the profile circle and paste the image url


### Customize Bubble Colors
- Select *Bubbles* tab
- Select background color for AI / User bubbles
- Select text color for AI / User bubbles


### Customize Input Colors and Input roundness
- Select *Inputs* tab
- Click *Roundness* dropdown to select border radius of input element. You can select one of large, medium or none. If you want to enter your own border radius, then you can do that in the custom css.
- Select background color for send button and input.
- Select text color for send button, input text and input placeholder.


### Custom CSS
- If you need more specific styles, for example you need to add gradients or other complex styles, then you can do the below:
- Right-click on your bot and inspect the element you want to customize, For example, if you want a fancy gradient color in the chat background, you can target the `.agent-chat-view` class
```
.agent-chat-view {
  border-radius: 40px;
  background-image: linear-gradient(to right, #2b3e13, #8DC26F); border: 1px solid grey;
} 
```
If you need some custom styling on the button you can target the .agent-button class.
```
.agent-button { 
  border-radius: 40px;
  background-image: linear-gradient(to right, #FFA500, #FF6347); 
}
```

More about custom css can be read in the [custom css section](https://predictabledialogs.com/kb/docs/custom-css).