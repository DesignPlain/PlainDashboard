import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  projects_ApiKeyRestrictionsAndroidKeyRestrictions,
  projects_ApiKeyRestrictionsAndroidKeyRestrictions_GetTypes,
} from './projects_ApiKeyRestrictionsAndroidKeyRestrictions';
import {
  projects_ApiKeyRestrictionsApiTarget,
  projects_ApiKeyRestrictionsApiTarget_GetTypes,
} from './projects_ApiKeyRestrictionsApiTarget';
import {
  projects_ApiKeyRestrictionsBrowserKeyRestrictions,
  projects_ApiKeyRestrictionsBrowserKeyRestrictions_GetTypes,
} from './projects_ApiKeyRestrictionsBrowserKeyRestrictions';
import {
  projects_ApiKeyRestrictionsIosKeyRestrictions,
  projects_ApiKeyRestrictionsIosKeyRestrictions_GetTypes,
} from './projects_ApiKeyRestrictionsIosKeyRestrictions';
import {
  projects_ApiKeyRestrictionsServerKeyRestrictions,
  projects_ApiKeyRestrictionsServerKeyRestrictions_GetTypes,
} from './projects_ApiKeyRestrictionsServerKeyRestrictions';

export interface projects_ApiKeyRestrictions {
  // The HTTP referrers (websites) that are allowed to use the key.
  browserKeyRestrictions?: projects_ApiKeyRestrictionsBrowserKeyRestrictions;

  // The iOS apps that are allowed to use the key.
  iosKeyRestrictions?: projects_ApiKeyRestrictionsIosKeyRestrictions;

  // The IP addresses of callers that are allowed to use the key.
  serverKeyRestrictions?: projects_ApiKeyRestrictionsServerKeyRestrictions;

  // The Android apps that are allowed to use the key.
  androidKeyRestrictions?: projects_ApiKeyRestrictionsAndroidKeyRestrictions;

  // A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
  apiTargets?: Array<projects_ApiKeyRestrictionsApiTarget>;
}

export function projects_ApiKeyRestrictions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'browserKeyRestrictions',
      'The HTTP referrers (websites) that are allowed to use the key.',
      () => projects_ApiKeyRestrictionsBrowserKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'iosKeyRestrictions',
      'The iOS apps that are allowed to use the key.',
      () => projects_ApiKeyRestrictionsIosKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'serverKeyRestrictions',
      'The IP addresses of callers that are allowed to use the key.',
      () => projects_ApiKeyRestrictionsServerKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'androidKeyRestrictions',
      'The Android apps that are allowed to use the key.',
      () => projects_ApiKeyRestrictionsAndroidKeyRestrictions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'apiTargets',
      'A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.',
      () => projects_ApiKeyRestrictionsApiTarget_GetTypes(),
      false,
      false,
    ),
  ];
}
