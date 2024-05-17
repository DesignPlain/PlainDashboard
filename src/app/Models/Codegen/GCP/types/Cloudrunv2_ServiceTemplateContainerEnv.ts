import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_ServiceTemplateContainerEnvValueSource,
  Cloudrunv2_ServiceTemplateContainerEnvValueSource_GetTypes,
} from "./Cloudrunv2_ServiceTemplateContainerEnvValueSource";

export interface Cloudrunv2_ServiceTemplateContainerEnv {
  // Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes
  Value?: string;

  /*
Source for the environment variable's value.
Structure is documented below.
*/
  ValueSource?: Cloudrunv2_ServiceTemplateContainerEnvValueSource;

  // Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
  Name?: string;
}

export function Cloudrunv2_ServiceTemplateContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      'Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes',
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "ValueSource",
      "Source for the environment variable's value.\nStructure is documented below.",
      Cloudrunv2_ServiceTemplateContainerEnvValueSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.",
      [],
      true,
      false,
    ),
  ];
}
