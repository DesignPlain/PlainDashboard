import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { EntityTypeEntity } from "../types/EntityTypeEntity";

export interface EntityTypeArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  // The name of this entity type to be displayed on the console.
  DisplayName?: string;

  // Enables fuzzy entity extraction during classification.
  EnableFuzzyExtraction?: boolean;

  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  Entities?: Array<EntityTypeEntity>;

  /*
Indicates the kind of entity type.
- KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
- KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
- KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.
Possible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.


- - -
*/
  Kind?: string;
}
export class EntityType extends Resource {
  // The name of this entity type to be displayed on the console.
  public DisplayName?: string;

  // Enables fuzzy entity extraction during classification.
  public EnableFuzzyExtraction?: boolean;

  /*
The collection of entity entries associated with the entity type.
Structure is documented below.
*/
  public Entities?: Array<EntityTypeEntity>;

  /*
Indicates the kind of entity type.
- KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.
- KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity
types can contain references to other entity types (with or without aliases).
- KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.
Possible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.


- - -
*/
  public Kind?: string;

  /*
The unique identifier of the entity type.
Format: projects/<Project ID>/agent/entityTypes/<Entity type ID>.
*/
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Kind",
        "Indicates the kind of entity type.\n* KIND_MAP: Map entity types allow mapping of a group of synonyms to a reference value.\n* KIND_LIST: List entity types contain a set of entries that do not map to reference values. However, list entity\ntypes can contain references to other entity types (with or without aliases).\n* KIND_REGEXP: Regexp entity types allow to specify regular expressions in entries values.\nPossible values are: `KIND_MAP`, `KIND_LIST`, `KIND_REGEXP`.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The name of this entity type to be displayed on the console.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "EnableFuzzyExtraction",
        "Enables fuzzy entity extraction during classification.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Entities",
        "The collection of entity entries associated with the entity type.\nStructure is documented below.",
      ),
    ];
  }
}
