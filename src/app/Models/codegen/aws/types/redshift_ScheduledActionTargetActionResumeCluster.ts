import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface redshift_ScheduledActionTargetActionResumeCluster {
  // The identifier of the cluster to be resumed.
  clusterIdentifier?: string;
}

export function redshift_ScheduledActionTargetActionResumeCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clusterIdentifier',
      'The identifier of the cluster to be resumed.',
      () => [],
      true,
      false,
    ),
  ];
}
