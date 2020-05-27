import numpy as np
from PIL import Image
img = Image.open('mar.jpg')
arr = np.array(img) # 640x480x4 array
print(arr)
i=0
j=0

new_image = img.resize((400, 400))
new_image.save('image_4001.jpg')