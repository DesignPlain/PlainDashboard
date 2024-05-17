import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securitycenter_InstanceIamBindingCondition {
  //
  Title?: string;

  // An optional description of the instance.
  Description?: string;

  //
  Expression?: string;
}

export function Securitycenter_InstanceIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of the instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
  ];
}
