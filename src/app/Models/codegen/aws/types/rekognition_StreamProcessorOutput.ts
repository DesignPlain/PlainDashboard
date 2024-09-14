import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_StreamProcessorOutputS3Destination,
  rekognition_StreamProcessorOutputS3Destination_GetTypes,
} from "./rekognition_StreamProcessorOutputS3Destination";
import {
  rekognition_StreamProcessorOutputKinesisDataStream,
  rekognition_StreamProcessorOutputKinesisDataStream_GetTypes,
} from "./rekognition_StreamProcessorOutputKinesisDataStream";

export interface rekognition_StreamProcessorOutput {
  // The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. See `s3_destination`.
  s3Destination?: rekognition_StreamProcessorOutputS3Destination;

  // The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results. See `kinesis_data_stream`.
  kinesisDataStream?: rekognition_StreamProcessorOutputKinesisDataStream;
}

export function rekognition_StreamProcessorOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "s3Destination",
      "The Amazon S3 bucket location to which Amazon Rekognition publishes the detailed inference results of a video analysis operation. See `s3_destination`.",
      () => rekognition_StreamProcessorOutputS3Destination_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "kinesisDataStream",
      "The Amazon Kinesis Data Streams stream to which the Amazon Rekognition stream processor streams the analysis results. See `kinesis_data_stream`.",
      () => rekognition_StreamProcessorOutputKinesisDataStream_GetTypes(),
      false,
      false,
    ),
  ];
}
