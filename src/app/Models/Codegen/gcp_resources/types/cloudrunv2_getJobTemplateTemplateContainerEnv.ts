import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cloudrunv2_getJobTemplateTemplateContainerEnvValueSource,
  cloudrunv2_getJobTemplateTemplateContainerEnvValueSource_GetTypes,
} from "./cloudrunv2_getJobTemplateTemplateContainerEnvValueSource";

export interface cloudrunv2_getJobTemplateTemplateContainerEnv {
  // Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes
  value?: string;

  // Source for the environment variable's value.
  valueSources?: Array<cloudrunv2_getJobTemplateTemplateContainerEnvValueSource>;

  // The name of the Cloud Run v2 Job.
  name?: string;
}

export function cloudrunv2_getJobTemplateTemplateContainerEnv_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "value",
      'Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes',
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "valueSources",
      "Source for the environment variable's value.",
      cloudrunv2_getJobTemplateTemplateContainerEnvValueSource_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "The name of the Cloud Run v2 Job.",
      [],
      true,
      false,
    ),
  ];
}
