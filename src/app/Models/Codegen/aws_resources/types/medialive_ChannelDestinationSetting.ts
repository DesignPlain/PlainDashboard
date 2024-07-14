import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelDestinationSetting {
  // Key used to extract the password from EC2 Parameter store.
  passwordParam?: string;

  // Stream name RTMP destinations (URLs of type rtmp://)
  streamName?: string;

  // A URL specifying a destination.
  url?: string;

  // Username for destination.
  username?: string;
}

export function medialive_ChannelDestinationSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "username",
      "Username for destination.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "passwordParam",
      "Key used to extract the password from EC2 Parameter store.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "streamName",
      "Stream name RTMP destinations (URLs of type rtmp://)",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "url",
      "A URL specifying a destination.",
      [],
      false,
      false,
    ),
  ];
}
