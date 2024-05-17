import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Firestore_FieldIndexConfig,
  Firestore_FieldIndexConfig_GetTypes,
} from "../types/Firestore_FieldIndexConfig";
import {
  Firestore_FieldTtlConfig,
  Firestore_FieldTtlConfig_GetTypes,
} from "../types/Firestore_FieldTtlConfig";

export interface FieldArgs {
  // The id of the collection group to configure.
  Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  Database?: string;

  /*
The id of the field to configure.


- - -
*/
  Field?: string;

  /*
The single field index configuration for this field.
Creating an index configuration for this field will override any inherited configuration with the
indexes specified. Configuring the index configuration with an empty block disables all indexes on
the field.
Structure is documented below.
*/
  IndexConfig?: Firestore_FieldIndexConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
Structure is documented below.
*/
  TtlConfig?: Firestore_FieldTtlConfig;
}
export class Field extends Resource {
  // The Firestore database id. Defaults to `"(default)"`.
  public Database?: string;

  /*
The id of the field to configure.


- - -
*/
  public Field?: string;

  /*
The single field index configuration for this field.
Creating an index configuration for this field will override any inherited configuration with the
indexes specified. Configuring the index configuration with an empty block disables all indexes on
the field.
Structure is documented below.
*/
  public IndexConfig?: Firestore_FieldIndexConfig;

  /*
The name of this field. Format:
`projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/fields/{{field}}`
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
Structure is documented below.
*/
  public TtlConfig?: Firestore_FieldTtlConfig;

  // The id of the collection group to configure.
  public Collection?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Collection",
        "The id of the collection group to configure.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Field",
        "The id of the field to configure.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "IndexConfig",
        "The single field index configuration for this field.\nCreating an index configuration for this field will override any inherited configuration with the\nindexes specified. Configuring the index configuration with an empty block disables all indexes on\nthe field.\nStructure is documented below.",
        Firestore_FieldIndexConfig_GetTypes(),
        false,
        false,
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
        InputType.Object,
        "TtlConfig",
        "The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).\nStructure is documented below.",
        Firestore_FieldTtlConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
