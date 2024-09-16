import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BucketPolicyArgs {
  // Amazon Resource Name (ARN) of the bucket.
  bucket?: string;

  // JSON string of the resource policy.
  policy?: string;
}
export class BucketPolicy extends DS_Resource {
  // Amazon Resource Name (ARN) of the bucket.
  public bucket?: string;

  // JSON string of the resource policy.
  public policy?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Amazon Resource Name (ARN) of the bucket.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'policy',
        'JSON string of the resource policy.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
