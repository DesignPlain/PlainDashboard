import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface fis_ExperimentTemplateLogConfigurationS3Configuration {
  // The name of the destination bucket.
  bucketName?: string;

  // The bucket prefix.
  prefix?: string;
}

export function fis_ExperimentTemplateLogConfigurationS3Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'bucketName',
      'The name of the destination bucket.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'prefix',
      'The bucket prefix.',
      () => [],
      false,
      false,
    ),
  ];
}
