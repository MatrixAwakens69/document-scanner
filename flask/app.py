from flask import Flask, request, jsonify
import pytesseract
import cv2
import numpy as np
from PIL import Image
import io
from flask_cors import CORS

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

app = Flask(__name__)
CORS(app)

@app.route('/scan', methods=['POST'])
def scan_document():
    if 'document' not in request.files:
        return jsonify({'error': 'No document uploaded'}), 400
    file = request.files['document']
    # Convert the file to an OpenCV image
    in_memory_file = io.BytesIO()
    file.save(in_memory_file)
    in_memory_file.seek(0)  # Important: move the cursor to the start of the file
    image = Image.open(in_memory_file)  # Open the image using PIL

    # Convert PIL Image to a format pytesseract can understand
    image = np.array(image)  # Convert PIL Image to numpy array
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert to RGB

    # Use pytesseract to do OCR on the image
    text = pytesseract.image_to_string(image)
    return jsonify({'text': text})

if __name__ == '__main__':
    app.run(debug=True)