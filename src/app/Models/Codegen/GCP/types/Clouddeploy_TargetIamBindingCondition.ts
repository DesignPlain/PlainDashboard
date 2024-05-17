import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Clouddeploy_TargetIamBindingCondition {
  //
  Title?: string;

  //
  Description?: string;

  //
  Expression?: string;
}

export function Clouddeploy_TargetIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(InputType.String, "Description", "", [], false, true),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
  ];
}
