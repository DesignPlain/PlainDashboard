import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration,
  emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration_GetTypes,
} from "./emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration";

export interface emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration {
  // The classification within a configuration.
  classification?: string;

  // A list of additional configurations to apply within a configuration object.
  configurations?: Array<emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration>;

  // A set of properties specified within a configuration classification.
  properties?: Map<string, string>;
}

export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "classification",
      "The classification within a configuration.",
      [],
      true,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "configurations",
      "A list of additional configurations to apply within a configuration object.",
      emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Map,
      "properties",
      "A set of properties specified within a configuration classification.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
  ];
}
