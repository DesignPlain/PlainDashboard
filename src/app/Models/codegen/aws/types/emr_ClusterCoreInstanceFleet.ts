import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emr_ClusterCoreInstanceFleetLaunchSpecifications,
  emr_ClusterCoreInstanceFleetLaunchSpecifications_GetTypes,
} from './emr_ClusterCoreInstanceFleetLaunchSpecifications';
import {
  emr_ClusterCoreInstanceFleetInstanceTypeConfig,
  emr_ClusterCoreInstanceFleetInstanceTypeConfig_GetTypes,
} from './emr_ClusterCoreInstanceFleetInstanceTypeConfig';

export interface emr_ClusterCoreInstanceFleet {
  // Configuration block for instance fleet.
  instanceTypeConfigs?: Array<emr_ClusterCoreInstanceFleetInstanceTypeConfig>;

  // Configuration block for launch specification.
  launchSpecifications?: emr_ClusterCoreInstanceFleetLaunchSpecifications;

  // Friendly name given to the instance fleet.
  name?: string;

  //
  provisionedOnDemandCapacity?: number;

  //
  provisionedSpotCapacity?: number;

  // The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
  targetOnDemandCapacity?: number;

  // Target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.
  targetSpotCapacity?: number;

  // ID of the cluster.
  id?: string;
}

export function emr_ClusterCoreInstanceFleet_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'provisionedOnDemandCapacity',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'provisionedSpotCapacity',
      '',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      'targetOnDemandCapacity',
      'The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Number,
      'targetSpotCapacity',
      'Target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.',
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'id',
      'ID of the cluster.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'instanceTypeConfigs',
      'Configuration block for instance fleet.',
      () => emr_ClusterCoreInstanceFleetInstanceTypeConfig_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      'launchSpecifications',
      'Configuration block for launch specification.',
      () => emr_ClusterCoreInstanceFleetLaunchSpecifications_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      'name',
      'Friendly name given to the instance fleet.',
      () => [],
      false,
      true,
    ),
  ];
}
