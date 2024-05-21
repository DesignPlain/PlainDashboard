import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitycenter_InstanceIamBindingCondition {
  // An optional description of the instance.
  description?: string;

  //
  expression?: string;

  //
  title?: string;
}

export function securitycenter_InstanceIamBindingCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of the instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
  ];
}
