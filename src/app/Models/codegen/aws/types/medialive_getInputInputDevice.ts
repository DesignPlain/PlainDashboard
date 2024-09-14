import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface medialive_getInputInputDevice {
  // The ID of the Input.
  id?: string;
}

export function medialive_getInputInputDevice_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "id",
      "The ID of the Input.",
      () => [],
      true,
      false,
    ),
  ];
}
