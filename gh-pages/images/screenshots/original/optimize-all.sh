#!/bin/sh
#
# Use a simple shell loop, to process each of the images.
#
outputPath=../optimized
for file in *.png
do {
  name=`echo $file|cut -d. -f1`
  convert $file -thumbnail 120 $outputPath/$name-120.png && echo "$name-120.png was succesfully generated in $outputPath"
  convert $file -thumbnail 240 $outputPath/$name-240.png && echo "$name-240.png was succesfully generated in $outputPath"
  convert $file -thumbnail 360 $outputPath/$name-360.png && echo "$name-360.png was succesfully generated in $outputPath"
  convert $file -thumbnail 480 $outputPath/$name-480.png && echo "$name-480.png was succesfully generated in $outputPath"
  convert $file -thumbnail 600 $outputPath/$name-600.png && echo "$name-600.png was succesfully generated in $outputPath"
  convert $file -thumbnail 720 $outputPath/$name-720.png && echo "$name-720.png was succesfully generated in $outputPath"
  convert $file -thumbnail 800 $outputPath/$name-800.png && echo "$name-800.png was succesfully generated in $outputPath"
}
done
