import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  s3_BucketVersioningV2VersioningConfiguration,
  s3_BucketVersioningV2VersioningConfiguration_GetTypes,
} from '../types/s3_BucketVersioningV2VersioningConfiguration';

export interface BucketVersioningV2Args {
  // Concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
  mfa?: string;

  // Configuration block for the versioning parameters. See below.
  versioningConfiguration?: s3_BucketVersioningV2VersioningConfiguration;

  // Name of the S3 bucket.
  bucket?: string;

  // Account ID of the expected bucket owner.
  expectedBucketOwner?: string;
}
export class BucketVersioningV2 extends DS_Resource {
  // Name of the S3 bucket.
  public bucket?: string;

  // Account ID of the expected bucket owner.
  public expectedBucketOwner?: string;

  // Concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.
  public mfa?: string;

  // Configuration block for the versioning parameters. See below.
  public versioningConfiguration?: s3_BucketVersioningV2VersioningConfiguration;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'mfa',
        "Concatenation of the authentication device's serial number, a space, and the value that is displayed on your authentication device.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'versioningConfiguration',
        'Configuration block for the versioning parameters. See below.',
        () => s3_BucketVersioningV2VersioningConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'Name of the S3 bucket.',
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
