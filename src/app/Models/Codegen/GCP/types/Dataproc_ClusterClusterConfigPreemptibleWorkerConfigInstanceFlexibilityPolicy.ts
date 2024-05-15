import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList,
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes,
} from "./Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList";
import {
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult,
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes,
} from "./Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult";

export interface Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy {
  // List of instance selection options that the group will use when creating new VMs.
  InstanceSelectionLists?: Array<Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList>;

  // A list of instance selection results in the group.
  InstanceSelectionResults?: Array<Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult>;
}

export function Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "InstanceSelectionLists",
      "List of instance selection options that the group will use when creating new VMs.",
      Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes(),
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceSelectionResults",
      "A list of instance selection results in the group.",
      Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes(),
      false,
      false,
    ),
  ];
}
