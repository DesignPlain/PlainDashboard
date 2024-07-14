import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface DefaultObjectACLArgs {
  /*
List of role/entity pairs in the form `ROLE:entity`.
See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Omitting the field is the same as providing an empty list.
*/
  roleEntities?: Array<string>;

  // The name of the bucket it applies to.
  bucket?: string;
}
export class DefaultObjectACL extends Resource {
  // The name of the bucket it applies to.
  public bucket?: string;

  /*
List of role/entity pairs in the form `ROLE:entity`.
See [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.
Omitting the field is the same as providing an empty list.
*/
  public roleEntities?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "roleEntities",
        "List of role/entity pairs in the form `ROLE:entity`.\nSee [GCS Object ACL documentation](https://cloud.google.com/storage/docs/json_api/v1/objectAccessControls) for more details.\nOmitting the field is the same as providing an empty list.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "bucket",
        "The name of the bucket it applies to.",
        [],
        true,
        true,
      ),
    ];
  }
}
