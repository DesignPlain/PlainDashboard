import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_GuardrailWordPolicyConfigWordsConfig,
  bedrock_GuardrailWordPolicyConfigWordsConfig_GetTypes,
} from "./bedrock_GuardrailWordPolicyConfigWordsConfig";
import {
  bedrock_GuardrailWordPolicyConfigManagedWordListsConfig,
  bedrock_GuardrailWordPolicyConfigManagedWordListsConfig_GetTypes,
} from "./bedrock_GuardrailWordPolicyConfigManagedWordListsConfig";

export interface bedrock_GuardrailWordPolicyConfig {
  // A config for the list of managed words. See Managed Word Lists Config for more information.
  managedWordListsConfigs?: Array<bedrock_GuardrailWordPolicyConfigManagedWordListsConfig>;

  // List of custom word configs. See Words Config for more information.
  wordsConfigs?: Array<bedrock_GuardrailWordPolicyConfigWordsConfig>;
}

export function bedrock_GuardrailWordPolicyConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "managedWordListsConfigs",
      "A config for the list of managed words. See Managed Word Lists Config for more information.",
      () => bedrock_GuardrailWordPolicyConfigManagedWordListsConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "wordsConfigs",
      "List of custom word configs. See Words Config for more information.",
      () => bedrock_GuardrailWordPolicyConfigWordsConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
