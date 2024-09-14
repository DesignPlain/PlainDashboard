import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface StandardsControlArgs {
  // The standards control ARN. See the AWS documentation for how to list existing controls using [`get-enabled-standards`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/get-enabled-standards.html) and [`describe-standards-controls`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/describe-standards-controls.html).
  standardsControlArn?: string;

  // The control status could be `ENABLED` or `DISABLED`. You have to specify `disabled_reason` argument for `DISABLED` control status.
  controlStatus?: string;

  // A description of the reason why you are disabling a security standard control. If you specify this attribute, `control_status` will be set to `DISABLED` automatically.
  disabledReason?: string;
}
export class StandardsControl extends DS_Resource {
  // The standard control longer description. Provides information about what the control is checking for.
  public description?: string;

  // A link to remediation information for the control in the Security Hub user documentation.
  public remediationUrl?: string;

  // The severity of findings generated from this security standard control.
  public severityRating?: string;

  // The standards control ARN. See the AWS documentation for how to list existing controls using [`get-enabled-standards`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/get-enabled-standards.html) and [`describe-standards-controls`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/describe-standards-controls.html).
  public standardsControlArn?: string;

  // The standard control title.
  public title?: string;

  // The identifier of the security standard control.
  public controlId?: string;

  // The control status could be `ENABLED` or `DISABLED`. You have to specify `disabled_reason` argument for `DISABLED` control status.
  public controlStatus?: string;

  // The date and time that the status of the security standard control was most recently updated.
  public controlStatusUpdatedAt?: string;

  // A description of the reason why you are disabling a security standard control. If you specify this attribute, `control_status` will be set to `DISABLED` automatically.
  public disabledReason?: string;

  // The list of requirements that are related to this control.
  public relatedRequirements?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "standardsControlArn",
        "The standards control ARN. See the AWS documentation for how to list existing controls using [`get-enabled-standards`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/get-enabled-standards.html) and [`describe-standards-controls`](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/securityhub/describe-standards-controls.html).",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "controlStatus",
        "The control status could be `ENABLED` or `DISABLED`. You have to specify `disabled_reason` argument for `DISABLED` control status.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "disabledReason",
        "A description of the reason why you are disabling a security standard control. If you specify this attribute, `control_status` will be set to `DISABLED` automatically.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
