import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sesv2_ConfigurationSetTrackingOptions,
  sesv2_ConfigurationSetTrackingOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetTrackingOptions";
import {
  sesv2_ConfigurationSetVdmOptions,
  sesv2_ConfigurationSetVdmOptions_GetTypes,
} from "../types/sesv2_ConfigurationSetVdmOptions";
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

export interface ConfigurationSetArgs {
  // A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // An object that defines the open and click tracking options for emails that you send using the configuration set. See `tracking_options` Block for details.
  trackingOptions?: sesv2_ConfigurationSetTrackingOptions;

  // An object that defines the VDM settings that apply to emails that you send using the configuration set. See `vdm_options` Block for details.
  vdmOptions?: sesv2_ConfigurationSetVdmOptions;

  // The name of the configuration set.
  configurationSetName?: string;

  // An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. See `delivery_options` Block for details.
  deliveryOptions?: sesv2_ConfigurationSetDeliveryOptions;

  // An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. See `reputation_options` Block for details.
  reputationOptions?: sesv2_ConfigurationSetReputationOptions;

  // An object that defines whether or not Amazon SES can send email that you send using the configuration set. See `sending_options` Block for details.
  sendingOptions?: sesv2_ConfigurationSetSendingOptions;

  // An object that contains information about the suppression list preferences for your account. See `suppression_options` Block for details.
  suppressionOptions?: sesv2_ConfigurationSetSuppressionOptions;
}
export class ConfigurationSet extends DS_Resource {
  // An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. See `delivery_options` Block for details.
  public deliveryOptions?: sesv2_ConfigurationSetDeliveryOptions;

  // An object that defines whether or not Amazon SES can send email that you send using the configuration set. See `sending_options` Block for details.
  public sendingOptions?: sesv2_ConfigurationSetSendingOptions;

  // An object that contains information about the suppression list preferences for your account. See `suppression_options` Block for details.
  public suppressionOptions?: sesv2_ConfigurationSetSuppressionOptions;

  //
  public tagsAll?: Map<string, string>;

  // ARN of the Configuration Set.
  public arn?: string;

  // An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. See `reputation_options` Block for details.
  public reputationOptions?: sesv2_ConfigurationSetReputationOptions;

  // A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // An object that defines the open and click tracking options for emails that you send using the configuration set. See `tracking_options` Block for details.
  public trackingOptions?: sesv2_ConfigurationSetTrackingOptions;

  // An object that defines the VDM settings that apply to emails that you send using the configuration set. See `vdm_options` Block for details.
  public vdmOptions?: sesv2_ConfigurationSetVdmOptions;

  // The name of the configuration set.
  public configurationSetName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "deliveryOptions",
        "An object that defines the dedicated IP pool that is used to send emails that you send using the configuration set. See `delivery_options` Block for details.",
        () => sesv2_ConfigurationSetDeliveryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reputationOptions",
        "An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set. See `reputation_options` Block for details.",
        () => sesv2_ConfigurationSetReputationOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sendingOptions",
        "An object that defines whether or not Amazon SES can send email that you send using the configuration set. See `sending_options` Block for details.",
        () => sesv2_ConfigurationSetSendingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "suppressionOptions",
        "An object that contains information about the suppression list preferences for your account. See `suppression_options` Block for details.",
        () => sesv2_ConfigurationSetSuppressionOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the service. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trackingOptions",
        "An object that defines the open and click tracking options for emails that you send using the configuration set. See `tracking_options` Block for details.",
        () => sesv2_ConfigurationSetTrackingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vdmOptions",
        "An object that defines the VDM settings that apply to emails that you send using the configuration set. See `vdm_options` Block for details.",
        () => sesv2_ConfigurationSetVdmOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationSetName",
        "The name of the configuration set.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
