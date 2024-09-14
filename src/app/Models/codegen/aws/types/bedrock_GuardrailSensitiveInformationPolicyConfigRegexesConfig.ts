import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig {
  // The regex name.
  name?: string;

  // The regex pattern.
  pattern?: string;

  // Options for sensitive information action.
  action?: string;

  // The regex description.
  description?: string;
}

export function bedrock_GuardrailSensitiveInformationPolicyConfigRegexesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "The regex name.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pattern",
      "The regex pattern.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "action",
      "Options for sensitive information action.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "The regex description.",
      () => [],
      false,
      false,
    ),
  ];
}
