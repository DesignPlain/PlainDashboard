import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface bedrock_getCustomModelValidationDataConfig {
  // Information about the validators.
  validators?: Array<string>;
}

export function bedrock_getCustomModelValidationDataConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "validators",
      "Information about the validators.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
