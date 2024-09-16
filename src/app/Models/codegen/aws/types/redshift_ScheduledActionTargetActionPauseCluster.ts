import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface redshift_ScheduledActionTargetActionPauseCluster {
  // The identifier of the cluster to be paused.
  clusterIdentifier?: string;
}

export function redshift_ScheduledActionTargetActionPauseCluster_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'clusterIdentifier',
      'The identifier of the cluster to be paused.',
      () => [],
      true,
      false,
    ),
  ];
}
