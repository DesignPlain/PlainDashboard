import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc {
  /*
The name of the service to place in the gRPC HealthCheckRequest
(see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
If this is not specified, the default behavior is defined by gRPC.
*/
  Service?: string;

  /*
Port number to access on the container. Number must be in the range 1 to 65535.
If not specified, defaults to the same value as container.ports[0].containerPort.
*/
  Port?: number;
}

export function Cloudrunv2_getServiceTemplateContainerLivenessProbeGrpc_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Service",
      "The name of the service to place in the gRPC HealthCheckRequest\n(see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).\nIf this is not specified, the default behavior is defined by gRPC.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "Port",
      "Port number to access on the container. Number must be in the range 1 to 65535.\nIf not specified, defaults to the same value as container.ports[0].containerPort.",
      [],
      true,
      false,
    ),
  ];
}
