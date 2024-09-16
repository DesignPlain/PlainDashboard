import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketServerSideEncryptionConfigurationV2Rule,
  s3_BucketServerSideEncryptionConfigurationV2Rule_GetTypes,
} from '../types/s3_BucketServerSideEncryptionConfigurationV2Rule';

export interface BucketServerSideEncryptionConfigurationV2Args {
  // ID (name) of the bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;

  // Set of server-side encryption configuration rules. See below. Currently, only a single rule is supported.
  rules?: Array<s3_BucketServerSideEncryptionConfigurationV2Rule>;
}
export class BucketServerSideEncryptionConfigurationV2 extends DS_Resource {
  // ID (name) of the bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Set of server-side encryption configuration rules. See below. Currently, only a single rule is supported.
  public rules?: Array<s3_BucketServerSideEncryptionConfigurationV2Rule>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'ID (name) of the bucket.',
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
      new DynamicUIProps(
        InputType.Array,
        'rules',
        'Set of server-side encryption configuration rules. See below. Currently, only a single rule is supported.',
        () => s3_BucketServerSideEncryptionConfigurationV2Rule_GetTypes(),
        true,
        false,
      ),
    ];
  }
}
