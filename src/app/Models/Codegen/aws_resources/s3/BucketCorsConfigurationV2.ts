import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  s3_BucketCorsConfigurationV2CorsRule,
  s3_BucketCorsConfigurationV2CorsRule_GetTypes,
} from "../types/s3_BucketCorsConfigurationV2CorsRule";

export interface BucketCorsConfigurationV2Args {
  // Name of the bucket.
  bucket?: string;

  // Set of origins and methods (cross-origin access that you want to allow). See below. You can configure up to 100 rules.
  corsRules?: Array<s3_BucketCorsConfigurationV2CorsRule>;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;
}
export class BucketCorsConfigurationV2 extends Resource {
  // Name of the bucket.
  public bucket?: string;

  // Set of origins and methods (cross-origin access that you want to allow). See below. You can configure up to 100 rules.
  public corsRules?: Array<s3_BucketCorsConfigurationV2CorsRule>;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

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
        InputType.Array,
        "corsRules",
        "Set of origins and methods (cross-origin access that you want to allow). See below. You can configure up to 100 rules.",
        s3_BucketCorsConfigurationV2CorsRule_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "expectedBucketOwner",
        "Account ID of the expected bucket owner.",
        [],
        false,
        true,
      ),
    ];
  }
}
