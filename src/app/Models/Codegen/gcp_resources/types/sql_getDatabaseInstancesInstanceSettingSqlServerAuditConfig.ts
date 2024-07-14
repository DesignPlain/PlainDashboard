import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig {
  // The name of the destination bucket (e.g., gs://mybucket).
  bucket?: string;

  // How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s"..
  retentionInterval?: string;

  // How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  uploadInterval?: string;
}

export function sql_getDatabaseInstancesInstanceSettingSqlServerAuditConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucket",
      "The name of the destination bucket (e.g., gs://mybucket).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "retentionInterval",
      "How long to keep generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\"..",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "uploadInterval",
      "How often to upload generated audit files. A duration in seconds with up to nine fractional digits, terminated by 's'. Example: \"3.5s\".",
      [],
      true,
      false,
    ),
  ];
}
