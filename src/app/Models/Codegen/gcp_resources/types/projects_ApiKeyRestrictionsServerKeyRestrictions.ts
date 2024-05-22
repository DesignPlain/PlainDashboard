import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface projects_ApiKeyRestrictionsServerKeyRestrictions {
  // A list of the caller IP addresses that are allowed to make API calls with this key.
  allowedIps?: Array<string>;
}

export function projects_ApiKeyRestrictionsServerKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedIps",
      "A list of the caller IP addresses that are allowed to make API calls with this key.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
