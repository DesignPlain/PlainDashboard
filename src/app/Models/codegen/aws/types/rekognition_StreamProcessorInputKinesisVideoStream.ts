import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rekognition_StreamProcessorInputKinesisVideoStream {
  // ARN of the Kinesis video stream stream that streams the source video.
  arn?: string;
}

export function rekognition_StreamProcessorInputKinesisVideoStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "arn",
      "ARN of the Kinesis video stream stream that streams the source video.",
      () => [],
      true,
      false,
    ),
  ];
}
