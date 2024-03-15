import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface BucketACLArgs {
  /*
The name of the bucket it applies to.

- - -
*/
  Bucket?: string;

  // Configure this ACL to be the default ACL.
  DefaultAcl?: string;

  // The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control/lists#predefined-acl) to apply. Must be set if `role_entity` is not.
  PredefinedAcl?: string;

  // List of role/entity pairs in the form `ROLE:entity`. See [GCS Bucket ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)  for more details. Must be set if `predefined_acl` is not.
  RoleEntities?: Array<string>;
}
export class BucketACL extends Resource {
  // The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control/lists#predefined-acl) to apply. Must be set if `role_entity` is not.
  public PredefinedAcl?: string;

  // List of role/entity pairs in the form `ROLE:entity`. See [GCS Bucket ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)  for more details. Must be set if `predefined_acl` is not.
  public RoleEntities?: Array<string>;

  /*
The name of the bucket it applies to.

- - -
*/
  public Bucket?: string;

  // Configure this ACL to be the default ACL.
  public DefaultAcl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The name of the bucket it applies to.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "DefaultAcl",
        "Configure this ACL to be the default ACL.",
      ),
      new DynamicUIProps(
        InputType.String,
        "PredefinedAcl",
        "The [canned GCS ACL](https://cloud.google.com/storage/docs/access-control/lists#predefined-acl) to apply. Must be set if `role_entity` is not.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "RoleEntities",
        "List of role/entity pairs in the form `ROLE:entity`. See [GCS Bucket ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/bucketAccessControls)  for more details. Must be set if `predefined_acl` is not.",
      ),
    ];
  }
}
