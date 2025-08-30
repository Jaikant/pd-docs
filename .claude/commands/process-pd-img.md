# PROCESS PD IMAGE COMMAND

This command is used to process an image screenshot from the predictable dialogs app. 

- Read the images in the folder @.ai/Images/new-images one by one and process tham as per the instructions below:  

## DETERMINE IMAGE DETAILS
The image name may provide some context of the image, determine the remaining context.

The remaining context would need to be determined by seeing the image like:
 - the page in the predictable dialogs app this is from. 
 - At what step this screenshot is taken. 
 -  alt text suggestions (1-3) 
 -  detailed description of the image, use the file @.ai/img/descriptions.md as an example to create a proper description 

## DETERMINE APPROPRIATE FILE NAME
- Read the file @.ai/img/descriptions.md and the images in the directory @.ai/img/images, based on these if the file name can be improved for consistency then come up with a more consistent name.
 
 ## SAVE THE IMAGE DETAILS
  - Create a file in the directory @.ai/img called plan.md if not existing, if already existing you will append to this file.
  - Add ALL details of the images to this file, with proper headings image by image.
  - Add a heading with proposed file name changes at the top of the file and also in each image detail.


  TODO - the image context page - should come from the list of pages.
  can add a meta tag, if there is a blue line added by me to the image to highlight some part.