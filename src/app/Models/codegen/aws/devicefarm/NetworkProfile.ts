import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface NetworkProfileArgs {
  // The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`.
  uplinkBandwidthBits?: number;

  // Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`.
  uplinkDelayMs?: number;

  // Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`.
  uplinkJitterMs?: number;

  // The description of the network profile.
  description?: string;

  // The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`.
  downlinkBandwidthBits?: number;

  // Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`.
  downlinkDelayMs?: number;

  // Proportion of received packets that fail to arrive from `0` to `100` percent.
  downlinkLossPercent?: number;

  // The ARN of the project for the network profile.
  projectArn?: string;

  // Proportion of received packets that fail to arrive from `0` to `100` percent.
  uplinkLossPercent?: number;

  // Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`.
  downlinkJitterMs?: number;

  // The name for the network profile.
  name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The type of network profile to create. Valid values are listed are `PRIVATE` and `CURATED`.
  type?: string;
}
export class NetworkProfile extends DS_Resource {
  // The Amazon Resource Name of this network profile.
  public arn?: string;

  // Proportion of received packets that fail to arrive from `0` to `100` percent.
  public downlinkLossPercent?: number;

  // The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`.
  public uplinkBandwidthBits?: number;

  // Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`.
  public uplinkJitterMs?: number;

  // Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`.
  public downlinkDelayMs?: number;

  // Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`.
  public downlinkJitterMs?: number;

  // The ARN of the project for the network profile.
  public projectArn?: string;

  // Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`.
  public uplinkDelayMs?: number;

  // The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`.
  public downlinkBandwidthBits?: number;

  // The type of network profile to create. Valid values are listed are `PRIVATE` and `CURATED`.
  public type?: string;

  // The description of the network profile.
  public description?: string;

  // The name for the network profile.
  public name?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Proportion of received packets that fail to arrive from `0` to `100` percent.
  public uplinkLossPercent?: number;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        'downlinkDelayMs',
        'Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'projectArn',
        'The ARN of the project for the network profile.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'uplinkLossPercent',
        'Proportion of received packets that fail to arrive from `0` to `100` percent.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name for the network profile.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'uplinkDelayMs',
        'Delay time for all packets to destination in milliseconds as an integer from `0` to `2000`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'uplinkJitterMs',
        'Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'The description of the network profile.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'downlinkJitterMs',
        'Time variation in the delay of received packets in milliseconds as an integer from `0` to `2000`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'type',
        'The type of network profile to create. Valid values are listed are `PRIVATE` and `CURATED`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'uplinkBandwidthBits',
        'The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'downlinkBandwidthBits',
        'The data throughput rate in bits per second, as an integer from `0` to `104857600`. Default value is `104857600`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        'downlinkLossPercent',
        'Proportion of received packets that fail to arrive from `0` to `100` percent.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
