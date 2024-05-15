import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostingChannelArgs {
  /*
Required. Immutable. A unique ID within the site that identifies the channel.


- - -
*/
  ChannelId?: string;

  /*
The time at which the channel will be automatically deleted. If null, the channel
will not be automatically deleted. This field is present in the output whether it's
set directly or via the `ttl` field.
*/
  ExpireTime?: string;

  /*
Text labels used for extra metadata and/or filtering
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The number of previous releases to retain on the channel for rollback or other
purposes. Must be a number between 1-100. Defaults to 10 for new channels.
*/
  RetainedReleaseCount?: number;

  // Required. The ID of the site in which to create this channel.
  SiteId?: string;

  /*
Input only. A time-to-live for this channel. Sets `expire_time` to the provided
duration past the time of the request. A duration in seconds with up to nine fractional
digits, terminated by 's'. Example: "86400s" (one day).
*/
  Ttl?: string;
}
export class HostingChannel extends Resource {
  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  /*
The number of previous releases to retain on the channel for rollback or other
purposes. Must be a number between 1-100. Defaults to 10 for new channels.
*/
  public RetainedReleaseCount?: number;

  /*
Text labels used for extra metadata and/or filtering
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The fully-qualified resource name for the channel, in the format:
sites/SITE_ID/channels/CHANNEL_ID
*/
  public Name?: string;

  // Required. The ID of the site in which to create this channel.
  public SiteId?: string;

  /*
Input only. A time-to-live for this channel. Sets `expire_time` to the provided
duration past the time of the request. A duration in seconds with up to nine fractional
digits, terminated by 's'. Example: "86400s" (one day).
*/
  public Ttl?: string;

  /*
Required. Immutable. A unique ID within the site that identifies the channel.


- - -
*/
  public ChannelId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
The time at which the channel will be automatically deleted. If null, the channel
will not be automatically deleted. This field is present in the output whether it's
set directly or via the `ttl` field.
*/
  public ExpireTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "RetainedReleaseCount",
        "The number of previous releases to retain on the channel for rollback or other\npurposes. Must be a number between 1-100. Defaults to 10 for new channels.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "SiteId",
        "Required. The ID of the site in which to create this channel.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Ttl",
        "Input only. A time-to-live for this channel. Sets `expire_time` to the provided\nduration past the time of the request. A duration in seconds with up to nine fractional\ndigits, terminated by 's'. Example: \"86400s\" (one day).",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ChannelId",
        "Required. Immutable. A unique ID within the site that identifies the channel.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ExpireTime",
        "The time at which the channel will be automatically deleted. If null, the channel\nwill not be automatically deleted. This field is present in the output whether it's\nset directly or via the `ttl` field.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        "Text labels used for extra metadata and/or filtering\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
