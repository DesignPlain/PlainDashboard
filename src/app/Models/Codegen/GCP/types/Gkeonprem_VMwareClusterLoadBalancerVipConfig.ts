import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareClusterLoadBalancerVipConfig {
  // The VIP which you previously set aside for the Kubernetes API of this cluster.
  ControlPlaneVip?: string;

  /*
The VIP which you previously set aside for ingress traffic into this cluster.

<a name="nested_f5_config"></a>The `f5_config` block supports:
*/
  IngressVip?: string;
}

export function Gkeonprem_VMwareClusterLoadBalancerVipConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "ControlPlaneVip",
      "The VIP which you previously set aside for the Kubernetes API of this cluster.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IngressVip",
      'The VIP which you previously set aside for ingress traffic into this cluster.\n\n<a name="nested_f5_config"></a>The `f5_config` block supports:',
      [],
      false,
      false,
    ),
  ];
}
