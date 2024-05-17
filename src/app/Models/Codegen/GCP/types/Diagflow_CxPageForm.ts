import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Diagflow_CxPageFormParameter,
  Diagflow_CxPageFormParameter_GetTypes,
} from "./Diagflow_CxPageFormParameter";

export interface Diagflow_CxPageForm {
  /*
Parameters to collect from the user.
Structure is documented below.
*/
  Parameters?: Array<Diagflow_CxPageFormParameter>;
}

export function Diagflow_CxPageForm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Parameters",
      "Parameters to collect from the user.\nStructure is documented below.",
      Diagflow_CxPageFormParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
