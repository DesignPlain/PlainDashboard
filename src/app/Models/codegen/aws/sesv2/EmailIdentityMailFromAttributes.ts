import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface EmailIdentityMailFromAttributesArgs {
  // The action to take if the required MX record isn't found when you send an email. Valid values: `USE_DEFAULT_VALUE`, `REJECT_MESSAGE`.
  behaviorOnMxFailure?: string;

  // The verified email identity.
  emailIdentity?: string;

  // The custom MAIL FROM domain that you want the verified identity to use. Required if `behavior_on_mx_failure` is `REJECT_MESSAGE`.
  mailFromDomain?: string;
}
export class EmailIdentityMailFromAttributes extends DS_Resource {
  // The action to take if the required MX record isn't found when you send an email. Valid values: `USE_DEFAULT_VALUE`, `REJECT_MESSAGE`.
  public behaviorOnMxFailure?: string;

  // The verified email identity.
  public emailIdentity?: string;

  // The custom MAIL FROM domain that you want the verified identity to use. Required if `behavior_on_mx_failure` is `REJECT_MESSAGE`.
  public mailFromDomain?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "behaviorOnMxFailure",
        "The action to take if the required MX record isn't found when you send an email. Valid values: `USE_DEFAULT_VALUE`, `REJECT_MESSAGE`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "emailIdentity",
        "The verified email identity.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "mailFromDomain",
        "The custom MAIL FROM domain that you want the verified identity to use. Required if `behavior_on_mx_failure` is `REJECT_MESSAGE`.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
