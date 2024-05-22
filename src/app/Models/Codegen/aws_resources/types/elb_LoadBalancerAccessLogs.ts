import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elb_LoadBalancerAccessLogs {
  // The S3 bucket name to store the logs in.
  bucket?: string;

  // The S3 bucket prefix. Logs are stored in the root if not configured.
  bucketPrefix?: string;

  // Boolean to enable / disable `access_logs`. Default is `true`
  enabled?: boolean;

  // The publishing interval in minutes. Valid values: `5` and `60`. Default: `60`
  interval?: number;
}

export function elb_LoadBalancerAccessLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketPrefix",
      "The S3 bucket prefix. Logs are stored in the root if not configured.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean to enable / disable `access_logs`. Default is `true`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "interval",
      "The publishing interval in minutes. Valid values: `5` and `60`. Default: `60`",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The S3 bucket name to store the logs in.",
      [],
      true,
      false,
    ),
  ];
}
