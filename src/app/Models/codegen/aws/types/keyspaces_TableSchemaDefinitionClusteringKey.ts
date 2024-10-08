import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface keyspaces_TableSchemaDefinitionClusteringKey {
  // The name of the clustering key column.
  name?: string;

  // The order modifier. Valid values: `ASC`, `DESC`.
  orderBy?: string;
}

export function keyspaces_TableSchemaDefinitionClusteringKey_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'name',
      'The name of the clustering key column.',
      () => [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'orderBy',
      'The order modifier. Valid values: `ASC`, `DESC`.',
      () => [],
      true,
      true,
    ),
  ];
}
