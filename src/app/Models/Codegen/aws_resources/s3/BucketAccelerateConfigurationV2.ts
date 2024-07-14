import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface BucketAccelerateConfigurationV2Args {
  // Name of the bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;

  // Transfer acceleration state of the bucket. Valid values: `Enabled`, `Suspended`.
  status?: string;
}
export class BucketAccelerateConfigurationV2 extends Resource {
  // Name of the bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Transfer acceleration state of the bucket. Valid values: `Enabled`, `Suspended`.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account ID of the expected bucket owner.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "Transfer acceleration state of the bucket. Valid values: `Enabled`, `Suspended`.",
        [],
        true,
        false,
      ),
    ];
  }
}
