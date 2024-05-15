import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource {
  // The schema name in the source.
  Name?: string;

  // The Doc AI processor type name.
  ProcessorType?: string;
}

export function Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionSchemaSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The schema name in the source.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "ProcessorType",
      "The Doc AI processor type name.",
      [],
      false,
      true,
    ),
  ];
}
