import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securitycenter_InstanceIamMemberCondition {
  // An optional description of the instance.
  Description?: string;

  //
  Expression?: string;

  //
  Title?: string;
}

export function Securitycenter_InstanceIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "An optional description of the instance.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
  ];
}
