import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface BucketACLArgs {
  /*
The name of the bucket it applies to.

- - -
*/
  bucket?: string;

  // Configure this ACL to be the default ACL.
  defaultAcl?: string;

  // The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control/lists#predefined-acl) to apply. Must be set if `role_entity` is not.
  predefinedAcl?: string;

  // List of role/entity pairs in the form `ROLE:entity`. See [GCS Bucket ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)  for more details. Must be set if `predefined_acl` is not.
  roleEntities?: Array<string>;
}
export class BucketACL extends DS_Resource {
  /*
The name of the bucket it applies to.

- - -
*/
  public bucket?: string;

  // Configure this ACL to be the default ACL.
  public defaultAcl?: string;

  // The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control/lists#predefined-acl) to apply. Must be set if `role_entity` is not.
  public predefinedAcl?: string;

  // List of role/entity pairs in the form `ROLE:entity`. See [GCS Bucket ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)  for more details. Must be set if `predefined_acl` is not.
  public roleEntities?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'roleEntities',
        'List of role/entity pairs in the form `ROLE:entity`. See [GCS Bucket ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)  for more details. Must be set if `predefined_acl` is not.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucket',
        'The name of the bucket it applies to.\n\n- - -',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'defaultAcl',
        'Configure this ACL to be the default ACL.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'predefinedAcl',
        'The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control/lists#predefined-acl) to apply. Must be set if `role_entity` is not.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
