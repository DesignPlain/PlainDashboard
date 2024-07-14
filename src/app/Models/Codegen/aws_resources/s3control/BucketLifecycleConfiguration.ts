import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  s3control_BucketLifecycleConfigurationRule,
  s3control_BucketLifecycleConfigurationRule_GetTypes,
} from "../types/s3control_BucketLifecycleConfigurationRule";

export interface BucketLifecycleConfigurationArgs {
  // Amazon Resource Name (ARN) of the bucket.
  bucket?: string;

  // Configuration block(s) containing lifecycle rules for the bucket.
  rules?: Array<s3control_BucketLifecycleConfigurationRule>;
}
export class BucketLifecycleConfiguration extends Resource {
  // Amazon Resource Name (ARN) of the bucket.
  public bucket?: string;

  // Configuration block(s) containing lifecycle rules for the bucket.
  public rules?: Array<s3control_BucketLifecycleConfigurationRule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "Amazon Resource Name (ARN) of the bucket.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "rules",
        "Configuration block(s) containing lifecycle rules for the bucket.",
        s3control_BucketLifecycleConfigurationRule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
