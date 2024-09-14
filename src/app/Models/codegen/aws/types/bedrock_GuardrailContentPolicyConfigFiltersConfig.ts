import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_GuardrailContentPolicyConfigFiltersConfig {
  // Strength for filters.
  inputStrength?: string;

  // Strength for filters.
  outputStrength?: string;

  // Type of contextual grounding filter.
  type?: string;
}

export function bedrock_GuardrailContentPolicyConfigFiltersConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "inputStrength",
      "Strength for filters.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "outputStrength",
      "Strength for filters.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of contextual grounding filter.",
      () => [],
      true,
      false,
    ),
  ];
}
