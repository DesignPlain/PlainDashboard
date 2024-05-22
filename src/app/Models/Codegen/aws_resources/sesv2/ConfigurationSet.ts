import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sesv2_ConfigurationSetDeliveryOptions,
  sesv2_ConfigurationSetDeliveryOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetDeliveryOptions";
import {
  sesv2_ConfigurationSetReputationOptions,
  sesv2_ConfigurationSetReputationOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetReputationOptions";
import {
  sesv2_ConfigurationSetSendingOptions,
  sesv2_ConfigurationSetSendingOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetSendingOptions";
import {
  sesv2_ConfigurationSetSuppressionOptions,
  sesv2_ConfigurationSetSuppressionOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetSuppressionOptions";
import {
  sesv2_ConfigurationSetTrackingOptions,
  sesv2_ConfigurationSetTrackingOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetTrackingOptions";
import {
  sesv2_ConfigurationSetVdmOptions,
  sesv2_ConfigurationSetVdmOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetVdmOptions";

export interface ConfigurationSetArgs {
  // The name of the configuration set.
  configurationSetName?: string;

  // An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
  deliveryOptions?: sesv2_ConfigurationSetDeliveryOptions;

  // An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
  reputationOptions?: sesv2_ConfigurationSetReputationOptions;

  // An object that defines whether or not Amazon SES can send email that you send using the configuration set.
  sendingOptions?: sesv2_ConfigurationSetSendingOptions;

  // An object that contains information about the suppression list preferences for your account.
  suppressionOptions?: sesv2_ConfigurationSetSuppressionOptions;

  // A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // An object that defines the open and click tracking options for emails that you send using the configuration set.
  trackingOptions?: sesv2_ConfigurationSetTrackingOptions;

  // An object that defines the VDM settings that apply to emails that you send using the configuration set.
  vdmOptions?: sesv2_ConfigurationSetVdmOptions;
}
export class ConfigurationSet extends Resource {
  // The name of the configuration set.
  public configurationSetName?: string;

  // An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
  public reputationOptions?: sesv2_ConfigurationSetReputationOptions;

  // An object that defines whether or not Amazon SES can send email that you send using the configuration set.
  public sendingOptions?: sesv2_ConfigurationSetSendingOptions;

  // An object that defines the VDM settings that apply to emails that you send using the configuration set.
  public vdmOptions?: sesv2_ConfigurationSetVdmOptions;

  //
  public tagsAll?: Map<string, string>;

  // An object that defines the open and click tracking options for emails that you send using the configuration set.
  public trackingOptions?: sesv2_ConfigurationSetTrackingOptions;

  // ARN of the Configuration Set.
  public arn?: string;

  // An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.
  public deliveryOptions?: sesv2_ConfigurationSetDeliveryOptions;

  // An object that contains information about the suppression list preferences for your account.
  public suppressionOptions?: sesv2_ConfigurationSetSuppressionOptions;

  // A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trackingOptions",
        "An object that defines the open and click tracking options for emails that you send using the configuration set.",
        sesv2_ConfigurationSetTrackingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vdmOptions",
        "An object that defines the VDM settings that apply to emails that you send using the configuration set.",
        sesv2_ConfigurationSetVdmOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationSetName",
        "The name of the configuration set.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deliveryOptions",
        "An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set.",
        sesv2_ConfigurationSetDeliveryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reputationOptions",
        "An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.",
        sesv2_ConfigurationSetReputationOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sendingOptions",
        "An object that defines whether or not Amazon SES can send email that you send using the configuration set.",
        sesv2_ConfigurationSetSendingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "suppressionOptions",
        "An object that contains information about the suppression list preferences for your account.",
        sesv2_ConfigurationSetSuppressionOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
