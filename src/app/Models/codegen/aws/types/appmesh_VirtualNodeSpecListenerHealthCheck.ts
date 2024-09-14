import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appmesh_VirtualNodeSpecListenerHealthCheck {
  // Amount of time to wait when receiving a response from the health check, in milliseconds.
  timeoutMillis?: number;

  // Number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.
  unhealthyThreshold?: number;

  // Number of consecutive successful health checks that must occur before declaring listener healthy.
  healthyThreshold?: number;

  // Time period in milliseconds between each health check execution.
  intervalMillis?: number;

  // Destination path for the health check request. This is only required if the specified protocol is `http` or `http2`.
  path?: string;

  // Destination port for the health check request. This port must match the port defined in the `port_mapping` for the listener.
  port?: number;

  // Protocol for the health check request. Valid values are `http`, `http2`, `tcp` and `grpc`.
  protocol?: string;
}

export function appmesh_VirtualNodeSpecListenerHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "healthyThreshold",
      "Number of consecutive successful health checks that must occur before declaring listener healthy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "intervalMillis",
      "Time period in milliseconds between each health check execution.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "Destination path for the health check request. This is only required if the specified protocol is `http` or `http2`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "Destination port for the health check request. This port must match the port defined in the `port_mapping` for the listener.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "Protocol for the health check request. Valid values are `http`, `http2`, `tcp` and `grpc`.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeoutMillis",
      "Amount of time to wait when receiving a response from the health check, in milliseconds.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "unhealthyThreshold",
      "Number of consecutive failed health checks that must occur before declaring a virtual node unhealthy.",
      () => [],
      true,
      false,
    ),
  ];
}
