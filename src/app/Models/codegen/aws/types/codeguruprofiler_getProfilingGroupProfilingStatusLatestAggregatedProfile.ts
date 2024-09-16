import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile {
  //
  period?: string;

  //
  start?: string;
}

export function codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, 'period', '', () => [], true, false),
    new DynamicUIProps(InputType.String, 'start', '', () => [], true, false),
  ];
}
