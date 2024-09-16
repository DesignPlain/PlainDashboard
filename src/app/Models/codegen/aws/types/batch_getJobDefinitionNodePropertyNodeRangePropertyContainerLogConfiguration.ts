import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption,
  batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption_GetTypes,
} from './batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration {
  // The log driver to use for the container.
  logDriver?: string;

  // The configuration options to send to the log driver.
  options?: Map<string, string>;

  // The secrets to pass to the log configuration.
  secretOptions?: Array<batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption>;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'logDriver',
      'The log driver to use for the container.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      'options',
      'The configuration options to send to the log driver.',
      () => InputType_Map_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'secretOptions',
      'The secrets to pass to the log configuration.',
      () =>
        batch_getJobDefinitionNodePropertyNodeRangePropertyContainerLogConfigurationSecretOption_GetTypes(),
      true,
      false,
    ),
  ];
}
