import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lb_LoadBalancerAccessLogs {
  // The S3 bucket prefix. Logs are stored in the root if not configured.
  prefix?: string;

  // The S3 bucket name to store the logs in.
  bucket?: string;

  // Boolean to enable / disable `access_logs`. Defaults to `false`, even when `bucket` is specified.
  enabled?: boolean;
}

export function lb_LoadBalancerAccessLogs_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The S3 bucket prefix. Logs are stored in the root if not configured.",
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
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Boolean to enable / disable `access_logs`. Defaults to `false`, even when `bucket` is specified.",
      [],
      false,
      false,
    ),
  ];
}
