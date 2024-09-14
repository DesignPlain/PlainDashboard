import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface codebuild_ReportGroupExportConfigS3Destination {
  // The name of the S3 bucket where the raw data of a report are exported.
  bucket?: string;

  /*
A boolean value that specifies if the results of a report are encrypted.
--Note: the API does not currently allow setting encryption as disabled--
*/
  encryptionDisabled?: boolean;

  // The encryption key for the report's encrypted raw data. The KMS key ARN.
  encryptionKey?: string;

  // The type of build output artifact to create. Valid values are: `NONE` (default) and `ZIP`.
  packaging?: string;

  // The path to the exported report's raw data results.
  path?: string;
}

export function codebuild_ReportGroupExportConfigS3Destination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the S3 bucket where the raw data of a report are exported.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "encryptionDisabled",
      "A boolean value that specifies if the results of a report are encrypted.\n**Note: the API does not currently allow setting encryption as disabled**",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "encryptionKey",
      "The encryption key for the report's encrypted raw data. The KMS key ARN.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "packaging",
      "The type of build output artifact to create. Valid values are: `NONE` (default) and `ZIP`.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "path",
      "The path to the exported report's raw data results.",
      () => [],
      false,
      false,
    ),
  ];
}
