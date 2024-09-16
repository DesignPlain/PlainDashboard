import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rekognition_StreamProcessorOutputKinesisDataStream {
  // ARN of the output Amazon Kinesis Data Streams stream.
  arn?: string;
}

export function rekognition_StreamProcessorOutputKinesisDataStream_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'arn',
      'ARN of the output Amazon Kinesis Data Streams stream.',
      () => [],
      false,
      false,
    ),
  ];
}
