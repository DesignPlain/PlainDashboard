import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  fsx_DataRepositoryAssociationS3AutoImportPolicy,
  fsx_DataRepositoryAssociationS3AutoImportPolicy_GetTypes,
} from "./fsx_DataRepositoryAssociationS3AutoImportPolicy";
import {
  fsx_DataRepositoryAssociationS3AutoExportPolicy,
  fsx_DataRepositoryAssociationS3AutoExportPolicy_GetTypes,
} from "./fsx_DataRepositoryAssociationS3AutoExportPolicy";

export interface fsx_DataRepositoryAssociationS3 {
  // Specifies the type of updated objects that will be automatically imported from the linked S3 bucket to your file system. See the `events` configuration block.
  autoImportPolicy?: fsx_DataRepositoryAssociationS3AutoImportPolicy;

  // Specifies the type of updated objects that will be automatically exported from your file system to the linked S3 bucket. See the `events` configuration block.
  autoExportPolicy?: fsx_DataRepositoryAssociationS3AutoExportPolicy;
}

export function fsx_DataRepositoryAssociationS3_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "autoImportPolicy",
      "Specifies the type of updated objects that will be automatically imported from the linked S3 bucket to your file system. See the `events` configuration block.",
      () => fsx_DataRepositoryAssociationS3AutoImportPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "autoExportPolicy",
      "Specifies the type of updated objects that will be automatically exported from your file system to the linked S3 bucket. See the `events` configuration block.",
      () => fsx_DataRepositoryAssociationS3AutoExportPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
