import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes,
} from "./dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult";
import {
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList,
  dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes,
} from "./dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList";

export interface dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy {
  // List of instance selection options that the group will use when creating new VMs.
  instanceSelectionLists?: Array<dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList>;

  // A list of instance selection results in the group.
  instanceSelectionResults?: Array<dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult>;
}

export function dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "instanceSelectionResults",
      "A list of instance selection results in the group.",
      dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionResult_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "instanceSelectionLists",
      "List of instance selection options that the group will use when creating new VMs.",
      dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicyInstanceSelectionList_GetTypes(),
      false,
      true,
    ),
  ];
}
