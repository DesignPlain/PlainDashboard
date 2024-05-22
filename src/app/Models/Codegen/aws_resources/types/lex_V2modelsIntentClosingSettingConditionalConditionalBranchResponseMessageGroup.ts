import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage,
  lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage_GetTypes,
} from "./lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage";
import {
  lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation,
  lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation_GetTypes,
} from "./lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation";

export interface lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroup {
  // Configuration block for the primary message that Amazon Lex should send to the user. See `message`.
  message?: lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage;

  // Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.
  variations?: Array<lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation>;
}

export function lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroup_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "message",
      "Configuration block for the primary message that Amazon Lex should send to the user. See `message`.",
      lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupMessage_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "variations",
      "Configuration blocks for message variations to send to the user. When variations are defined, Amazon Lex chooses the primary message or one of the variations to send to the user. See `variation`.",
      lex_V2modelsIntentClosingSettingConditionalConditionalBranchResponseMessageGroupVariation_GetTypes(),
      false,
      false,
    ),
  ];
}
