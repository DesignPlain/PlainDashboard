import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firestore_IndexField,
  Firestore_IndexField_GetTypes,
} from "../types/Firestore_IndexField";

export interface IndexArgs {
  /*
The scope at which a query is run.
Default value is `COLLECTION`.
Possible values are: `COLLECTION`, `COLLECTION_GROUP`, `COLLECTION_RECURSIVE`.
*/
  QueryScope?: string;

  /*
The API scope at which a query is run.
Default value is `ANY_API`.
Possible values are: `ANY_API`, `DATASTORE_MODE_API`.
*/
  ApiScope?: string;

  // The collection being indexed.
  Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  Database?: string;

  /*
The fields supported by this index. The last field entry is always for
the field path `__name__`. If, on creation, `__name__` was not
specified as the last field, it will be added automatically with the
same direction as that of the last field defined. If the final field
in a composite index is not directional, the `__name__` will be
ordered `"ASCENDING"` (unless explicitly specified otherwise).
Structure is documented below.
*/
  Fields?: Array<Firestore_IndexField>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;
}
export class Index extends Resource {
  // The Firestore database id. Defaults to `"(default)"`.
  public Database?: string;

  /*
The fields supported by this index. The last field entry is always for
the field path `__name__`. If, on creation, `__name__` was not
specified as the last field, it will be added automatically with the
same direction as that of the last field defined. If the final field
in a composite index is not directional, the `__name__` will be
ordered `"ASCENDING"` (unless explicitly specified otherwise).
Structure is documented below.
*/
  public Fields?: Array<Firestore_IndexField>;

  /*
A server defined name for this index. Format:
`projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/indexes/{{server_generated_id}}`
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The scope at which a query is run.
Default value is `COLLECTION`.
Possible values are: `COLLECTION`, `COLLECTION_GROUP`, `COLLECTION_RECURSIVE`.
*/
  public QueryScope?: string;

  /*
The API scope at which a query is run.
Default value is `ANY_API`.
Possible values are: `ANY_API`, `DATASTORE_MODE_API`.
*/
  public ApiScope?: string;

  // The collection being indexed.
  public Collection?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Collection",
        "The collection being indexed.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "Fields",
        'The fields supported by this index. The last field entry is always for\nthe field path `__name__`. If, on creation, `__name__` was not\nspecified as the last field, it will be added automatically with the\nsame direction as that of the last field defined. If the final field\nin a composite index is not directional, the `__name__` will be\nordered `"ASCENDING"` (unless explicitly specified otherwise).\nStructure is documented below.',
        Firestore_IndexField_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "QueryScope",
        "The scope at which a query is run.\nDefault value is `COLLECTION`.\nPossible values are: `COLLECTION`, `COLLECTION_GROUP`, `COLLECTION_RECURSIVE`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ApiScope",
        "The API scope at which a query is run.\nDefault value is `ANY_API`.\nPossible values are: `ANY_API`, `DATASTORE_MODE_API`.",
        [],
        false,
        true,
      ),
    ];
  }
}
