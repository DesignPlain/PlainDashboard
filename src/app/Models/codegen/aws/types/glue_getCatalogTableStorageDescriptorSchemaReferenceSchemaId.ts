import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId {
  // Name of the schema.
  schemaName?: string;

  // Name of the schema registry that contains the schema.
  registryName?: string;

  // ARN of the schema.
  schemaArn?: string;
}

export function glue_getCatalogTableStorageDescriptorSchemaReferenceSchemaId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'schemaArn',
      'ARN of the schema.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'schemaName',
      'Name of the schema.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'registryName',
      'Name of the schema registry that contains the schema.',
      () => [],
      true,
      false,
    ),
  ];
}
