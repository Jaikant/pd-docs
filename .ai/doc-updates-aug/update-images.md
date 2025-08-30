



This is the script I use to convert an image file to webp.
```
source ~/.zshrc

for FILE in "$@"
do
  echo "converting file: $FILE"
  EXT="${FILE##*.}"
  QUALITY=85 # quality of output image (You can change this: 1-100)
  /usr/local/bin/cwebp -q $QUALITY "$FILE" -o "${FILE:r}.webp"
done
```