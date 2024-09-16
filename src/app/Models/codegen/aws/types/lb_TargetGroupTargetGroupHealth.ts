import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  lb_TargetGroupTargetGroupHealthDnsFailover,
  lb_TargetGroupTargetGroupHealthDnsFailover_GetTypes,
} from './lb_TargetGroupTargetGroupHealthDnsFailover';
import {
  lb_TargetGroupTargetGroupHealthUnhealthyStateRouting,
  lb_TargetGroupTargetGroupHealthUnhealthyStateRouting_GetTypes,
} from './lb_TargetGroupTargetGroupHealthUnhealthyStateRouting';

export interface lb_TargetGroupTargetGroupHealth {
  // Block to configure DNS Failover requirements. See DNS Failover below for details on attributes.
  dnsFailover?: lb_TargetGroupTargetGroupHealthDnsFailover;

  // Block to configure Unhealthy State Routing requirements. See Unhealthy State Routing below for details on attributes.
  unhealthyStateRouting?: lb_TargetGroupTargetGroupHealthUnhealthyStateRouting;
}

export function lb_TargetGroupTargetGroupHealth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dnsFailover',
      'Block to configure DNS Failover requirements. See DNS Failover below for details on attributes.',
      () => lb_TargetGroupTargetGroupHealthDnsFailover_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'unhealthyStateRouting',
      'Block to configure Unhealthy State Routing requirements. See Unhealthy State Routing below for details on attributes.',
      () => lb_TargetGroupTargetGroupHealthUnhealthyStateRouting_GetTypes(),
      false,
      false,
    ),
  ];
}
