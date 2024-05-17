import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Cloudrunv2_getServiceTemplateContainerEnvValueSource,
  Cloudrunv2_getServiceTemplateContainerEnvValueSource_GetTypes,
} from "./Cloudrunv2_getServiceTemplateContainerEnvValueSource";

export interface Cloudrunv2_getServiceTemplateContainerEnv {
  // Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes
  Value?: string;

  // Source for the environment variable's value.
  ValueSources?: Array<Cloudrunv2_getServiceTemplateContainerEnvValueSource>;

  // The name of the Cloud Run v2 Service.
  Name?: string;
}

export function Cloudrunv2_getServiceTemplateContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Value",
      'Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ValueSources",
      "Source for the environment variable's value.",
      Cloudrunv2_getServiceTemplateContainerEnvValueSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Name",
      "The name of the Cloud Run v2 Service.",
      [],
      true,
      false,
    ),
  ];
}
