import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck {
  // The number of consecutive health checks failures required before moving the container to the Unhealthy state. Defaults to 2.
  unhealthyThreshold?: number;

  // The number of consecutive health checks successes required before moving the container to the Healthy state. Defaults to 2.
  healthyThreshold?: number;

  // The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. Defaults to 5.
  intervalSeconds?: number;

  // The path on the container on which to perform the health check. Defaults to "/".
  path?: string;

  // The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. Defaults to "200-499".
  successCodes?: string;

  // The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. Defaults to 2.
  timeoutSeconds?: number;
}

export function lightsail_ContainerServiceDeploymentVersionPublicEndpointHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "The number of consecutive health checks failures required before moving the container to the Unhealthy state. Defaults to 2.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "The number of consecutive health checks successes required before moving the container to the Healthy state. Defaults to 2.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "intervalSeconds",
      "The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. Defaults to 5.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      'The path on the container on which to perform the health check. Defaults to "/".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "successCodes",
      'The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. Defaults to "200-499".',
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutSeconds",
      "The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. Defaults to 2.",
      [],
      false,
      true,
    ),
  ];
}
