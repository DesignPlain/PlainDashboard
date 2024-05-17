import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Storage_BucketLifecycleRuleAction {
  // The target [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of objects affected by this Lifecycle Rule. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.
  StorageClass?: string;

  // The type of the action of this Lifecycle Rule. Supported values include: `Delete`, `SetStorageClass` and `AbortIncompleteMultipartUpload`.
  Type?: string;
}

export function Storage_BucketLifecycleRuleAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "StorageClass",
      "The target [Storage Class](https://cloud.google.com/storage/docs/storage-classes) of objects affected by this Lifecycle Rule. Supported values include: `STANDARD`, `MULTI_REGIONAL`, `REGIONAL`, `NEARLINE`, `COLDLINE`, `ARCHIVE`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "The type of the action of this Lifecycle Rule. Supported values include: `Delete`, `SetStorageClass` and `AbortIncompleteMultipartUpload`.",
      [],
      true,
      false,
    ),
  ];
}
