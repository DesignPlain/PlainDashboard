import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  monitoring_UptimeCheckConfigTcpCheckPingConfig,
  monitoring_UptimeCheckConfigTcpCheckPingConfig_GetTypes,
} from './monitoring_UptimeCheckConfigTcpCheckPingConfig';

export interface monitoring_UptimeCheckConfigTcpCheck {
  // The port to the page to run the check against. Will be combined with host (specified within the `monitored_resource`) to construct the full URL.
  port?: number;

  /*
Contains information needed to add pings to a TCP check.
Structure is documented below.
*/
  pingConfig?: monitoring_UptimeCheckConfigTcpCheckPingConfig;
}

export function monitoring_UptimeCheckConfigTcpCheck_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      'port',
      'The port to the page to run the check against. Will be combined with host (specified within the `monitored_resource`) to construct the full URL.',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'pingConfig',
      'Contains information needed to add pings to a TCP check.\nStructure is documented below.',
      () => monitoring_UptimeCheckConfigTcpCheckPingConfig_GetTypes(),
      false,
      false,
    ),
  ];
}
