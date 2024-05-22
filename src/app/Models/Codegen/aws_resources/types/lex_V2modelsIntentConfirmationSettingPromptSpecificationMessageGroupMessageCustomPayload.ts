import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload {
  // String that is sent to your application.
  value?: string;
}

export function lex_V2modelsIntentConfirmationSettingPromptSpecificationMessageGroupMessageCustomPayload_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      "String that is sent to your application.",
      [],
      true,
      false,
    ),
  ];
}
