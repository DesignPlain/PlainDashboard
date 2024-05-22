import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface container_ClusterAddonsConfigHttpLoadBalancing {
  /*
Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when defaultSnatStatus is disabled.When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic

<a name="nested_cluster_telemetry"></a>The `cluster_telemetry` block supports
*/
  disabled?: boolean;
}

export function container_ClusterAddonsConfigHttpLoadBalancing_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "disabled",
      'Whether the cluster disables default in-node sNAT rules. In-node sNAT rules will be disabled when defaultSnatStatus is disabled.When disabled is set to false, default IP masquerade rules will be applied to the nodes to prevent sNAT on cluster internal traffic\n\n<a name="nested_cluster_telemetry"></a>The `cluster_telemetry` block supports',
      [],
      true,
      false,
    ),
  ];
}
