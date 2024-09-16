import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface comprehend_EntityRecognizerInputDataConfigAnnotations {
  // Location of training annotations.
  s3Uri?: string;

  //
  testS3Uri?: string;
}

export function comprehend_EntityRecognizerInputDataConfigAnnotations_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      's3Uri',
      'Location of training annotations.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'testS3Uri',
      '',
      () => [],
      false,
      false,
    ),
  ];
}
