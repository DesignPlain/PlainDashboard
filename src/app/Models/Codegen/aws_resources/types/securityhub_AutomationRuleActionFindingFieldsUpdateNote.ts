import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securityhub_AutomationRuleActionFindingFieldsUpdateNote {
  // The updated note text.
  text?: string;

  // The principal that updated the note.
  updatedBy?: string;
}

export function securityhub_AutomationRuleActionFindingFieldsUpdateNote_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "text",
      "The updated note text.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updatedBy",
      "The principal that updated the note.",
      [],
      true,
      false,
    ),
  ];
}
