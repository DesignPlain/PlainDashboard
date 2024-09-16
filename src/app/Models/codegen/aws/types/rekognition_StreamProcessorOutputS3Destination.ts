import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface rekognition_StreamProcessorOutputS3Destination {
  // Name of the Amazon S3 bucket you want to associate with the streaming video project.
  bucket?: string;

  // The prefix value of the location within the bucket that you want the information to be published to.
  keyPrefix?: string;
}

export function rekognition_StreamProcessorOutputS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucket',
      'Name of the Amazon S3 bucket you want to associate with the streaming video project.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'keyPrefix',
      'The prefix value of the location within the bucket that you want the information to be published to.',
      () => [],
      false,
      false,
    ),
  ];
}
