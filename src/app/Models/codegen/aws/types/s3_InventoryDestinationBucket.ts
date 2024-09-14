import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_InventoryDestinationBucketEncryption,
  s3_InventoryDestinationBucketEncryption_GetTypes,
} from "./s3_InventoryDestinationBucketEncryption";

export interface s3_InventoryDestinationBucket {
  // ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes.
  accountId?: string;

  // Amazon S3 bucket ARN of the destination.
  bucketArn?: string;

  // Contains the type of server-side encryption to use to encrypt the inventory (documented below).
  encryption?: s3_InventoryDestinationBucketEncryption;

  // Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/).
  format?: string;

  // Prefix that is prepended to all inventory results.
  prefix?: string;
}

export function s3_InventoryDestinationBucket_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accountId",
      "ID of the account that owns the destination bucket. Recommended to be set to prevent problems if the destination bucket ownership changes.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "bucketArn",
      "Amazon S3 bucket ARN of the destination.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "encryption",
      "Contains the type of server-side encryption to use to encrypt the inventory (documented below).",
      () => s3_InventoryDestinationBucketEncryption_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "format",
      "Specifies the output format of the inventory results. Can be `CSV`, [`ORC`](https://orc.apache.org/) or [`Parquet`](https://parquet.apache.org/).",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "prefix",
      "Prefix that is prepended to all inventory results.",
      () => [],
      false,
      false,
    ),
  ];
}
