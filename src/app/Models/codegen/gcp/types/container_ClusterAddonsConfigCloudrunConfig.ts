import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface container_ClusterAddonsConfigCloudrunConfig {
  // The status of the CloudRun addon. It is disabled by default. Set `disabled=false` to enable.
  disabled?: boolean;

  /*
The load balancer type of CloudRun ingress service. It is external load balancer by default.
Set `load_balancer_type=LOAD_BALANCER_TYPE_INTERNAL` to configure it as internal load balancer.
*/
  loadBalancerType?: string;
}

export function container_ClusterAddonsConfigCloudrunConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'disabled',
      'The status of the CloudRun addon. It is disabled by default. Set `disabled=false` to enable.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      'loadBalancerType',
      'The load balancer type of CloudRun ingress service. It is external load balancer by default.\nSet `load_balancer_type=LOAD_BALANCER_TYPE_INTERNAL` to configure it as internal load balancer.',
      () => [],
      false,
      false,
    ),
  ];
}
