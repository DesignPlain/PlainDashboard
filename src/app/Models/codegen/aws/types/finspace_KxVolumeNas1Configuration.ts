import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface finspace_KxVolumeNas1Configuration {
  // The size of the network attached storage.
  size?: number;

  // The type of the network attached storage.
  type?: string;
}

export function finspace_KxVolumeNas1Configuration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "size",
      "The size of the network attached storage.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "The type of the network attached storage.",
      () => [],
      true,
      true,
    ),
  ];
}
