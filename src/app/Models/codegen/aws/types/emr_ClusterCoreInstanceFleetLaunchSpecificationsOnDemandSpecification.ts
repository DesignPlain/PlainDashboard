import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification {
  // Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is `lowest-price` (the default), which launches the lowest price first.
  allocationStrategy?: string;
}

export function emr_ClusterCoreInstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'allocationStrategy',
      'Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is `lowest-price` (the default), which launches the lowest price first.',
      () => [],
      true,
      true,
    ),
  ];
}
