import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification,
  emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes,
} from "./emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification";
import {
  emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification,
  emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification_GetTypes,
} from "./emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification";

export interface emr_ClusterMasterInstanceFleetLaunchSpecifications {
  // Configuration block for on demand instances launch specifications.
  onDemandSpecifications?: Array<emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification>;

  // Configuration block for spot instances launch specifications.
  spotSpecifications?: Array<emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification>;
}

export function emr_ClusterMasterInstanceFleetLaunchSpecifications_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "onDemandSpecifications",
      "Configuration block for on demand instances launch specifications.",
      emr_ClusterMasterInstanceFleetLaunchSpecificationsOnDemandSpecification_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "spotSpecifications",
      "Configuration block for spot instances launch specifications.",
      emr_ClusterMasterInstanceFleetLaunchSpecificationsSpotSpecification_GetTypes(),
      false,
      true,
    ),
  ];
}
