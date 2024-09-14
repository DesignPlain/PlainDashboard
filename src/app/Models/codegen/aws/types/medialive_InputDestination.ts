import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_InputDestination {
  // A unique name for the location the RTMP stream is being pushed to.
  streamName?: string;
}

export function medialive_InputDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "streamName",
      "A unique name for the location the RTMP stream is being pushed to.",
      () => [],
      true,
      false,
    ),
  ];
}
