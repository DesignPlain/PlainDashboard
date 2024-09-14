import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration {
  // Unique identifier of the guardrail.
  guardrailIdentifier?: string;

  // Version of the guardrail.
  guardrailVersion?: string;
}

export function bedrock_getAgentAgentVersionsAgentVersionSummaryGuardrailConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "guardrailIdentifier",
      "Unique identifier of the guardrail.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "guardrailVersion",
      "Version of the guardrail.",
      () => [],
      true,
      false,
    ),
  ];
}
