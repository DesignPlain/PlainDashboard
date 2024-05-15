import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataplex_DatascanDataProfileSpecExcludeFields {
  /*
Expected input is a list of fully qualified names of fields as in the schema.
Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.
*/
  FieldNames?: Array<string>;
}

export function Dataplex_DatascanDataProfileSpecExcludeFields_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "FieldNames",
      "Expected input is a list of fully qualified names of fields as in the schema.\nOnly top-level field names for nested fields are supported.\nFor instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
