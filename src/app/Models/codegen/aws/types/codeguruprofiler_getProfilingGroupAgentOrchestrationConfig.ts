import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codeguruprofiler_getProfilingGroupAgentOrchestrationConfig {
  //
  profilingEnabled?: boolean;
}

export function codeguruprofiler_getProfilingGroupAgentOrchestrationConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'profilingEnabled',
      '',
      () => [],
      true,
      false,
    ),
  ];
}
