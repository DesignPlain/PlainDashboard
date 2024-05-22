import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  chime_SdkvoiceSipRuleTargetApplication,
  chime_SdkvoiceSipRuleTargetApplication_GetTypes,
} from "../types/chime_SdkvoiceSipRuleTargetApplication";

export interface SdkvoiceSipRuleArgs {
  // The name of the SIP rule.
  name?: string;

  // List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used. See `target_applications`.
  targetApplications?: Array<chime_SdkvoiceSipRuleTargetApplication>;

  // The type of trigger assigned to the SIP rule in `trigger_value`. Valid values are `RequestUriHostname` or `ToPhoneNumber`.
  triggerType?: string;

  /*
If `trigger_type` is `RequestUriHostname`, the value can be the outbound host name of an Amazon Chime Voice Connector. If `trigger_type` is `ToPhoneNumber`, the value can be a customer-owned phone number in the E164 format. The Sip Media Application specified in the Sip Rule is triggered if the request URI in an incoming SIP request matches the `RequestUriHostname`, or if the "To" header in the incoming SIP request matches the `ToPhoneNumber` value.

The following arguments are optional:
*/
  triggerValue?: string;

  // Enables or disables a rule. You must disable rules before you can delete them.
  disabled?: boolean;
}
export class SdkvoiceSipRule extends Resource {
  // The name of the SIP rule.
  public name?: string;

  // List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used. See `target_applications`.
  public targetApplications?: Array<chime_SdkvoiceSipRuleTargetApplication>;

  // The type of trigger assigned to the SIP rule in `trigger_value`. Valid values are `RequestUriHostname` or `ToPhoneNumber`.
  public triggerType?: string;

  /*
If `trigger_type` is `RequestUriHostname`, the value can be the outbound host name of an Amazon Chime Voice Connector. If `trigger_type` is `ToPhoneNumber`, the value can be a customer-owned phone number in the E164 format. The Sip Media Application specified in the Sip Rule is triggered if the request URI in an incoming SIP request matches the `RequestUriHostname`, or if the "To" header in the incoming SIP request matches the `ToPhoneNumber` value.

The following arguments are optional:
*/
  public triggerValue?: string;

  // Enables or disables a rule. You must disable rules before you can delete them.
  public disabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the SIP rule.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "targetApplications",
        "List of SIP media applications with priority and AWS Region. Only one SIP application per AWS Region can be used. See `target_applications`.",
        chime_SdkvoiceSipRuleTargetApplication_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "triggerType",
        "The type of trigger assigned to the SIP rule in `trigger_value`. Valid values are `RequestUriHostname` or `ToPhoneNumber`.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "triggerValue",
        'If `trigger_type` is `RequestUriHostname`, the value can be the outbound host name of an Amazon Chime Voice Connector. If `trigger_type` is `ToPhoneNumber`, the value can be a customer-owned phone number in the E164 format. The Sip Media Application specified in the Sip Rule is triggered if the request URI in an incoming SIP request matches the `RequestUriHostname`, or if the "To" header in the incoming SIP request matches the `ToPhoneNumber` value.\n\nThe following arguments are optional:',
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "Enables or disables a rule. You must disable rules before you can delete them.",
        [],
        false,
        false,
      ),
    ];
  }
}
