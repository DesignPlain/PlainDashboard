import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId,
  glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId_GetTypes,
} from './glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId';

export interface glue_getCatalogTableStorageDescriptorSchemaReference {
  // Configuration block that contains schema identity fields. See `schema_id` below.
  schemaIds?: Array<glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId>;

  // Unique ID assigned to a version of the schema.
  schemaVersionId?: string;

  // Version number of the schema.
  schemaVersionNumber?: number;
}

export function glue_getCatalogTableStorageDescriptorSchemaReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'schemaIds',
      'Configuration block that contains schema identity fields. See `schema_id` below.',
      () =>
        glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'schemaVersionId',
      'Unique ID assigned to a version of the schema.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'schemaVersionNumber',
      'Version number of the schema.',
      () => [],
      true,
      false,
    ),
  ];
}
