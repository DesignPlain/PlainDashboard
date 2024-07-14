import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication,
  projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication_GetTypes,
} from "./projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication";

export interface projects_ApiKeyRestrictionsAndroidKeyRestrictions {
  // A list of Android applications that are allowed to make API calls with this key.
  allowedApplications?: Array<projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication>;
}

export function projects_ApiKeyRestrictionsAndroidKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedApplications",
      "A list of Android applications that are allowed to make API calls with this key.",
      projects_ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication_GetTypes(),
      true,
      false,
    ),
  ];
}
