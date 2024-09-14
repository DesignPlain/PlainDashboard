import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  diagflow_CxPageFormParameter,
  diagflow_CxPageFormParameter_GetTypes,
} from "./diagflow_CxPageFormParameter";

export interface diagflow_CxPageForm {
  /*
Parameters to collect from the user.
Structure is documented below.
*/
  parameters?: Array<diagflow_CxPageFormParameter>;
}

export function diagflow_CxPageForm_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "parameters",
      "Parameters to collect from the user.\nStructure is documented below.",
      () => diagflow_CxPageFormParameter_GetTypes(),
      false,
      false,
    ),
  ];
}
