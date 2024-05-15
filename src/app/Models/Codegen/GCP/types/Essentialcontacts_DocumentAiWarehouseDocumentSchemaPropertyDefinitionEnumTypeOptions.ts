import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions {
  // List of possible enum values.
  PossibleValues?: Array<string>;

  /*
Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.

- - -
*/
  ValidationCheckDisabled?: boolean;
}

export function Essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "PossibleValues",
      "List of possible enum values.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "ValidationCheckDisabled",
      "Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
