import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration {
  // The classification within a configuration.
  classification?: string;

  // A set of properties specified within a configuration classification.
  properties?: Map<string, string>;
}

export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "classification",
      "The classification within a configuration.",
      [],
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
