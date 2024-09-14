import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes,
} from "./dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult";
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes,
} from "./dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList";

export interface dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy {
  // A list of instance selection results in the group.
  instanceSelectionResults?: Array<dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult>;

  // List of instance selection options that the group will use when creating new VMs.
  instanceSelectionLists?: Array<dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList>;
}

export function dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "instanceSelectionResults",
      "A list of instance selection results in the group.",
      () =>
        dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceSelectionLists",
      "List of instance selection options that the group will use when creating new VMs.",
      () =>
        dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes(),
      false,
      true,
    ),
  ];
}
