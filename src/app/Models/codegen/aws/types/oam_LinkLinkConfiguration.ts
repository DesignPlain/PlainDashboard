import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  oam_LinkLinkConfigurationLogGroupConfiguration,
  oam_LinkLinkConfigurationLogGroupConfiguration_GetTypes,
} from './oam_LinkLinkConfigurationLogGroupConfiguration';
import {
  oam_LinkLinkConfigurationMetricConfiguration,
  oam_LinkLinkConfigurationMetricConfiguration_GetTypes,
} from './oam_LinkLinkConfigurationMetricConfiguration';

export interface oam_LinkLinkConfiguration {
  // Configuration for filtering which log groups are to send log events from the source account to the monitoring account. See `log_group_configuration` Block for details.
  logGroupConfiguration?: oam_LinkLinkConfigurationLogGroupConfiguration;

  // Configuration for filtering which metric namespaces are to be shared from the source account to the monitoring account. See `metric_configuration` Block for details.
  metricConfiguration?: oam_LinkLinkConfigurationMetricConfiguration;
}

export function oam_LinkLinkConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'logGroupConfiguration',
      'Configuration for filtering which log groups are to send log events from the source account to the monitoring account. See `log_group_configuration` Block for details.',
      () => oam_LinkLinkConfigurationLogGroupConfiguration_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'metricConfiguration',
      'Configuration for filtering which metric namespaces are to be shared from the source account to the monitoring account. See `metric_configuration` Block for details.',
      () => oam_LinkLinkConfigurationMetricConfiguration_GetTypes(),
      false,
      false,
    ),
  ];
}
