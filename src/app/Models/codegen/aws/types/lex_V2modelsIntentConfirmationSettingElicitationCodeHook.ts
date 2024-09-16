import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface lex_V2modelsIntentConfirmationSettingElicitationCodeHook {
  // Whether a Lambda function should be invoked for the dialog.
  enableCodeHookInvocation?: boolean;

  // Label that indicates the dialog step from which the dialog code hook is happening.
  invocationLabel?: string;
}

export function lex_V2modelsIntentConfirmationSettingElicitationCodeHook_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableCodeHookInvocation',
      'Whether a Lambda function should be invoked for the dialog.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'invocationLabel',
      'Label that indicates the dialog step from which the dialog code hook is happening.',
      () => [],
      false,
      false,
    ),
  ];
}
