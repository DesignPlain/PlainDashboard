import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  firestore_FieldIndexConfig,
  firestore_FieldIndexConfig_GetTypes,
} from "../types/firestore_FieldIndexConfig";
import {
  firestore_FieldTtlConfig,
  firestore_FieldTtlConfig_GetTypes,
} from "../types/firestore_FieldTtlConfig";

export interface FieldArgs {
  // The id of the collection group to configure.
  collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  database?: string;

  /*
The id of the field to configure.


- - -
*/
  field?: string;

  /*
The single field index configuration for this field.
Creating an index configuration for this field will override any inherited configuration with the
indexes specified. Configuring the index configuration with an empty block disables all indexes on
the field.
Structure is documented below.
*/
  indexConfig?: firestore_FieldIndexConfig;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
Structure is documented below.
*/
  ttlConfig?: firestore_FieldTtlConfig;
}
export class Field extends DS_Resource {
  /*
The id of the field to configure.


- - -
*/
  public field?: string;

  /*
The single field index configuration for this field.
Creating an index configuration for this field will override any inherited configuration with the
indexes specified. Configuring the index configuration with an empty block disables all indexes on
the field.
Structure is documented below.
*/
  public indexConfig?: firestore_FieldIndexConfig;

  /*
The name of this field. Format:
`projects/{{project}}/databases/{{database}}/collectionGroups/{{collection}}/fields/{{field}}`
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).
Structure is documented below.
*/
  public ttlConfig?: firestore_FieldTtlConfig;

  // The id of the collection group to configure.
  public collection?: string;

  // The Firestore database id. Defaults to `"(default)"`.
  public database?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "collection",
        "The id of the collection group to configure.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "database",
        'The Firestore database id. Defaults to `"(default)"`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "field",
        "The id of the field to configure.\n\n\n- - -",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "indexConfig",
        "The single field index configuration for this field.\nCreating an index configuration for this field will override any inherited configuration with the\nindexes specified. Configuring the index configuration with an empty block disables all indexes on\nthe field.\nStructure is documented below.",
        () => firestore_FieldIndexConfig_GetTypes(),
        false,
        false,
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
        InputType.Object,
        "ttlConfig",
        "The TTL configuration for this Field. If set to an empty block (i.e. `ttl_config {}`), a TTL policy is configured based on the field. If unset, a TTL policy is not configured (or will be disabled upon updating the resource).\nStructure is documented below.",
        () => firestore_FieldTtlConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
