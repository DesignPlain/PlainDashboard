import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface compute_HealthCheckGrpcHealthCheck {
  /*
Specifies how port is selected for health checking, can be one of the
following values:
*/
  portSpecification?: string;

  /*
The gRPC service name for the health check.
The value of grpcServiceName has the following meanings by convention:
- Empty serviceName means the overall status of all services at the backend.
- Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.
The grpcServiceName can only be ASCII.
*/
  grpcServiceName?: string;

  /*
The port number for the health check request.
Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.
*/
  port?: number;

  /*
Port name as defined in InstanceGroup#NamedPort#name. If both port and
port_name are defined, port takes precedence.
*/
  portName?: string;
}

export function compute_HealthCheckGrpcHealthCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "portSpecification",
      "Specifies how port is selected for health checking, can be one of the\nfollowing values:",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "grpcServiceName",
      "The gRPC service name for the health check.\nThe value of grpcServiceName has the following meanings by convention:\n- Empty serviceName means the overall status of all services at the backend.\n- Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.\nThe grpcServiceName can only be ASCII.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port number for the health check request.\nMust be specified if portName and portSpecification are not set\nor if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "portName",
      "Port name as defined in InstanceGroup#NamedPort#name. If both port and\nport_name are defined, port takes precedence.",
      [],
      false,
      false,
    ),
  ];
}
