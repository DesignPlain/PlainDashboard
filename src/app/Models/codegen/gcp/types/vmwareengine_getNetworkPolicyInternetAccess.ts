import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface vmwareengine_getNetworkPolicyInternetAccess {
  // True if the service is enabled; false otherwise.
  enabled?: boolean;

  // State of the service. New values may be added to this enum when appropriate.
  state?: string;
}

export function vmwareengine_getNetworkPolicyInternetAccess_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "state",
      "State of the service. New values may be added to this enum when appropriate.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "True if the service is enabled; false otherwise.",
      () => [],
      true,
      false,
    ),
  ];
}
