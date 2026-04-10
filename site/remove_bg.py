from PIL import Image
import os

input_path = "doc/Logo holográfico de balAna LABS.png"
output_path = "doc/Logo holográfico de balAna LABS_transparent.png"

try:
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    
    bg_r, bg_g, bg_b, _ = pixels[0, 0]
    bg_is_dark = (bg_r + bg_g + bg_b) < 384
    
    for y in range(img.height):
        for x in range(img.width):
            r, g, b, a = pixels[x, y]
            if bg_is_dark:
                lum = int(max(r, g, b))
                # Boost brightness slightly
                pixels[x, y] = (min(255, int(r*1.2)), min(255, int(g*1.2)), min(255, int(b*1.2)), lum)
            else:
                lum = int(255 - min(r, g, b))
                pixels[x, y] = (r, g, b, lum)
                
    img.save(output_path, "PNG")
    print("Sucesso! Imagem salva.")
except Exception as e:
    print(f"Erro: {e}")
