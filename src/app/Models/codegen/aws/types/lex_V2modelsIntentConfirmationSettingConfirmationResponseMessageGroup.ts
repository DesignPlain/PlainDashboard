import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage";
import {
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation,
  lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation";

export interface lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroup {
  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage;

  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation>;
}

export function lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "message",
      "Configuration block for the primary message that Amazon Lex should send to the user. See `message`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "variations",
      "Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.",
      () =>
        lex_V2modelsIntentConfirmationSettingConfirmationResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
  ];
}
