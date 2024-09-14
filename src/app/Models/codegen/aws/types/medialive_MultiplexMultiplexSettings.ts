import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_MultiplexMultiplexSettings {
  // Unique ID for each multiplex.
  transportStreamId?: number;

  // Transport stream reserved bit rate.
  transportStreamReservedBitrate?: number;

  // Maximum video buffer delay.
  maximumVideoBufferDelayMilliseconds?: number;

  // Transport stream bit rate.
  transportStreamBitrate?: number;
}

export function medialive_MultiplexMultiplexSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maximumVideoBufferDelayMilliseconds",
      "Maximum video buffer delay.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamBitrate",
      "Transport stream bit rate.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamId",
      "Unique ID for each multiplex.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "transportStreamReservedBitrate",
      "Transport stream reserved bit rate.",
      () => [],
      false,
      false,
    ),
  ];
}
