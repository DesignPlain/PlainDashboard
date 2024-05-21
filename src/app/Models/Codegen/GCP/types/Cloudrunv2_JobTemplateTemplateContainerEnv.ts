import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudrunv2_JobTemplateTemplateContainerEnvValueSource,
  cloudrunv2_JobTemplateTemplateContainerEnvValueSource_GetTypes,
} from "./cloudrunv2_JobTemplateTemplateContainerEnvValueSource";

export interface cloudrunv2_JobTemplateTemplateContainerEnv {
  /*
Source for the environment variable's value.
Structure is documented below.
*/
  valueSource?: cloudrunv2_JobTemplateTemplateContainerEnvValueSource;

  // Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
  name?: string;

  // Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes
  value?: string;
}

export function cloudrunv2_JobTemplateTemplateContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "valueSource",
      "Source for the environment variable's value.\nStructure is documented below.",
      cloudrunv2_JobTemplateTemplateContainerEnvValueSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      'Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes',
      [],
      false,
      false,
    ),
  ];
}
