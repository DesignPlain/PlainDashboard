import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface transfer_AccessHomeDirectoryMapping {
  // Represents an entry and a target.
  entry?: string;

  // Represents the map target.
  target?: string;
}

export function transfer_AccessHomeDirectoryMapping_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "target",
      "Represents the map target.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "entry",
      "Represents an entry and a target.",
      () => [],
      true,
      false,
    ),
  ];
}
