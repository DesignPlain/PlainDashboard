import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Notebooks_RuntimeIamBindingCondition {
  //
  Description?: string;

  //
  Expression?: string;

  //
  Title?: string;
}

export function Notebooks_RuntimeIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(InputType.String, "Description", "", [], false, true),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
  ];
}
