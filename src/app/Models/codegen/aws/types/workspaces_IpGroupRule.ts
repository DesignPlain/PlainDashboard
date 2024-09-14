import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface workspaces_IpGroupRule {
  // The description of the IP group.
  description?: string;

  // The IP address range, in CIDR notation, e.g., `10.0.0.0/16`
  source?: string;
}

export function workspaces_IpGroupRule_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the IP group.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "source",
      "The IP address range, in CIDR notation, e.g., `10.0.0.0/16`",
      () => [],
      true,
      false,
    ),
  ];
}
