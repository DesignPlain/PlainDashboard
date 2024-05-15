import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Sql_DatabaseInstanceSettingsSqlServerAuditConfig {
  // The name of the destination bucket (e.g., gs://mybucket).
  Bucket?: string;

  // How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  RetentionInterval?: string;

  // How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  UploadInterval?: string;
}

export function Sql_DatabaseInstanceSettingsSqlServerAuditConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Bucket",
      "The name of the destination bucket (e.g., gs://mybucket).",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "RetentionInterval",
      "How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "UploadInterval",
      "How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      false,
      false,
    ),
  ];
}
