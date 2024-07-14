import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3_BucketOwnershipControlsRule,
  s3_BucketOwnershipControlsRule_GetTypes,
} from "../types/s3_BucketOwnershipControlsRule";

export interface BucketOwnershipControlsArgs {
  // Configuration block(s) with Ownership Controls rules. Detailed below.
  rule?: s3_BucketOwnershipControlsRule;

  // Name of the bucket that you want to associate this access point with.
  bucket?: string;
}
export class BucketOwnershipControls extends Resource {
  // Name of the bucket that you want to associate this access point with.
  public bucket?: string;

  // Configuration block(s) with Ownership Controls rules. Detailed below.
  public rule?: s3_BucketOwnershipControlsRule;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Name of the bucket that you want to associate this access point with.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rule",
        "Configuration block(s) with Ownership Controls rules. Detailed below.",
        s3_BucketOwnershipControlsRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
