import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface datastream_PrivateConnectionError {
  // A message containing more information about the error that occurred.
  message?: string;

  // A list of messages that carry the error details.
  details?: Map<string, string>;
}

export function datastream_PrivateConnectionError_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'message',
      'A message containing more information about the error that occurred.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'details',
      'A list of messages that carry the error details.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
