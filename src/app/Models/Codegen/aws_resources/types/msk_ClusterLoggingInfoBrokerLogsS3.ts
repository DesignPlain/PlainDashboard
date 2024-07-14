import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface msk_ClusterLoggingInfoBrokerLogsS3 {
  // Name of the S3 bucket to deliver logs to.
  bucket?: string;

  // Controls whether provisioned throughput is enabled or not. Default value: `false`.
  enabled?: boolean;

  // Prefix to append to the folder name.
  prefix?: string;
}

export function msk_ClusterLoggingInfoBrokerLogsS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket to deliver logs to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Controls whether provisioned throughput is enabled or not. Default value: `false`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix to append to the folder name.",
      [],
      false,
      false,
    ),
  ];
}
