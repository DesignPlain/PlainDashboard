import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codeguruprofiler_ProfilingGroupAgentOrchestrationConfig {
  // (Required) Boolean that specifies whether the profiling agent collects profiling data or
  profilingEnabled?: boolean;
}

export function codeguruprofiler_ProfilingGroupAgentOrchestrationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'profilingEnabled',
      '(Required) Boolean that specifies whether the profiling agent collects profiling data or',
      () => [],
      true,
      false,
    ),
  ];
}
