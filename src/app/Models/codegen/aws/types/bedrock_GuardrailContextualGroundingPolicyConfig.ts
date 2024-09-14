import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig,
  bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig_GetTypes,
} from "./bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig";

export interface bedrock_GuardrailContextualGroundingPolicyConfig {
  // List of contextual grounding filter configs. See Contextual Grounding Filters Config for more information.
  filtersConfigs?: Array<bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig>;
}

export function bedrock_GuardrailContextualGroundingPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "filtersConfigs",
      "List of contextual grounding filter configs. See Contextual Grounding Filters Config for more information.",
      () =>
        bedrock_GuardrailContextualGroundingPolicyConfigFiltersConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
