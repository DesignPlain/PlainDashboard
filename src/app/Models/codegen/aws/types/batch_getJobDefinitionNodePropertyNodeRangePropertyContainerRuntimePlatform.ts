import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform {
  // The operating system for the compute environment. V
  operatingSystemFamily?: string;

  // The vCPU architecture. The default value is X86_64. Valid values are X86_64 and ARM64.
  cpuArchitecture?: string;
}

export function batch_getJobDefinitionNodePropertyNodeRangePropertyContainerRuntimePlatform_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'operatingSystemFamily',
      'The operating system for the compute environment. V',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'cpuArchitecture',
      'The vCPU architecture. The default value is X86_64. Valid values are X86_64 and ARM64.',
      () => [],
      true,
      false,
    ),
  ];
}
