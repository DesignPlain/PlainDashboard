import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Healthcare_Hl7StoreIamBindingCondition {
  //
  Description?: string;

  //
  Expression?: string;

  //
  Title?: string;
}

export function Healthcare_Hl7StoreIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(InputType.String, "Description", "", [], false, true),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
  ];
}
