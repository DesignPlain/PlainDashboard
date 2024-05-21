import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitycenter_SourceIamMemberCondition {
  //
  title?: string;

  // The description of the source (max of 1024 characters).
  description?: string;

  //
  expression?: string;
}

export function securitycenter_SourceIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The description of the source (max of 1024 characters).",
      [],
      false,
      true,
    ),
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
  ];
}
