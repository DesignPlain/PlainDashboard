import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions {
  /*
Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.

- - -
*/
  validationCheckDisabled?: boolean;

  // List of possible enum values.
  possibleValues?: Array<string>;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionEnumTypeOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "validationCheckDisabled",
      "Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.\n\n- - -",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "possibleValues",
      "List of possible enum values.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
  ];
}
