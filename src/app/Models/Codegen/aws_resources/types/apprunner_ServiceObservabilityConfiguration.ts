import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface apprunner_ServiceObservabilityConfiguration {
  // ARN of the observability configuration that is associated with the service. Specified only when `observability_enabled` is `true`.
  observabilityConfigurationArn?: string;

  // When `true`, an observability configuration resource is associated with the service.
  observabilityEnabled?: boolean;
}

export function apprunner_ServiceObservabilityConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "observabilityConfigurationArn",
      "ARN of the observability configuration that is associated with the service. Specified only when `observability_enabled` is `true`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "observabilityEnabled",
      "When `true`, an observability configuration resource is associated with the service.",
      [],
      true,
      false,
    ),
  ];
}
