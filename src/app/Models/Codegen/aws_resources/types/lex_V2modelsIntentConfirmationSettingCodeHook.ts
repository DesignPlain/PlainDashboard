import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification,
  lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification_GetTypes,
} from "./lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification";

export interface lex_V2modelsIntentConfirmationSettingCodeHook {
  // Whether a dialog code hook is used when the intent is activated.
  active?: boolean;

  // Whether a Lambda function should be invoked for the dialog.
  enableCodeHookInvocation?: boolean;

  // Label that indicates the dialog step from which the dialog code hook is happening.
  invocationLabel?: string;

  // Configuration block that contains the responses and actions that Amazon Lex takes after the Lambda function is complete. See `post_code_hook_specification`.
  postCodeHookSpecification?: lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification;
}

export function lex_V2modelsIntentConfirmationSettingCodeHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "postCodeHookSpecification",
      "Configuration block that contains the responses and actions that Amazon Lex takes after the Lambda function is complete. See `post_code_hook_specification`.",
      lex_V2modelsIntentConfirmationSettingCodeHookPostCodeHookSpecification_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "active",
      "Whether a dialog code hook is used when the intent is activated.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableCodeHookInvocation",
      "Whether a Lambda function should be invoked for the dialog.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "invocationLabel",
      "Label that indicates the dialog step from which the dialog code hook is happening.",
      [],
      false,
      false,
    ),
  ];
}
