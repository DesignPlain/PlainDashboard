import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bedrock_getCustomModelValidationDataConfigValidator,
  bedrock_getCustomModelValidationDataConfigValidator_GetTypes,
} from "./bedrock_getCustomModelValidationDataConfigValidator";

export interface bedrock_getCustomModelValidationDataConfig {
  // Information about the validators.
  validators?: Array<bedrock_getCustomModelValidationDataConfigValidator>;
}

export function bedrock_getCustomModelValidationDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "validators",
      "Information about the validators.",
      () => bedrock_getCustomModelValidationDataConfigValidator_GetTypes(),
      true,
      false,
    ),
  ];
}
