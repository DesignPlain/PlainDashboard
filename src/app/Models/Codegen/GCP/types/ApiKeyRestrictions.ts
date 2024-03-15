import { ApiKeyRestrictionsBrowserKeyRestrictions } from "./ApiKeyRestrictionsBrowserKeyRestrictions";
import { ApiKeyRestrictionsIosKeyRestrictions } from "./ApiKeyRestrictionsIosKeyRestrictions";
import { ApiKeyRestrictionsServerKeyRestrictions } from "./ApiKeyRestrictionsServerKeyRestrictions";
import { ApiKeyRestrictionsAndroidKeyRestrictions } from "./ApiKeyRestrictionsAndroidKeyRestrictions";
import { ApiKeyRestrictionsApiTarget } from "./ApiKeyRestrictionsApiTarget";

export interface ApiKeyRestrictions {
  // The Android apps that are allowed to use the key.
  AndroidKeyRestrictions?: ApiKeyRestrictionsAndroidKeyRestrictions;

  // A restriction for a specific service and optionally one or more specific methods. Requests are allowed if they match any of these restrictions. If no restrictions are specified, all targets are allowed.
  ApiTargets?: Array<ApiKeyRestrictionsApiTarget>;

  // The HTTP referrers (websites) that are allowed to use the key.
  BrowserKeyRestrictions?: ApiKeyRestrictionsBrowserKeyRestrictions;

  // The iOS apps that are allowed to use the key.
  IosKeyRestrictions?: ApiKeyRestrictionsIosKeyRestrictions;

  // The IP addresses of callers that are allowed to use the key.
  ServerKeyRestrictions?: ApiKeyRestrictionsServerKeyRestrictions;
}
