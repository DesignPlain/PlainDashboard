import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emr_InstanceFleetLaunchSpecificationsOnDemandSpecification,
  emr_InstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes,
} from "./emr_InstanceFleetLaunchSpecificationsOnDemandSpecification";
import {
  emr_InstanceFleetLaunchSpecificationsSpotSpecification,
  emr_InstanceFleetLaunchSpecificationsSpotSpecification_GetTypes,
} from "./emr_InstanceFleetLaunchSpecificationsSpotSpecification";

export interface emr_InstanceFleetLaunchSpecifications {
  // Configuration block for on demand instances launch specifications
  onDemandSpecifications?: Array<emr_InstanceFleetLaunchSpecificationsOnDemandSpecification>;

  // Configuration block for spot instances launch specifications
  spotSpecifications?: Array<emr_InstanceFleetLaunchSpecificationsSpotSpecification>;
}

export function emr_InstanceFleetLaunchSpecifications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "onDemandSpecifications",
      "Configuration block for on demand instances launch specifications",
      emr_InstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "spotSpecifications",
      "Configuration block for spot instances launch specifications",
      emr_InstanceFleetLaunchSpecificationsSpotSpecification_GetTypes(),
      false,
      true,
    ),
  ];
}
