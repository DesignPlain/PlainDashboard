import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  rum_AppMonitorAppMonitorConfiguration,
  rum_AppMonitorAppMonitorConfiguration_GetTypes,
} from '../types/rum_AppMonitorAppMonitorConfiguration';
import {
  rum_AppMonitorCustomEvents,
  rum_AppMonitorCustomEvents_GetTypes,
} from '../types/rum_AppMonitorCustomEvents';

export interface AppMonitorArgs {
  // Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter  specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. Default value is `false`.
  cwLogEnabled?: boolean;

  // The top-level internet domain name for which your application has administrative authority.
  domain?: string;

  // The name of the log stream.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // configuration data for the app monitor. See app_monitor_configuration below.
  appMonitorConfiguration?: rum_AppMonitorAppMonitorConfiguration;

  // Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are `DISABLED`. See custom_events below.
  customEvents?: rum_AppMonitorCustomEvents;
}
export class AppMonitor extends DS_Resource {
  // configuration data for the app monitor. See app_monitor_configuration below.
  public appMonitorConfiguration?: rum_AppMonitorAppMonitorConfiguration;

  // The unique ID of the app monitor. Useful for JS templates.
  public appMonitorId?: string;

  // Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are `DISABLED`. See custom_events below.
  public customEvents?: rum_AppMonitorCustomEvents;

  // Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter  specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. Default value is `false`.
  public cwLogEnabled?: boolean;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) specifying the app monitor.
  public arn?: string;

  // The name of the log group where the copies are stored.
  public cwLogGroup?: string;

  // The top-level internet domain name for which your application has administrative authority.
  public domain?: string;

  // The name of the log stream.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'appMonitorConfiguration',
        'configuration data for the app monitor. See app_monitor_configuration below.',
        () => rum_AppMonitorAppMonitorConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'customEvents',
        'Specifies whether this app monitor allows the web client to define and send custom events. If you omit this parameter, custom events are `DISABLED`. See custom_events below.',
        () => rum_AppMonitorCustomEvents_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'cwLogEnabled',
        'Data collected by RUM is kept by RUM for 30 days and then deleted. This parameter  specifies whether RUM sends a copy of this telemetry data to Amazon CloudWatch Logs in your account. This enables you to keep the telemetry data for more than 30 days, but it does incur Amazon CloudWatch Logs charges. Default value is `false`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domain',
        'The top-level internet domain name for which your application has administrative authority.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the log stream.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
