import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig,
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig_GetTypes,
} from "./Dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig";
import {
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy,
  Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes,
} from "./Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy";

export interface Dataproc_ClusterClusterConfigPreemptibleWorkerConfig {
  /*
Specifies the preemptibility of the secondary workers. The default value is `PREEMPTIBLE`
Accepted values are:
- PREEMPTIBILITY_UNSPECIFIED
- NON_PREEMPTIBLE
- PREEMPTIBLE
*/
  Preemptibility?: string;

  // Disk Config
  DiskConfig?: Dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig;

  // Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.
  InstanceFlexibilityPolicy?: Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy;

  // List of preemptible instance names which have been assigned to the cluster.
  InstanceNames?: Array<string>;

  /*
Specifies the number of preemptible nodes to create.
Defaults to 0.
*/
  NumInstances?: number;
}

export function Dataproc_ClusterClusterConfigPreemptibleWorkerConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "DiskConfig",
      "Disk Config",
      Dataproc_ClusterClusterConfigPreemptibleWorkerConfigDiskConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "InstanceFlexibilityPolicy",
      "Instance flexibility Policy allowing a mixture of VM shapes and provisioning models.",
      Dataproc_ClusterClusterConfigPreemptibleWorkerConfigInstanceFlexibilityPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "InstanceNames",
      "List of preemptible instance names which have been assigned to the cluster.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "NumInstances",
      "Specifies the number of preemptible nodes to create.\nDefaults to 0.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Preemptibility",
      "Specifies the preemptibility of the secondary workers. The default value is `PREEMPTIBLE`\nAccepted values are:\n* PREEMPTIBILITY_UNSPECIFIED\n* NON_PREEMPTIBLE\n* PREEMPTIBLE",
      [],
      false,
      true,
    ),
  ];
}
