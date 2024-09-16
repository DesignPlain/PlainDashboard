import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface m2_ApplicationDefinition {
  // JSON application definition. Either this or `s3_location` must be specified.
  content?: string;

  // Location of the application definition in S3. Either this or `content` must be specified.
  s3Location?: string;
}

export function m2_ApplicationDefinition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      's3Location',
      'Location of the application definition in S3. Either this or `content` must be specified.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'content',
      'JSON application definition. Either this or `s3_location` must be specified.',
      () => [],
      false,
      false,
    ),
  ];
}
