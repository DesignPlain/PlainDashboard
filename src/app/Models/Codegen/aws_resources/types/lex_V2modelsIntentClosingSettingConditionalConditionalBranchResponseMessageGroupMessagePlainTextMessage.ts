import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage {
  // Message to send to the user.
  value?: string;
}

export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessagePlainTextMessage_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "Message to send to the user.",
      [],
      true,
      false,
    ),
  ];
}
