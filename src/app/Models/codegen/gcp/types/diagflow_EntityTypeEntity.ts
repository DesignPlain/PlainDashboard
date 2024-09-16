import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface diagflow_EntityTypeEntity {
  /*
A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym
could be green onions.
For KIND_LIST entity types:
- This collection must contain exactly one synonym equal to value.
*/
  synonyms?: Array<string>;

  /*
The primary value associated with this entity entry. For example, if the entity type is vegetable, the value
could be scallions.
For KIND_MAP entity types:
- A reference value to be used in place of synonyms.
For KIND_LIST entity types:
- A string that can contain references to other entity types (with or without aliases).
*/
  value?: string;
}

export function diagflow_EntityTypeEntity_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'synonyms',
      'A collection of value synonyms. For example, if the entity type is vegetable, and value is scallions, a synonym\ncould be green onions.\nFor KIND_LIST entity types:\n* This collection must contain exactly one synonym equal to value.',
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'value',
      'The primary value associated with this entity entry. For example, if the entity type is vegetable, the value\ncould be scallions.\nFor KIND_MAP entity types:\n* A reference value to be used in place of synonyms.\nFor KIND_LIST entity types:\n* A string that can contain references to other entity types (with or without aliases).',
      () => [],
      true,
      false,
    ),
  ];
}
