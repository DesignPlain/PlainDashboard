import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  apprunner_ServiceNetworkConfigurationEgressConfiguration,
  apprunner_ServiceNetworkConfigurationEgressConfiguration_GetTypes,
} from './apprunner_ServiceNetworkConfigurationEgressConfiguration';
import {
  apprunner_ServiceNetworkConfigurationIngressConfiguration,
  apprunner_ServiceNetworkConfigurationIngressConfiguration_GetTypes,
} from './apprunner_ServiceNetworkConfigurationIngressConfiguration';

export interface apprunner_ServiceNetworkConfiguration {
  // App Runner provides you with the option to choose between Internet Protocol version 4 (IPv4) and dual stack (IPv4 and IPv6) for your incoming public network configuration. Valid values: `IPV4`, `DUAL_STACK`. Default: `IPV4`.
  ipAddressType?: string;

  // Network configuration settings for outbound message traffic. See Egress Configuration below for more details.
  egressConfiguration?: apprunner_ServiceNetworkConfigurationEgressConfiguration;

  // Network configuration settings for inbound network traffic. See Ingress Configuration below for more details.
  ingressConfiguration?: apprunner_ServiceNetworkConfigurationIngressConfiguration;
}

export function apprunner_ServiceNetworkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'ipAddressType',
      'App Runner provides you with the option to choose between Internet Protocol version 4 (IPv4) and dual stack (IPv4 and IPv6) for your incoming public network configuration. Valid values: `IPV4`, `DUAL_STACK`. Default: `IPV4`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'egressConfiguration',
      'Network configuration settings for outbound message traffic. See Egress Configuration below for more details.',
      () => apprunner_ServiceNetworkConfigurationEgressConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ingressConfiguration',
      'Network configuration settings for inbound network traffic. See Ingress Configuration below for more details.',
      () =>
        apprunner_ServiceNetworkConfigurationIngressConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
