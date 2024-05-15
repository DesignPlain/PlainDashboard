import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Securitycenter_SourceIamMemberCondition {
  // The description of the source (max of 1024 characters).
  Description?: string;

  //
  Expression?: string;

  //
  Title?: string;
}

export function Securitycenter_SourceIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Description",
      "The description of the source (max of 1024 characters).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
  ];
}
