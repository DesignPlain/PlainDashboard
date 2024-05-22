import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ObjectACLArgs {
  /*
List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Must be set if `predefined_acl` is not.
*/
  roleEntities?: Array<string>;

  // The name of the bucket the object is stored in.
  bucket?: string;

  /*
The name of the object to apply the acl to.

- - -
*/
  object?: string;

  // The "canned" [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
  predefinedAcl?: string;
}
export class ObjectACL extends Resource {
  // The name of the bucket the object is stored in.
  public bucket?: string;

  /*
The name of the object to apply the acl to.

- - -
*/
  public object?: string;

  // The "canned" [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.
  public predefinedAcl?: string;

  /*
List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Must be set if `predefined_acl` is not.
*/
  public roleEntities?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "roleEntities",
        "List of role/entity pairs in the form `ROLE:entity`. See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.\nMust be set if `predefined_acl` is not.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The name of the bucket the object is stored in.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "object",
        "The name of the object to apply the acl to.\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "predefinedAcl",
        'The "canned" [predefined ACL](https://cloud.google.com/storage/docs/access-control#predefined-acl) to apply. Must be set if `role_entity` is not.',
        [],
        false,
        false,
      ),
    ];
  }
}
