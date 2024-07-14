import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg,
  s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationDataExport,
  s3control_StorageLensConfigurationStorageLensConfigurationDataExport_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationDataExport";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationExclude,
  s3control_StorageLensConfigurationStorageLensConfigurationExclude_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationExclude";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationInclude,
  s3control_StorageLensConfigurationStorageLensConfigurationInclude_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationInclude";
import {
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel,
  s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel_GetTypes,
} from "./s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel";

export interface s3control_StorageLensConfigurationStorageLensConfiguration {
  // What is included in this configuration. Conflicts with `exclude`. See Include below for more details.
  include?: s3control_StorageLensConfigurationStorageLensConfigurationInclude;

  // The account-level configurations of the S3 Storage Lens configuration. See Account Level below for more details.
  accountLevel?: s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel;

  // The Amazon Web Services organization for the S3 Storage Lens configuration. See AWS Org below for more details.
  awsOrg?: s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg;

  // Properties of S3 Storage Lens metrics export including the destination, schema and format. See Data Export below for more details.
  dataExport?: s3control_StorageLensConfigurationStorageLensConfigurationDataExport;

  // Whether the S3 Storage Lens configuration is enabled.
  enabled?: boolean;

  // What is excluded in this configuration. Conflicts with `include`. See Exclude below for more details.
  exclude?: s3control_StorageLensConfigurationStorageLensConfigurationExclude;
}

export function s3control_StorageLensConfigurationStorageLensConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "include",
      "What is included in this configuration. Conflicts with `exclude`. See Include below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationInclude_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "accountLevel",
      "The account-level configurations of the S3 Storage Lens configuration. See Account Level below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAccountLevel_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "awsOrg",
      "The Amazon Web Services organization for the S3 Storage Lens configuration. See AWS Org below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationAwsOrg_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "dataExport",
      "Properties of S3 Storage Lens metrics export including the destination, schema and format. See Data Export below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationDataExport_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enabled",
      "Whether the S3 Storage Lens configuration is enabled.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "exclude",
      "What is excluded in this configuration. Conflicts with `include`. See Exclude below for more details.",
      s3control_StorageLensConfigurationStorageLensConfigurationExclude_GetTypes(),
      false,
      false,
    ),
  ];
}
