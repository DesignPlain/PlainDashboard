import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification,
  emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes,
} from './emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification';
import {
  emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification,
  emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification_GetTypes,
} from './emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification';

export interface emr_ClusterCoreInstanceFleetLaunchSpecifications {
  // Configuration block for on demand instances launch specifications.
  onDemandSpecifications?: Array<emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification>;

  // Configuration block for spot instances launch specifications.
  spotSpecifications?: Array<emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification>;
}

export function emr_ClusterCoreInstanceFleetLaunchSpecifications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      'spotSpecifications',
      'Configuration block for spot instances launch specifications.',
      () =>
        emr_ClusterCoreInstanceFleetLaunchSpecificationsSpotSpecification_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      'onDemandSpecifications',
      'Configuration block for on demand instances launch specifications.',
      () =>
        emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes(),
      false,
      true,
    ),
  ];
}
