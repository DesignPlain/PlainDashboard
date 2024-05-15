import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterNodePoolPlacementPolicy {
  // If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.
  PolicyName?: string;

  // TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies
  TpuTopology?: string;

  /*
Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);
`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.
*/
  Type?: string;
}

export function Container_ClusterNodePoolPlacementPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "PolicyName",
      "If set, refers to the name of a custom resource policy supplied by the user. The resource policy must be in the same project and region as the node pool. If not found, InvalidArgument error is returned.",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.String,
      "TpuTopology",
      "TPU placement topology for pod slice node pool. https://cloud.google.com/tpu/docs/types-topologies#tpu_topologies",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Type",
      "Telemetry integration for the cluster. Supported values (`ENABLED, DISABLED, SYSTEM_ONLY`);\n`SYSTEM_ONLY` (Only system components are monitored and logged) is only available in GKE versions 1.15 and later.",
      [],
      true,
      false,
    ),
  ];
}
