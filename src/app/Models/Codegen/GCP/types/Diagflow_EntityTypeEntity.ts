import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Diagflow_EntityTypeEntity {
  /*
A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:
- This collection must contain exactly one synonym equal to value.
*/
  Synonyms?: Array<string>;

  /*
The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:
- A reference value to be used in place of synonyms.
For KIND_LIST entity types:
- A string that can contain references to other entity types (with or without aliases).
*/
  Value?: string;
}

export function Diagflow_EntityTypeEntity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      "The primary value associated with this entity entry. For example, if the entity type is vegetable, the value\ncould be scallions.\nFor KIND_MAP entity types:\n* A reference value to be used in place of synonyms.\nFor KIND_LIST entity types:\n* A string that can contain references to other entity types (with or without aliases).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Synonyms",
      "A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym\ncould be green onions.\nFor KIND_LIST entity types:\n* This collection must contain exactly one synonym equal to value.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
