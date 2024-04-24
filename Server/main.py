from fastapi import FastAPI, File, UploadFile
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import cv2
import tensorflow as tf
from fastapi.middleware.cors import CORSMiddleware


MODEL = tf.keras.models.load_model('./Model/Dis45.hdf5')   # model loading
CLASS_NAMES = ['Eczema','Melanoma','Basal Cell Carcinoma','Melanocytic Nevi'] #4 classs names for predictions

app = FastAPI();


#middleware to request from any other origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

def read_file_as_image(data) -> np.ndarray:
    # image = Image.open(data).resize((100,75))
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.get("/home")
async def ping():
    return "Hello Connected"   

# @app.post("/classify")
# async def classify(file: UploadFile = File(...)):
#     image = read_file_as_image(await file.read())
#     image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert from BGR to RGB
#     image_batch = np.expand_dims(image,0)
#     predictions = MODEL.predict(image_batch)
#     prediction_class = CLASS_NAMES[np.argmax(predictions[0])]
#     confidense = np.max(predictions[0])
#     return {"class": prediction_class,
#             "confidense": float(confidense)
#             }

@app.post("/classify")
async def classify(file: UploadFile = File(...)):

    try:
        image = read_file_as_image(await file.read())
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convert from BGR to RGB
        resized_image = cv2.resize(image, (222, 294))  # Resize the image
        resized_image = np.expand_dims(resized_image, axis=0)  # Add batch dimension
        # resized_image = resized_image / 255.0  # Normalize pixel values to [0, 1]
        predictions = MODEL.predict(resized_image)

        # Create a dictionary to store class predictions
        class_predictions = {}
        for i, class_name in enumerate(CLASS_NAMES):
            class_predictions[class_name] = float(predictions[0][i])
        
        return {"class_predictions": class_predictions}
        if confidence > 0.6:
            return {"class": prediction_class,
                "confidence": float(confidence)
            
                }
        else:
            return {"class": "mistakenly provided wrong image, probably.",
            "confidence": 0
            }
    except Exception as e:
        # Log any errors that occur during classification
        logging.error(f"Error occurred during classification: {str(e)}")
        return {"error": "An error occurred during classification"}
    # prediction_class = CLASS_NAMES[np.argmax(predictions[0])]
    # confidence = np.max(predictions[0])
    # print(type(confidence), confidence)
    # if confidence > 0.6:
    #     return {"class": prediction_class,
    #         "confidence": float(confidence)
            
    #         }
    # else:
    #     return {"class": "mistakenly provided wrong image, probably.",
    #         "confidence": 0
    #         }


if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)