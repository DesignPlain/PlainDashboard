import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId {
  // Name of the schema registry that contains the schema. Must be provided when `schema_name` is specified and conflicts with `schema_arn`.
  registryName?: string;

  // ARN of the schema. One of `schema_arn` or `schema_name` has to be provided.
  schemaArn?: string;

  // Name of the schema. One of `schema_arn` or `schema_name` has to be provided.
  schemaName?: string;
}

export function glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'registryName',
      'Name of the schema registry that contains the schema. Must be provided when `schema_name` is specified and conflicts with `schema_arn`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'schemaArn',
      'ARN of the schema. One of `schema_arn` or `schema_name` has to be provided.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'schemaName',
      'Name of the schema. One of `schema_arn` or `schema_name` has to be provided.',
      () => [],
      false,
      false,
    ),
  ];
}
