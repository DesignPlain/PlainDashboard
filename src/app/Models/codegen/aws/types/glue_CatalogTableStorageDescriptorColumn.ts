import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_CatalogTableStorageDescriptorColumn {
  // Free-form text comment.
  comment?: string;

  // Name of the Column.
  name?: string;

  // Key-value pairs defining properties associated with the column.
  parameters?: Map<string, string>;

  // Datatype of data in the Column.
  type?: string;
}

export function glue_CatalogTableStorageDescriptorColumn_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'parameters',
      'Key-value pairs defining properties associated with the column.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'type',
      'Datatype of data in the Column.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'comment',
      'Free-form text comment.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Name of the Column.',
      () => [],
      true,
      false,
    ),
  ];
}
