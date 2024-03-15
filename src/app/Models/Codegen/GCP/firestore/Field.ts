import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { FieldIndexConfig } from "../types/FieldIndexConfig";
import { FieldTtlConfig } from "../types/FieldTtlConfig";

export interface FieldArgs {
  /*
The single field index configuration for this field.
Creating an index configuration for this field will override any inherited configuration with the
indexes specified. Configuring the index configuration with an empty block disables all indexes on
the field.
Structure is documented below.
*/
  IndexConfig?: FieldIndexConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
Structure is documented below.
*/
  TtlConfig?: FieldTtlConfig;

  // The id of the collection group to configure.
  Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  Database?: string;

  /*
The id of the field to configure.


- - -
*/
  Field?: string;
}
export class Field extends Resource {
  /*
The single field index configuration for this field.
Creating an index configuration for this field will override any inherited configuration with the
indexes specified. Configuring the index configuration with an empty block disables all indexes on
the field.
Structure is documented below.
*/
  public IndexConfig?: FieldIndexConfig;

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
  public TtlConfig?: FieldTtlConfig;

  // The id of the collection group to configure.
  public Collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  public Database?: string;

  /*
The id of the field to configure.


- - -
*/
  public Field?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "TtlConfig",
        "The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Collection",
        "The id of the collection group to configure.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Database",
        'The Firestore database id. Defaults to `"(default)"`.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Field",
        "The id of the field to configure.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "IndexConfig",
        "The single field index configuration for this field.\nCreating an index configuration for this field will override any inherited configuration with the\nindexes specified. Configuring the index configuration with an empty block disables all indexes on\nthe field.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
    ];
  }
}
