import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitycenter_InstanceIamMemberCondition {
  //
  expression?: string;

  //
  title?: string;

  // An optional description of the instance.
  description?: string;
}

export function securitycenter_InstanceIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
    new DynamicUIProps(
      InputType.String,
      "description",
      "An optional description of the instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
  ];
}
