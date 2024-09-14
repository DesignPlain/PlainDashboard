import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface apprunner_ServiceHealthCheckConfiguration {
  // Number of consecutive checks that must fail before App Runner decides that the service is unhealthy. Defaults to 5. Minimum value of  1. Maximum value of 20.
  unhealthyThreshold?: number;

  // Number of consecutive checks that must succeed before App Runner decides that the service is healthy. Defaults to 1. Minimum value of 1. Maximum value of 20.
  healthyThreshold?: number;

  // Time interval, in seconds, between health checks. Defaults to 5. Minimum value of 1. Maximum value of 20.
  interval?: number;

  // URL to send requests to for health checks. Defaults to `/`. Minimum length of 0. Maximum length of 51200.
  path?: string;

  // IP protocol that App Runner uses to perform health checks for your service. Valid values: `TCP`, `HTTP`. Defaults to `TCP`. If you set protocol to `HTTP`, App Runner sends health check requests to the HTTP path specified by `path`.
  protocol?: string;

  // Time, in seconds, to wait for a health check response before deciding it failed. Defaults to 2. Minimum value of  1. Maximum value of 20.
  timeout?: number;
}

export function apprunner_ServiceHealthCheckConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "Number of consecutive checks that must succeed before App Runner decides that the service is healthy. Defaults to 1. Minimum value of 1. Maximum value of 20.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "Time interval, in seconds, between health checks. Defaults to 5. Minimum value of 1. Maximum value of 20.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "URL to send requests to for health checks. Defaults to `/`. Minimum length of 0. Maximum length of 51200.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "IP protocol that App Runner uses to perform health checks for your service. Valid values: `TCP`, `HTTP`. Defaults to `TCP`. If you set protocol to `HTTP`, App Runner sends health check requests to the HTTP path specified by `path`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeout",
      "Time, in seconds, to wait for a health check response before deciding it failed. Defaults to 2. Minimum value of  1. Maximum value of 20.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "Number of consecutive checks that must fail before App Runner decides that the service is unhealthy. Defaults to 5. Minimum value of  1. Maximum value of 20.",
      () => [],
      false,
      false,
    ),
  ];
}
