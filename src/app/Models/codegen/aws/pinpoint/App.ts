import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  pinpoint_AppQuietTime,
  pinpoint_AppQuietTime_GetTypes,
} from "../types/pinpoint_AppQuietTime";
import {
  pinpoint_AppCampaignHook,
  pinpoint_AppCampaignHook_GetTypes,
} from "../types/pinpoint_AppCampaignHook";
import {
  pinpoint_AppLimits,
  pinpoint_AppLimits_GetTypes,
} from "../types/pinpoint_AppLimits";

export interface AppArgs {
  // The name of the Pinpoint application. Conflicts with `name`
  namePrefix?: string;

  // The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own
  quietTime?: pinpoint_AppQuietTime;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign
  campaignHook?: pinpoint_AppCampaignHook;

  // The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own
  limits?: pinpoint_AppLimits;

  // The application name. By default generated by Pulumi
  name?: string;
}
export class App extends DS_Resource {
  // Amazon Resource Name (ARN) of the PinPoint Application
  public arn?: string;

  // The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own
  public limits?: pinpoint_AppLimits;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // The Application ID of the Pinpoint App.
  public applicationId?: string;

  // The application name. By default generated by Pulumi
  public name?: string;

  // The name of the Pinpoint application. Conflicts with `name`
  public namePrefix?: string;

  // The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own
  public quietTime?: pinpoint_AppQuietTime;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign
  public campaignHook?: pinpoint_AppCampaignHook;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "campaignHook",
        "Specifies settings for invoking an AWS Lambda function that customizes a segment for a campaign",
        () => pinpoint_AppCampaignHook_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "limits",
        "The default campaign limits for the app. These limits apply to each campaign for the app, unless the campaign overrides the default with limits of its own",
        () => pinpoint_AppLimits_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The application name. By default generated by Pulumi",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "The name of the Pinpoint application. Conflicts with `name`",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "quietTime",
        "The default quiet time for the app. Each campaign for this app sends no messages during this time unless the campaign overrides the default with a quiet time of its own",
        () => pinpoint_AppQuietTime_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}