import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface MonitorArgs {
  // The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60.
  aggregationPeriod?: number;

  /*
The name of the monitor.

The following arguments are optional:
*/
  monitorName?: string;

  // Key-value tags for the monitor. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Monitor extends DS_Resource {
  // The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60.
  public aggregationPeriod?: number;

  // The ARN of the monitor.
  public arn?: string;

  /*
The name of the monitor.

The following arguments are optional:
*/
  public monitorName?: string;

  // Key-value tags for the monitor. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'aggregationPeriod',
        'The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'monitorName',
        'The name of the monitor.\n\nThe following arguments are optional:',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value tags for the monitor. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
