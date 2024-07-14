import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface alb_LoadBalancerConnectionLogs {
  // Boolean to enable / disable `connection_logs`. Defaults to `false`, even when `bucket` is specified.
  enabled?: boolean;

  // The S3 bucket prefix. Logs are stored in the root if not configured.
  prefix?: string;

  // The S3 bucket name to store the logs in.
  bucket?: string;
}

export function alb_LoadBalancerConnectionLogs_GetTypes(): DynamicUIProps[] {
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
      "Boolean to enable / disable `connection_logs`. Defaults to `false`, even when `bucket` is specified.",
      [],
      false,
      false,
    ),
  ];
}
