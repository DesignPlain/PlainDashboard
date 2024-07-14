import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface redshift_ScheduledActionTargetActionResumeCluster {
  // The identifier of the cluster to be resumed.
  clusterIdentifier?: string;
}

export function redshift_ScheduledActionTargetActionResumeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "clusterIdentifier",
      "The identifier of the cluster to be resumed.",
      [],
      true,
      false,
    ),
  ];
}
