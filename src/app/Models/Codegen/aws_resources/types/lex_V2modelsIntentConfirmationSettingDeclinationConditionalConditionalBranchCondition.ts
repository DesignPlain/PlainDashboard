import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition {
  // Expression string that is evaluated.
  expressionString?: string;
}

export function lex_V2modelsIntentConfirmationSettingDeclinationConditionalConditionalBranchCondition_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "expressionString",
      "Expression string that is evaluated.",
      [],
      true,
      false,
    ),
  ];
}
