import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface pinpoint_AppQuietTime {
  // The default end time for quiet time in ISO 8601 format. Required if `start` is set
  end?: string;

  // The default start time for quiet time in ISO 8601 format. Required if `end` is set
  start?: string;
}

export function pinpoint_AppQuietTime_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'end',
      'The default end time for quiet time in ISO 8601 format. Required if `start` is set',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'start',
      'The default start time for quiet time in ISO 8601 format. Required if `end` is set',
      () => [],
      false,
      false,
    ),
  ];
}
