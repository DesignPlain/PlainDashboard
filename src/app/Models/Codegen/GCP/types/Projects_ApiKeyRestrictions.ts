import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Projects_ApiKeyRestrictionsAndroidKeyRestrictions,
  Projects_ApiKeyRestrictionsAndroidKeyRestrictions_GetTypes,
} from "./Projects_ApiKeyRestrictionsAndroidKeyRestrictions";
import {
  Projects_ApiKeyRestrictionsApiTarget,
  Projects_ApiKeyRestrictionsApiTarget_GetTypes,
} from "./Projects_ApiKeyRestrictionsApiTarget";
import {
  Projects_ApiKeyRestrictionsBrowserKeyRestrictions,
  Projects_ApiKeyRestrictionsBrowserKeyRestrictions_GetTypes,
} from "./Projects_ApiKeyRestrictionsBrowserKeyRestrictions";
import {
  Projects_ApiKeyRestrictionsIosKeyRestrictions,
  Projects_ApiKeyRestrictionsIosKeyRestrictions_GetTypes,
} from "./Projects_ApiKeyRestrictionsIosKeyRestrictions";
import {
  Projects_ApiKeyRestrictionsServerKeyRestrictions,
  Projects_ApiKeyRestrictionsServerKeyRestrictions_GetTypes,
} from "./Projects_ApiKeyRestrictionsServerKeyRestrictions";

export interface Projects_ApiKeyRestrictions {
  // The Android apps that are allowed to use the key.
  AndroidKeyRestrictions?: Projects_ApiKeyRestrictionsAndroidKeyRestrictions;

  // A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
  ApiTargets?: Array<Projects_ApiKeyRestrictionsApiTarget>;

  // The HTTP referrers (websites) that are allowed to use the key.
  BrowserKeyRestrictions?: Projects_ApiKeyRestrictionsBrowserKeyRestrictions;

  // The iOS apps that are allowed to use the key.
  IosKeyRestrictions?: Projects_ApiKeyRestrictionsIosKeyRestrictions;

  // The IP addresses of callers that are allowed to use the key.
  ServerKeyRestrictions?: Projects_ApiKeyRestrictionsServerKeyRestrictions;
}

export function Projects_ApiKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "AndroidKeyRestrictions",
      "The Android apps that are allowed to use the key.",
      Projects_ApiKeyRestrictionsAndroidKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ApiTargets",
      "A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.",
      Projects_ApiKeyRestrictionsApiTarget_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "BrowserKeyRestrictions",
      "The HTTP referrers (websites) that are allowed to use the key.",
      Projects_ApiKeyRestrictionsBrowserKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "IosKeyRestrictions",
      "The iOS apps that are allowed to use the key.",
      Projects_ApiKeyRestrictionsIosKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ServerKeyRestrictions",
      "The IP addresses of callers that are allowed to use the key.",
      Projects_ApiKeyRestrictionsServerKeyRestrictions_GetTypes(),
      false,
      false,
    ),
  ];
}
