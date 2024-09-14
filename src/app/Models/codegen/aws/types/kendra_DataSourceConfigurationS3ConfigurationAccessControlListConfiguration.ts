import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration {
  // Path to the AWS S3 bucket that contains the ACL files.
  keyPath?: string;
}

export function kendra_DataSourceConfigurationS3ConfigurationAccessControlListConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "keyPath",
      "Path to the AWS S3 bucket that contains the ACL files.",
      () => [],
      false,
      false,
    ),
  ];
}
