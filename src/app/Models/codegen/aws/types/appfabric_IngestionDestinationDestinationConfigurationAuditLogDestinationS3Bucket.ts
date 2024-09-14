import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket {
  //
  bucketName?: string;

  // The object key to use.
  prefix?: string;
}

export function appfabric_IngestionDestinationDestinationConfigurationAuditLogDestinationS3Bucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "bucketName",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "The object key to use.",
      () => [],
      false,
      false,
    ),
  ];
}
