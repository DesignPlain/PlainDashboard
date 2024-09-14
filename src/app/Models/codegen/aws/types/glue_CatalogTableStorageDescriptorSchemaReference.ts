import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId,
  glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId_GetTypes,
} from "./glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId";

export interface glue_CatalogTableStorageDescriptorSchemaReference {
  // Configuration block that contains schema identity fields. Either this or the `schema_version_id` has to be provided. See `schema_id` below.
  schemaId?: glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId;

  // Unique ID assigned to a version of the schema. Either this or the `schema_id` has to be provided.
  schemaVersionId?: string;

  // Version number of the schema.
  schemaVersionNumber?: number;
}

export function glue_CatalogTableStorageDescriptorSchemaReference_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "schemaVersionNumber",
      "Version number of the schema.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "schemaId",
      "Configuration block that contains schema identity fields. Either this or the `schema_version_id` has to be provided. See `schema_id` below.",
      () =>
        glue_CatalogTableStorageDescriptorSchemaReferenceSchemaId_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "schemaVersionId",
      "Unique ID assigned to a version of the schema. Either this or the `schema_id` has to be provided.",
      () => [],
      false,
      false,
    ),
  ];
}
