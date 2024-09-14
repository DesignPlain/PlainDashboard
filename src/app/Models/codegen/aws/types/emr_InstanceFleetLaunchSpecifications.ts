import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  emr_InstanceFleetLaunchSpecificationsSpotSpecification,
  emr_InstanceFleetLaunchSpecificationsSpotSpecification_GetTypes,
} from "./emr_InstanceFleetLaunchSpecificationsSpotSpecification";
import {
  emr_InstanceFleetLaunchSpecificationsOnDemandSpecification,
  emr_InstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes,
} from "./emr_InstanceFleetLaunchSpecificationsOnDemandSpecification";

export interface emr_InstanceFleetLaunchSpecifications {
  // Configuration block for spot instances launch specifications
  spotSpecifications?: Array<emr_InstanceFleetLaunchSpecificationsSpotSpecification>;

  // Configuration block for on demand instances launch specifications
  onDemandSpecifications?: Array<emr_InstanceFleetLaunchSpecificationsOnDemandSpecification>;
}

export function emr_InstanceFleetLaunchSpecifications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "spotSpecifications",
      "Configuration block for spot instances launch specifications",
      () => emr_InstanceFleetLaunchSpecificationsSpotSpecification_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "onDemandSpecifications",
      "Configuration block for on demand instances launch specifications",
      () =>
        emr_InstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes(),
      false,
      true,
    ),
  ];
}
