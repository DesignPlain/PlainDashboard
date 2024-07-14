import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource {
  // The schema name in the source.
  name?: string;

  // The Doc AI processor type name.
  processorType?: string;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The schema name in the source.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "processorType",
      "The Doc AI processor type name.",
      [],
      false,
      true,
    ),
  ];
}
