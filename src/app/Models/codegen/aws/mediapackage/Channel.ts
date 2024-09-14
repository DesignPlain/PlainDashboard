import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  mediapackage_ChannelHlsIngest,
  mediapackage_ChannelHlsIngest_GetTypes,
} from "../types/mediapackage_ChannelHlsIngest";

export interface ChannelArgs {
  // A unique identifier describing the channel
  channelId?: string;

  // A description of the channel
  description?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Channel extends DS_Resource {
  // The ARN of the channel
  public arn?: string;

  // A unique identifier describing the channel
  public channelId?: string;

  // A description of the channel
  public description?: string;

  // A single item list of HLS ingest information
  public hlsIngests?: Array<mediapackage_ChannelHlsIngest>;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "channelId",
        "A unique identifier describing the channel",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the channel",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
