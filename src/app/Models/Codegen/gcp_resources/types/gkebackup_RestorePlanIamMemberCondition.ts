import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gkebackup_RestorePlanIamMemberCondition {
  //
  expression?: string;

  //
  title?: string;

  // User specified descriptive string for this RestorePlan.
  description?: string;
}

export function gkebackup_RestorePlanIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "title", "", [], true, true),
    new DynamicUIProps(
      InputType.String,
      "description",
      "User specified descriptive string for this RestorePlan.",
      [],
      false,
      true,
    ),
  ];
}
