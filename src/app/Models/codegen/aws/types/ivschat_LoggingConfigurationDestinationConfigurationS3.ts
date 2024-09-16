import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ivschat_LoggingConfigurationDestinationConfigurationS3 {
  /*
Name of the Amazon S3 bucket where chat activity will be logged.

The following arguments are optional:
*/
  bucketName?: string;
}

export function ivschat_LoggingConfigurationDestinationConfigurationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'Name of the Amazon S3 bucket where chat activity will be logged.\n\nThe following arguments are optional:',
      () => [],
      true,
      false,
    ),
  ];
}
