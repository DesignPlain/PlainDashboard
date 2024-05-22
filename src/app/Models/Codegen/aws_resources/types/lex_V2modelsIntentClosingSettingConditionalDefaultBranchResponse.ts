import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup,
  lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup_GetTypes,
} from "./lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup";

export interface lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponse {
  // Whether the user can interrupt a speech response from Amazon Lex.
  allowInterrupt?: boolean;

  // Configuration blocks for responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime. See `message_group`.
  messageGroups?: Array<lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup>;
}

export function lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponse_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "allowInterrupt",
      "Whether the user can interrupt a speech response from Amazon Lex.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "messageGroups",
      "Configuration blocks for responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime. See `message_group`.",
      lex_V2modelsIntentClosingSettingConditionalDefaultBranchResponseMessageGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
