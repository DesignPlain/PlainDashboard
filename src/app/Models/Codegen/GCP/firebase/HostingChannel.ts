import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface HostingChannelArgs {
  // Required. The ID of the site in which to create this channel.
  siteId?: string;

  /*
Input only. A time-to-live for this channel. Sets `expire_time` to the provided
duration past the time of the request. A duration in seconds with up to nine fractional
digits, terminated by 's'. Example: "86400s" (one day).
*/
  ttl?: string;

  /*
Required. Immutable. A unique ID within the site that identifies the channel.


- - -
*/
  channelId?: string;

  /*
The time at which the channel will be automatically deleted. If null, the channel
will not be automatically deleted. This field is present in the output whether it's
set directly or via the `ttl` field.
*/
  expireTime?: string;

  /*
Text labels used for extra metadata and/or filtering
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The number of previous releases to retain on the channel for rollback or other
purposes. Must be a number between 1-100. Defaults to 10 for new channels.
*/
  retainedReleaseCount?: number;
}
export class HostingChannel extends Resource {
  /*
The time at which the channel will be automatically deleted. If null, the channel
will not be automatically deleted. This field is present in the output whether it's
set directly or via the `ttl` field.
*/
  public expireTime?: string;

  /*
Text labels used for extra metadata and/or filtering
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  /*
The number of previous releases to retain on the channel for rollback or other
purposes. Must be a number between 1-100. Defaults to 10 for new channels.
*/
  public retainedReleaseCount?: number;

  // Required. The ID of the site in which to create this channel.
  public siteId?: string;

  /*
Input only. A time-to-live for this channel. Sets `expire_time` to the provided
duration past the time of the request. A duration in seconds with up to nine fractional
digits, terminated by 's'. Example: "86400s" (one day).
*/
  public ttl?: string;

  /*
Required. Immutable. A unique ID within the site that identifies the channel.


- - -
*/
  public channelId?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
The fully-qualified resource name for the channel, in the format:
sites/SITE_ID/channels/CHANNEL_ID
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "channelId",
        "Required. Immutable. A unique ID within the site that identifies the channel.\n\n\n- - -",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "expireTime",
        "The time at which the channel will be automatically deleted. If null, the channel\nwill not be automatically deleted. This field is present in the output whether it's\nset directly or via the `ttl` field.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "Text labels used for extra metadata and/or filtering\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "retainedReleaseCount",
        "The number of previous releases to retain on the channel for rollback or other\npurposes. Must be a number between 1-100. Defaults to 10 for new channels.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "siteId",
        "Required. The ID of the site in which to create this channel.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ttl",
        "Input only. A time-to-live for this channel. Sets `expire_time` to the provided\nduration past the time of the request. A duration in seconds with up to nine fractional\ndigits, terminated by 's'. Example: \"86400s\" (one day).",
        [],
        false,
        true,
      ),
    ];
  }
}
