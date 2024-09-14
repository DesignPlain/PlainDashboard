import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface mskconnect_ConnectorLogDeliveryWorkerLogDeliveryS3 {
  // The name of the S3 bucket that is the destination for log delivery.
  bucket?: string;

  // Specifies whether connector logs get sent to the specified Amazon S3 destination.
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
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Specifies whether connector logs get sent to the specified Amazon S3 destination.",
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The S3 prefix that is the destination for log delivery.",
      () => [],
      false,
      true,
    ),
  ];
}
