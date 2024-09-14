import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firestore_IndexField,
  firestore_IndexField_GetTypes,
} from "../types/firestore_IndexField";

export interface IndexArgs {
  /*
The API scope at which a query is run.
Default value is `ANY_API`.
Possible values are: `ANY_API`, `DATASTORE_MODE_API`.
*/
  apiScope?: string;

  // The collection being indexed.
  collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  database?: string;

  /*
The fields supported by this index. The last field entry is always for
the field path `__name__`. If, on creation, `__name__` was not
specified as the last field, it will be added automatically with the
same direction as that of the last field defined. If the final field
in a composite index is not directional, the `__name__` will be
ordered `"ASCENDING"` (unless explicitly specified otherwise).
Structure is documented below.
*/
  fields?: Array<firestore_IndexField>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The scope at which a query is run.
Default value is `COLLECTION`.
Possible values are: `COLLECTION`, `COLLECTION_GROUP`, `COLLECTION_RECURSIVE`.
*/
  queryScope?: string;
}
export class Index extends DS_Resource {
  /*
The API scope at which a query is run.
Default value is `ANY_API`.
Possible values are: `ANY_API`, `DATASTORE_MODE_API`.
*/
  public apiScope?: string;

  // The collection being indexed.
  public collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  public database?: string;

  /*
The fields supported by this index. The last field entry is always for
the field path `__name__`. If, on creation, `__name__` was not
specified as the last field, it will be added automatically with the
same direction as that of the last field defined. If the final field
in a composite index is not directional, the `__name__` will be
ordered `"ASCENDING"` (unless explicitly specified otherwise).
Structure is documented below.
*/
  public fields?: Array<firestore_IndexField>;

  /*
A server defined name for this index. Format:
`projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/indexes/{{server_generated_id}}`
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The scope at which a query is run.
Default value is `COLLECTION`.
Possible values are: `COLLECTION`, `COLLECTION_GROUP`, `COLLECTION_RECURSIVE`.
*/
  public queryScope?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "apiScope",
        "The API scope at which a query is run.\nDefault value is `ANY_API`.\nPossible values are: `ANY_API`, `DATASTORE_MODE_API`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "collection",
        "The collection being indexed.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "database",
        'The Firestore database id. Defaults to `"(default)"`.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "fields",
        'The fields supported by this index. The last field entry is always for\nthe field path `__name__`. If, on creation, `__name__` was not\nspecified as the last field, it will be added automatically with the\nsame direction as that of the last field defined. If the final field\nin a composite index is not directional, the `__name__` will be\nordered `"ASCENDING"` (unless explicitly specified otherwise).\nStructure is documented below.',
        () => firestore_IndexField_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "queryScope",
        "The scope at which a query is run.\nDefault value is `COLLECTION`.\nPossible values are: `COLLECTION`, `COLLECTION_GROUP`, `COLLECTION_RECURSIVE`.",
        () => [],
        false,
        true,
      ),
    ];
  }
}
