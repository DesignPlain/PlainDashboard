import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface msk_ClusterLoggingInfoBrokerLogsS3 {
  // Prefix to append to the folder name.
  prefix?: string;

  // Name of the S3 bucket to deliver logs to.
  bucket?: string;

  //
  enabled?: boolean;
}

export function msk_ClusterLoggingInfoBrokerLogsS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix to append to the folder name.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "Name of the S3 bucket to deliver logs to.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.Bool, "enabled", "", () => [], true, false),
  ];
}
