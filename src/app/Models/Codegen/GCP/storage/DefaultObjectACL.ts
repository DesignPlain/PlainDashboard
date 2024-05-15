import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DefaultObjectACLArgs {
  // The name of the bucket it applies to.
  Bucket?: string;

  /*
List of role/entity pairs in the form `ROLE:entity`.
See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Omitting the field is the same as providing an empty list.
*/
  RoleEntities?: Array<string>;
}
export class DefaultObjectACL extends Resource {
  // The name of the bucket it applies to.
  public Bucket?: string;

  /*
List of role/entity pairs in the form `ROLE:entity`.
See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Omitting the field is the same as providing an empty list.
*/
  public RoleEntities?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Bucket",
        "The name of the bucket it applies to.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "RoleEntities",
        "List of role/entity pairs in the form `ROLE:entity`.\nSee [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.\nOmitting the field is the same as providing an empty list.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
