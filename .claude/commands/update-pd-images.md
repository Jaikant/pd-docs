# UPDATE PD IMAGES COMMAND

This command is used to process and update screenshot images from the predictable dialogs app. 

**FOLLOW THE BELOW PROCESS STEP BY STEP FOR EACH IMAGE IN @.ai/Images/new-images**

## STEP ONE - READ IMAGES & DESCRIPTIONS
- Read the image descriptions and plan in the file @.ai/img/plan.md

## CONVERT TO WEBP
- Convert each image to webp format. Example script is below, it could be wrong but provides the path for cwebp executable.
```
for FILE in "$@"
do
  echo "converting file: $FILE"
  EXT="${FILE##*.}"
  QUALITY=85 # quality of output image (You can change this: 1-100)
  /usr/local/bin/cwebp -q $QUALITY "$FILE" -o "${FILE:r}.webp"
done
```

## UPDATE FILE NAME
- Update the file name as per the @.ai/img/plan.md

## WRITE THE IMG FILE
- Write the webp format with updated name to the directory @.ai/img/images

## UPDATE DOCUMENTATION

### SEARCH DOCUMENTATION FOR PLACES TO UPDATE
- Search for relevant places to add this documentation. Start from directory @docs

### UPDATE DOCUMENTATION
- If you find some place to add the documentation, then

#### COPY WEBP FILE TO STATIC IMAGES FOLDER
  - make a copy of the file in @static/img, put the file in a directory similar to the page number the image is from. If the image is common across multiple pages, put it in a @static/img/common directory. 

#### UPDATE DOCUMENTATION
    - Update the documentation carefully with the image. The format to refer to the img, example is - `![Meta App Image](/img/whatsapp/meta-app-success.png)`, not the path starts from /img .. 
    - generate or use a proper alt text based on the context of the documentation.

