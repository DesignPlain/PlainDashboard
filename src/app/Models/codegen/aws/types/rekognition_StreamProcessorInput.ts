import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_StreamProcessorInputKinesisVideoStream,
  rekognition_StreamProcessorInputKinesisVideoStream_GetTypes,
} from "./rekognition_StreamProcessorInputKinesisVideoStream";

export interface rekognition_StreamProcessorInput {
  // Kinesis input stream. See `kinesis_video_stream`.
  kinesisVideoStream?: rekognition_StreamProcessorInputKinesisVideoStream;
}

export function rekognition_StreamProcessorInput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "kinesisVideoStream",
      "Kinesis input stream. See `kinesis_video_stream`.",
      () => rekognition_StreamProcessorInputKinesisVideoStream_GetTypes(),
      false,
      false,
    ),
  ];
}
