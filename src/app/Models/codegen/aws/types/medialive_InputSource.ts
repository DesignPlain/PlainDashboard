import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface medialive_InputSource {
  // The key used to extract the password from EC2 Parameter store.
  passwordParam?: string;

  // The URL where the stream is pulled from.
  url?: string;

  // The username for the input source.
  username?: string;
}

export function medialive_InputSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'url',
      'The URL where the stream is pulled from.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'username',
      'The username for the input source.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'passwordParam',
      'The key used to extract the password from EC2 Parameter store.',
      () => [],
      true,
      false,
    ),
  ];
}
