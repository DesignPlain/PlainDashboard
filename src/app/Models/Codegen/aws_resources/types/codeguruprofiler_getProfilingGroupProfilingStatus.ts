import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codeguruprofiler_getProfilingGroupProfilingStatus {
  //
  latestAgentOrchestratedAt?: string;

  //
  latestAgentProfileReportedAt?: string;

  //
  latestAggregatedProfiles?: Array<string>;
}

export function codeguruprofiler_getProfilingGroupProfilingStatus_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "latestAgentOrchestratedAt",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "latestAgentProfileReportedAt",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "latestAggregatedProfiles",
      "",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
