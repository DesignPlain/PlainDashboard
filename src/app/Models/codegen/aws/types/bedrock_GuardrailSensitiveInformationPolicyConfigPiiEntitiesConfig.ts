import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig {
  // Options for sensitive information action.
  action?: string;

  // The currently supported PII entities.
  type?: string;
}

export function bedrock_GuardrailSensitiveInformationPolicyConfigPiiEntitiesConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "The currently supported PII entities.",
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
  ];
}
