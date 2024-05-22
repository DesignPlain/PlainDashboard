import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lightsail_DistributionCacheBehaviorSettingsForwardedCookies,
  lightsail_DistributionCacheBehaviorSettingsForwardedCookies_GetTypes,
} from "./lightsail_DistributionCacheBehaviorSettingsForwardedCookies";
import {
  lightsail_DistributionCacheBehaviorSettingsForwardedHeaders,
  lightsail_DistributionCacheBehaviorSettingsForwardedHeaders_GetTypes,
} from "./lightsail_DistributionCacheBehaviorSettingsForwardedHeaders";
import {
  lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings,
  lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings_GetTypes,
} from "./lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings";

export interface lightsail_DistributionCacheBehaviorSettings {
  // An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded. Detailed below
  forwardedHeaders?: lightsail_DistributionCacheBehaviorSettingsForwardedHeaders;

  // An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded. Detailed below
  forwardedQueryStrings?: lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings;

  // The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
  maximumTtl?: number;

  // The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.
  minimumTtl?: number;

  // The HTTP methods that are processed and forwarded to the distribution's origin.
  allowedHttpMethods?: string;

  // The HTTP method responses that are cached by your distribution.
  cachedHttpMethods?: string;

  // The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.
  defaultTtl?: number;

  // An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded. Detailed below
  forwardedCookies?: lightsail_DistributionCacheBehaviorSettingsForwardedCookies;
}

export function lightsail_DistributionCacheBehaviorSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "defaultTtl",
      "The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forwardedCookies",
      "An object that describes the cookies that are forwarded to the origin. Your content is cached based on the cookies that are forwarded. Detailed below",
      lightsail_DistributionCacheBehaviorSettingsForwardedCookies_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forwardedHeaders",
      "An object that describes the headers that are forwarded to the origin. Your content is cached based on the headers that are forwarded. Detailed below",
      lightsail_DistributionCacheBehaviorSettingsForwardedHeaders_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "forwardedQueryStrings",
      "An object that describes the query strings that are forwarded to the origin. Your content is cached based on the query strings that are forwarded. Detailed below",
      lightsail_DistributionCacheBehaviorSettingsForwardedQueryStrings_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maximumTtl",
      "The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "minimumTtl",
      "The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "allowedHttpMethods",
      "The HTTP methods that are processed and forwarded to the distribution's origin.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "cachedHttpMethods",
      "The HTTP method responses that are cached by your distribution.",
      [],
      false,
      false,
    ),
  ];
}
