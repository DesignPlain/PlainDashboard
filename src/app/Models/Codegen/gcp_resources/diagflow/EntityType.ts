import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  diagflow_EntityTypeEntity,
  diagflow_EntityTypeEntity_GetTypes,
} from "../types/diagflow_EntityTypeEntity";

export interface EntityTypeArgs {
  // The name of this entity type to be displayed on the console.
  displayName?: string;

  // Enables fuzzy entity extraction during classification.
  enableFuzzyExtraction?: boolean;

  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  entities?: Array<diagflow_EntityTypeEntity>;

  /*
Indicates the kind of entity type.
- KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
- KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
- KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.
Possible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.


- - -
*/
  kind?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;
}
export class EntityType extends Resource {
  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  public entities?: Array<diagflow_EntityTypeEntity>;

  /*
Indicates the kind of entity type.
- KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
- KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
- KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.
Possible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.


- - -
*/
  public kind?: string;

  /*
The unique identifier of the entity type.
Format: projects/<Project ID>/agent/entityTypes/<Entity type ID>.
*/
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The name of this entity type to be displayed on the console.
  public displayName?: string;

  // Enables fuzzy entity extraction during classification.
  public enableFuzzyExtraction?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The name of this entity type to be displayed on the console.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enableFuzzyExtraction",
        "Enables fuzzy entity extraction during classification.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "entities",
        "The collection of entity entries associated with the entity type.\nStructure is documented below.",
        diagflow_EntityTypeEntity_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "kind",
        "Indicates the kind of entity type.\n* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.\n* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity\ntypes can contain references to other entity types (with or without aliases).\n* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.\nPossible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.\n\n\n- - -",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
    ];
  }
}
