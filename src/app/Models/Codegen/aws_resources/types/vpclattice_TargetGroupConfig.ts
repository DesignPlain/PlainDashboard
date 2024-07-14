import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  vpclattice_TargetGroupConfigHealthCheck,
  vpclattice_TargetGroupConfigHealthCheck_GetTypes,
} from "./vpclattice_TargetGroupConfigHealthCheck";

export interface vpclattice_TargetGroupConfig {
  // The version of the event structure that the Lambda function receives. Supported only if `type` is `LAMBDA`. Valid Values are `V1` | `V2`.
  lambdaEventStructureVersion?: string;

  // The port on which the targets are listening.
  port?: number;

  // The protocol to use for routing traffic to the targets. Valid Values are `HTTP` | `HTTPS`.
  protocol?: string;

  // The protocol version. Valid Values are `HTTP1` | `HTTP2` | `GRPC`. Default value is `HTTP1`.
  protocolVersion?: string;

  // The ID of the VPC.
  vpcIdentifier?: string;

  // The health check configuration.
  healthCheck?: vpclattice_TargetGroupConfigHealthCheck;

  // The type of IP address used for the target group. Valid values: `IPV4` | `IPV6`.
  ipAddressType?: string;
}

export function vpclattice_TargetGroupConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "port",
      "The port on which the targets are listening.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocol",
      "The protocol to use for routing traffic to the targets. Valid Values are `HTTP` | `HTTPS`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "protocolVersion",
      "The protocol version. Valid Values are `HTTP1` | `HTTP2` | `GRPC`. Default value is `HTTP1`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "vpcIdentifier",
      "The ID of the VPC.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "healthCheck",
      "The health check configuration.",
      vpclattice_TargetGroupConfigHealthCheck_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ipAddressType",
      "The type of IP address used for the target group. Valid values: `IPV4` | `IPV6`.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "lambdaEventStructureVersion",
      "The version of the event structure that the Lambda function receives. Supported only if `type` is `LAMBDA`. Valid Values are `V1` | `V2`.",
      [],
      false,
      true,
    ),
  ];
}
