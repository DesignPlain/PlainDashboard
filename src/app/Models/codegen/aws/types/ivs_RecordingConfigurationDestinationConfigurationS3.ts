import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ivs_RecordingConfigurationDestinationConfigurationS3 {
  /*
S3 bucket name where recorded videos will be stored.

The following arguments are optional:
*/
  bucketName?: string;
}

export function ivs_RecordingConfigurationDestinationConfigurationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'S3 bucket name where recorded videos will be stored.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
  ];
}
