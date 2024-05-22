import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings {
  // Indicates whether the distribution forwards and caches based on query strings.
  option?: boolean;

  // The specific query strings that the distribution forwards to the origin.
  queryStringsAllowedLists?: Array<string>;
}

export function lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "option",
      "Indicates whether the distribution forwards and caches based on query strings.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "queryStringsAllowedLists",
      "The specific query strings that the distribution forwards to the origin.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
