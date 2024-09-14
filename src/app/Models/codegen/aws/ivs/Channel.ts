import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ChannelArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Channel type, which determines the allowable resolution and bitrate. Valid values: `STANDARD`, `BASIC`.
  type?: string;

  // If `true`, channel is private (enabled for playback authorization).
  authorized?: boolean;

  // Channel latency mode. Valid values: `NORMAL`, `LOW`.
  latencyMode?: string;

  // Channel name.
  name?: string;

  // Recording configuration ARN.
  recordingConfigurationArn?: string;
}
export class Channel extends DS_Resource {
  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Channel type, which determines the allowable resolution and bitrate. Valid values: `STANDARD`, `BASIC`.
  public type?: string;

  // ARN of the Channel.
  public arn?: string;

  // Channel ingest endpoint, part of the definition of an ingest server, used when setting up streaming software.
  public ingestEndpoint?: string;

  // Channel playback URL.
  public playbackUrl?: string;

  // Recording configuration ARN.
  public recordingConfigurationArn?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // If `true`, channel is private (enabled for playback authorization).
  public authorized?: boolean;

  // Channel latency mode. Valid values: `NORMAL`, `LOW`.
  public latencyMode?: string;

  // Channel name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "recordingConfigurationArn",
        "Recording configuration ARN.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Channel type, which determines the allowable resolution and bitrate. Valid values: `STANDARD`, `BASIC`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "authorized",
        "If `true`, channel is private (enabled for playback authorization).",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "latencyMode",
        "Channel latency mode. Valid values: `NORMAL`, `LOW`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Channel name.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
