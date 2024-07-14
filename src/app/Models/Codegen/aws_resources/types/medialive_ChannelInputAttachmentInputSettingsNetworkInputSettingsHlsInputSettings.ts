import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings {
  // The bitrate is specified in bits per second, as in an HLS manifest.
  bandwidth?: number;

  // Buffer segments.
  bufferSegments?: number;

  // The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.
  retries?: number;

  // The number of seconds between retries when an attempt to read a manifest or segment fails.
  retryInterval?: number;

  //
  scte35Source?: string;
}

export function medialive_ChannelInputAttachmentInputSettingsNetworkInputSettingsHlsInputSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "bandwidth",
      "The bitrate is specified in bits per second, as in an HLS manifest.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "bufferSegments",
      "Buffer segments.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retries",
      "The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "retryInterval",
      "The number of seconds between retries when an attempt to read a manifest or segment fails.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "scte35Source", "", [], false, false),
  ];
}
