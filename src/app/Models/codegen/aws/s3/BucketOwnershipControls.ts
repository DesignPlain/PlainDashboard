import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  s3_BucketOwnershipControlsRule,
  s3_BucketOwnershipControlsRule_GetTypes,
} from "../types/s3_BucketOwnershipControlsRule";

export interface BucketOwnershipControlsArgs {
  // Name of the bucket that you want to associate this access point with.
  bucket?: string;

  // Configuration block(s) with Ownership Controls rules. Detailed below.
  rule?: s3_BucketOwnershipControlsRule;
}
export class BucketOwnershipControls extends DS_Resource {
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
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "rule",
        "Configuration block(s) with Ownership Controls rules. Detailed below.",
        () => s3_BucketOwnershipControlsRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
