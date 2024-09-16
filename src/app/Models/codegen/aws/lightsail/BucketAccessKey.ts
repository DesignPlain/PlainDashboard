import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BucketAccessKeyArgs {
  // The name of the bucket that the new access key will belong to, and grant access to.
  bucketName?: string;
}
export class BucketAccessKey extends DS_Resource {
  // The ID of the access key.
  public accessKeyId?: string;

  // The name of the bucket that the new access key will belong to, and grant access to.
  public bucketName?: string;

  // The timestamp when the access key was created.
  public createdAt?: string;

  // The secret access key used to sign requests. This attribute is not available for imported resources. Note that this will be written to the state file.
  public secretAccessKey?: string;

  // The status of the access key.
  public status?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'bucketName',
        'The name of the bucket that the new access key will belong to, and grant access to.',
        () => [],
        true,
        true,
      ),
    ];
  }
}
