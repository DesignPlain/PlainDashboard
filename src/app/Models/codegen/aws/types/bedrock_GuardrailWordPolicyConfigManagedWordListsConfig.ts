import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface bedrock_GuardrailWordPolicyConfigManagedWordListsConfig {
  // Options for managed words.
  type?: string;
}

export function bedrock_GuardrailWordPolicyConfigManagedWordListsConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Options for managed words.",
      () => [],
      true,
      false,
    ),
  ];
}
