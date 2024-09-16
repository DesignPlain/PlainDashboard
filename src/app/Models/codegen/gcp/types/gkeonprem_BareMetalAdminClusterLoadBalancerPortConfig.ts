import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig {
  // The port that control plane hosted load balancers will listen on.
  controlPlaneLoadBalancerPort?: number;
}

export function gkeonprem_BareMetalAdminClusterLoadBalancerPortConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'controlPlaneLoadBalancerPort',
      'The port that control plane hosted load balancers will listen on.',
      () => [],
      true,
      false,
    ),
  ];
}
