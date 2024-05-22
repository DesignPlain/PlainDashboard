import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface globalaccelerator_CustomRoutingAcceleratorAttributes {
  // Indicates whether flow logs are enabled. Defaults to `false`. Valid values: `true`, `false`.
  flowLogsEnabled?: boolean;

  // The name of the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.
  flowLogsS3Bucket?: string;

  // The prefix for the location in the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.
  flowLogsS3Prefix?: string;
}

export function globalaccelerator_CustomRoutingAcceleratorAttributes_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "flowLogsEnabled",
      "Indicates whether flow logs are enabled. Defaults to `false`. Valid values: `true`, `false`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "flowLogsS3Bucket",
      "The name of the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "flowLogsS3Prefix",
      "The prefix for the location in the Amazon S3 bucket for the flow logs. Required if `flow_logs_enabled` is `true`.",
      [],
      false,
      false,
    ),
  ];
}
