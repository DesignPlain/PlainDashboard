import { ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication } from "./ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication";

export interface ApiKeyRestrictionsAndroidKeyRestrictions {
  // A list of Android applications that are allowed to make API calls with this key.
  AllowedApplications?: Array<ApiKeyRestrictionsAndroidKeyRestrictionsAllowedApplication>;
}
