export const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";
export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";
import { useDispatch } from "react-redux";
import { addPrediction } from "../predictionSlice";
import axios from "axios";


export const useModel = () => {
  const dispatch = useDispatch();

  const classifyImage = async (formData) => {
    // dispatch(addPrediction({ type: UPLOAD_IMAGE_REQUEST }));
    try {
      const res = await axios.post("http://localhost:8000/classify", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

    // console.log(res);


      dispatch(
        addPrediction({
          type: UPLOAD_IMAGE_SUCCESS,
          payload: res.data.class_predictions,
        })
      );
    } catch (error) {
      dispatch(
        addPrediction({
          type: UPLOAD_IMAGE_FAILURE,
          payload: error.message,
        })
      );
    }
  };


  return classifyImage;
};
