import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration {
  // A set of properties specified within a configuration classification.
  properties?: Map<string, string>;

  // The classification within a configuration.
  classification?: string;
}

export function emrcontainers_JobTemplateJobTemplateDataConfigurationOverridesApplicationConfigurationConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      'properties',
      'A set of properties specified within a configuration classification.',
      () => InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'classification',
      'The classification within a configuration.',
      () => [],
      false,
      true,
    ),
  ];
}
