import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile,
  codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile_GetTypes,
} from "./codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile";

export interface codeguruprofiler_getProfilingGroupProfilingStatus {
  //
  latestAgentOrchestratedAt?: string;

  //
  latestAgentProfileReportedAt?: string;

  //
  latestAggregatedProfiles?: Array<codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile>;
}

export function codeguruprofiler_getProfilingGroupProfilingStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "latestAgentOrchestratedAt",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latestAgentProfileReportedAt",
      "",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "latestAggregatedProfiles",
      "",
      () =>
        codeguruprofiler_getProfilingGroupProfilingStatusLatestAggregatedProfile_GetTypes(),
      true,
      false,
    ),
  ];
}
