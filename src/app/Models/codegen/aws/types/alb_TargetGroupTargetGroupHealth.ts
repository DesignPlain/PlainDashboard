import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  alb_TargetGroupTargetGroupHealthDnsFailover,
  alb_TargetGroupTargetGroupHealthDnsFailover_GetTypes,
} from './alb_TargetGroupTargetGroupHealthDnsFailover';
import {
  alb_TargetGroupTargetGroupHealthUnhealthyStateRouting,
  alb_TargetGroupTargetGroupHealthUnhealthyStateRouting_GetTypes,
} from './alb_TargetGroupTargetGroupHealthUnhealthyStateRouting';

export interface alb_TargetGroupTargetGroupHealth {
  // Block to configure DNS Failover requirements. See DNS Failover below for details on attributes.
  dnsFailover?: alb_TargetGroupTargetGroupHealthDnsFailover;

  // Block to configure Unhealthy State Routing requirements. See Unhealthy State Routing below for details on attributes.
  unhealthyStateRouting?: alb_TargetGroupTargetGroupHealthUnhealthyStateRouting;
}

export function alb_TargetGroupTargetGroupHealth_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'dnsFailover',
      'Block to configure DNS Failover requirements. See DNS Failover below for details on attributes.',
      () => alb_TargetGroupTargetGroupHealthDnsFailover_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'unhealthyStateRouting',
      'Block to configure Unhealthy State Routing requirements. See Unhealthy State Routing below for details on attributes.',
      () => alb_TargetGroupTargetGroupHealthUnhealthyStateRouting_GetTypes(),
      false,
      false,
    ),
  ];
}
