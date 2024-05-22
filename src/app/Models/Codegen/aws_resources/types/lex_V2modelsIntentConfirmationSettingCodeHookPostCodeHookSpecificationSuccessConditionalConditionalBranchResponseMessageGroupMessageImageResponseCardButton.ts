import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton {
  // Text that appears on the button. Use this to tell the user what value is returned when they choose this button.
  text?: string;

  // Value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.
  value?: string;
}

export function lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecificationSuccessConditionalConditionalBranchResponseMessageGroupMessageImageResponseCardButton_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "text",
      "Text that appears on the button. Use this to tell the user what value is returned when they choose this button.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "Value returned to Amazon Lex when the user chooses this button. This must be one of the slot values configured for the slot.",
      [],
      true,
      false,
    ),
  ];
}
