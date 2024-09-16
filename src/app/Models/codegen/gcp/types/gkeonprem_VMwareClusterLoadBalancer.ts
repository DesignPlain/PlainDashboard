import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  gkeonprem_VMwareClusterLoadBalancerMetalLbConfig,
  gkeonprem_VMwareClusterLoadBalancerMetalLbConfig_GetTypes,
} from './gkeonprem_VMwareClusterLoadBalancerMetalLbConfig';
import {
  gkeonprem_VMwareClusterLoadBalancerVipConfig,
  gkeonprem_VMwareClusterLoadBalancerVipConfig_GetTypes,
} from './gkeonprem_VMwareClusterLoadBalancerVipConfig';
import {
  gkeonprem_VMwareClusterLoadBalancerF5Config,
  gkeonprem_VMwareClusterLoadBalancerF5Config_GetTypes,
} from './gkeonprem_VMwareClusterLoadBalancerF5Config';
import {
  gkeonprem_VMwareClusterLoadBalancerManualLbConfig,
  gkeonprem_VMwareClusterLoadBalancerManualLbConfig_GetTypes,
} from './gkeonprem_VMwareClusterLoadBalancerManualLbConfig';

export interface gkeonprem_VMwareClusterLoadBalancer {
  /*
Configuration for MetalLB typed load balancers.
Structure is documented below.
*/
  metalLbConfig?: gkeonprem_VMwareClusterLoadBalancerMetalLbConfig;

  /*
The VIPs used by the load balancer.
Structure is documented below.
*/
  vipConfig?: gkeonprem_VMwareClusterLoadBalancerVipConfig;

  /*
Configuration for F5 Big IP typed load balancers.
Structure is documented below.
*/
  f5Config?: gkeonprem_VMwareClusterLoadBalancerF5Config;

  /*
Manually configured load balancers.
Structure is documented below.
*/
  manualLbConfig?: gkeonprem_VMwareClusterLoadBalancerManualLbConfig;
}

export function gkeonprem_VMwareClusterLoadBalancer_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'metalLbConfig',
      'Configuration for MetalLB typed load balancers.\nStructure is documented below.',
      () => gkeonprem_VMwareClusterLoadBalancerMetalLbConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'vipConfig',
      'The VIPs used by the load balancer.\nStructure is documented below.',
      () => gkeonprem_VMwareClusterLoadBalancerVipConfig_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'f5Config',
      'Configuration for F5 Big IP typed load balancers.\nStructure is documented below.',
      () => gkeonprem_VMwareClusterLoadBalancerF5Config_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'manualLbConfig',
      'Manually configured load balancers.\nStructure is documented below.',
      () => gkeonprem_VMwareClusterLoadBalancerManualLbConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
