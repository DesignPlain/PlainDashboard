import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ObjectACLArgs {
  // The name of the bucket the object is stored in.
  Bucket?: string;

  /*
The name of the object to apply the acl to.

- - -
*/
  Object?: string;

  // The "canned" [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
  PredefinedAcl?: string;

  /*
List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Must be set if `predefined_acl` is not.
*/
  RoleEntities?: Array<string>;
}
export class ObjectACL extends Resource {
  /*
List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Must be set if `predefined_acl` is not.
*/
  public RoleEntities?: Array<string>;

  // The name of the bucket the object is stored in.
  public Bucket?: string;

  /*
The name of the object to apply the acl to.

- - -
*/
  public Object?: string;

  // The "canned" [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
  public PredefinedAcl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "PredefinedAcl",
        'The "canned" [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.',
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "RoleEntities",
        "List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.\nMust be set if `predefined_acl` is not.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The name of the bucket the object is stored in.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Object",
        "The name of the object to apply the acl to.\n\n- - -",
      ),
    ];
  }
}
