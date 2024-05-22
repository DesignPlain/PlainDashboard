import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3 {
  // The name of the S3 bucket that is the destination for log delivery.
  bucket?: string;

  // Whether log delivery to Amazon CloudWatch Logs is enabled.
  enabled?: boolean;

  // The S3 prefix that is the destination for log delivery.
  prefix?: string;
}

export function mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the S3 bucket that is the destination for log delivery.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether log delivery to Amazon CloudWatch Logs is enabled.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The S3 prefix that is the destination for log delivery.",
      [],
      false,
      true,
    ),
  ];
}
