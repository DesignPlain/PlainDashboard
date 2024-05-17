import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication,
  Projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication_GetTypes,
} from "./Projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication";

export interface Projects_ApiKeyRestrictionsAndroidKeyRestrictions {
  // A list of Android applications that are allowed to make API calls with this key.
  AllowedApplications?: Array<Projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication>;
}

export function Projects_ApiKeyRestrictionsAndroidKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedApplications",
      "A list of Android applications that are allowed to make API calls with this key.",
      Projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication_GetTypes(),
      true,
      false,
    ),
  ];
}
