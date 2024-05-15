import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_ClusterAddonsConfigCloudrunConfig {
  // The status of the CloudRun addon. It is disabled by default. Set `disabled=false` to enable.
  Disabled?: boolean;

  /*
The load balancer type of CloudRun ingress service. It is external load balancer by default.
Set `load_balancer_type=LOAD_BALANCER_TYPE_INTERNAL` to configure it as internal load balancer.
*/
  LoadBalancerType?: string;
}

export function Container_ClusterAddonsConfigCloudrunConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "Disabled",
      "The status of the CloudRun addon. It is disabled by default. Set `disabled=false` to enable.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "LoadBalancerType",
      "The load balancer type of CloudRun ingress service. It is external load balancer by default.\nSet `load_balancer_type=LOAD_BALANCER_TYPE_INTERNAL` to configure it as internal load balancer.",
      [],
      false,
      false,
    ),
  ];
}
