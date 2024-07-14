import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction {
  // If the dialog action is `ElicitSlot`, defines the slot to elicit from the user.
  slotToElicit?: string;

  // Whether the next message for the intent is _not_ used.
  suppressNextMessage?: boolean;

  // Action that the bot should execute. Valid values are `ElicitIntent`, `StartIntent`, `ElicitSlot`, `EvaluateConditional`, `InvokeDialogCodeHook`, `ConfirmIntent`, `FulfillIntent`, `CloseIntent`, `EndConversation`.
  type?: string;
}

export function lex_V2modelsIntentInitialResponseSettingCodeHookPostCodeHookSpecificationSuccessConditionalDefaultBranchNextStepDialogAction_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Action that the bot should execute. Valid values are `ElicitIntent`, `StartIntent`, `ElicitSlot`, `EvaluateConditional`, `InvokeDialogCodeHook`, `ConfirmIntent`, `FulfillIntent`, `CloseIntent`, `EndConversation`.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "slotToElicit",
      "If the dialog action is `ElicitSlot`, defines the slot to elicit from the user.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "suppressNextMessage",
      "Whether the next message for the intent is _not_ used.",
      [],
      false,
      false,
    ),
  ];
}
