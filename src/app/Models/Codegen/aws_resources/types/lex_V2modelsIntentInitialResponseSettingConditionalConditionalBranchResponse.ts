import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup,
  lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup_GetTypes,
} from "./lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup";

export interface lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse {
  // Whether the user can interrupt a speech response from Amazon Lex.
  allowInterrupt?: boolean;

  // Configuration blocks for responses that Amazon Lex can send to the user. Amazon Lex chooses the actual response to send at runtime. See `message_group`.
  messageGroups?: Array<lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup>;
}

export function lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponse_GetTypes(): DynamicUIProps[] {
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
      lex_V2modelsIntentInitialResponseSettingConditionalConditionalBranchResponseMessageGroup_GetTypes(),
      false,
      false,
    ),
  ];
}
