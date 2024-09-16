import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BucketRequestPaymentConfigurationV2Args {
  // Specifies who pays for the download and request fees. Valid values: `BucketOwner`, `Requester`.
  payer?: string;

  // Name of the bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;
}
export class BucketRequestPaymentConfigurationV2 extends DS_Resource {
  // Name of the bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Specifies who pays for the download and request fees. Valid values: `BucketOwner`, `Requester`.
  public payer?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'payer',
        'Specifies who pays for the download and request fees. Valid values: `BucketOwner`, `Requester`.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the bucket.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'expectedBucketOwner',
        'Account ID of the expected bucket owner.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
