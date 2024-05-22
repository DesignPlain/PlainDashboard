import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  ses_ConfigurationSetDeliveryOptions,
  ses_ConfigurationSetDeliveryOptions_GetTypes,
} from "../types/ses_ConfigurationSetDeliveryOptions";
import {
  ses_ConfigurationSetTrackingOptions,
  ses_ConfigurationSetTrackingOptions_GetTypes,
} from "../types/ses_ConfigurationSetTrackingOptions";

export interface ConfigurationSetArgs {
  // Whether email sending is enabled or disabled for the configuration set. The default value is `true`.
  sendingEnabled?: boolean;

  // Domain that is used to redirect email recipients to an Amazon SES-operated domain. See below. --NOTE:-- This functionality is best effort.
  trackingOptions?: ses_ConfigurationSetTrackingOptions;

  // Whether messages that use the configuration set are required to use TLS. See below.
  deliveryOptions?: ses_ConfigurationSetDeliveryOptions;

  /*
Name of the configuration set.

The following argument is optional:
*/
  name?: string;

  // Whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch. The default value is `false`.
  reputationMetricsEnabled?: boolean;
}
export class ConfigurationSet extends Resource {
  // SES configuration set ARN.
  public arn?: string;

  // Whether messages that use the configuration set are required to use TLS. See below.
  public deliveryOptions?: ses_ConfigurationSetDeliveryOptions;

  // Date and time at which the reputation metrics for the configuration set were last reset. Resetting these metrics is known as a fresh start.
  public lastFreshStart?: string;

  /*
Name of the configuration set.

The following argument is optional:
*/
  public name?: string;

  // Whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch. The default value is `false`.
  public reputationMetricsEnabled?: boolean;

  // Whether email sending is enabled or disabled for the configuration set. The default value is `true`.
  public sendingEnabled?: boolean;

  // Domain that is used to redirect email recipients to an Amazon SES-operated domain. See below. --NOTE:-- This functionality is best effort.
  public trackingOptions?: ses_ConfigurationSetTrackingOptions;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "trackingOptions",
        "Domain that is used to redirect email recipients to an Amazon SES-operated domain. See below. **NOTE:** This functionality is best effort.",
        ses_ConfigurationSetTrackingOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "deliveryOptions",
        "Whether messages that use the configuration set are required to use TLS. See below.",
        ses_ConfigurationSetDeliveryOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the configuration set.\n\nThe following argument is optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "reputationMetricsEnabled",
        "Whether or not Amazon SES publishes reputation metrics for the configuration set, such as bounce and complaint rates, to Amazon CloudWatch. The default value is `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "sendingEnabled",
        "Whether email sending is enabled or disabled for the configuration set. The default value is `true`.",
        [],
        false,
        false,
      ),
    ];
  }
}
