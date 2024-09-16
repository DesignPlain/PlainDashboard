import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface comprehend_EntityRecognizerInputDataConfigEntityList {
  // Location of entity list.
  s3Uri?: string;
}

export function comprehend_EntityRecognizerInputDataConfigEntityList_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      's3Uri',
      'Location of entity list.',
      () => [],
      true,
      false,
    ),
  ];
}
