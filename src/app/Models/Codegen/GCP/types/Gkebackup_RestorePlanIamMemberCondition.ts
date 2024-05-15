import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkebackup_RestorePlanIamMemberCondition {
  // User specified descriptive string for this RestorePlan.
  Description?: string;

  //
  Expression?: string;

  //
  Title?: string;
}

export function Gkebackup_RestorePlanIamMemberCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "Expression", "", [], true, true),
    new DynamicUIProps(InputType.String, "Title", "", [], true, true),
    new DynamicUIProps(
      InputType.String,
      "Description",
      "User specified descriptive string for this RestorePlan.",
      [],
      false,
      true,
    ),
  ];
}
