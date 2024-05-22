import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface apprunner_ObservabilityConfigurationTraceConfiguration {
  // Implementation provider chosen for tracing App Runner services. Valid values: `AWSXRAY`.
  vendor?: string;
}

export function apprunner_ObservabilityConfigurationTraceConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "vendor",
      "Implementation provider chosen for tracing App Runner services. Valid values: `AWSXRAY`.",
      [],
      false,
      false,
    ),
  ];
}
