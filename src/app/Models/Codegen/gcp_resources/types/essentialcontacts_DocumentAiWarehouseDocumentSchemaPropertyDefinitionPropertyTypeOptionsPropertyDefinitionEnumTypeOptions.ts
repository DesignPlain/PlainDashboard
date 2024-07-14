import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions {
  // List of possible enum values.
  possibleValues?: Array<string>;

  /*
Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.

- - -
*/
  validationCheckDisabled?: boolean;
}

export function essentialcontacts_DocumentAiWarehouseDocumentSchemaPropertyDefinitionPropertyTypeOptionsPropertyDefinitionEnumTypeOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "possibleValues",
      "List of possible enum values.",
      InputType_String_GetTypes(),
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "validationCheckDisabled",
      "Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.\n\n- - -",
      [],
      false,
      true,
    ),
  ];
}
