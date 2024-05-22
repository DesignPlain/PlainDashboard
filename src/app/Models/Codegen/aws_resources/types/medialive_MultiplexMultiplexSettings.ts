import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface medialive_MultiplexMultiplexSettings {
  // Maximum video buffer delay.
  maximumVideoBufferDelayMilliseconds?: number;

  // Transport stream bit rate.
  transportStreamBitrate?: number;

  // Unique ID for each multiplex.
  transportStreamId?: number;

  // Transport stream reserved bit rate.
  transportStreamReservedBitrate?: number;
}

export function medialive_MultiplexMultiplexSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumVideoBufferDelayMilliseconds",
      "Maximum video buffer delay.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamBitrate",
      "Transport stream bit rate.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamId",
      "Unique ID for each multiplex.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamReservedBitrate",
      "Transport stream reserved bit rate.",
      [],
      false,
      false,
    ),
  ];
}
