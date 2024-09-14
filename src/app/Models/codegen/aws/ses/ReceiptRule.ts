import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  ses_ReceiptRuleS3Action,
  ses_ReceiptRuleS3Action_GetTypes,
} from "../types/ses_ReceiptRuleS3Action";
import {
  ses_ReceiptRuleStopAction,
  ses_ReceiptRuleStopAction_GetTypes,
} from "../types/ses_ReceiptRuleStopAction";
import {
  ses_ReceiptRuleWorkmailAction,
  ses_ReceiptRuleWorkmailAction_GetTypes,
} from "../types/ses_ReceiptRuleWorkmailAction";
import {
  ses_ReceiptRuleLambdaAction,
  ses_ReceiptRuleLambdaAction_GetTypes,
} from "../types/ses_ReceiptRuleLambdaAction";
import {
  ses_ReceiptRuleAddHeaderAction,
  ses_ReceiptRuleAddHeaderAction_GetTypes,
} from "../types/ses_ReceiptRuleAddHeaderAction";
import {
  ses_ReceiptRuleSnsAction,
  ses_ReceiptRuleSnsAction_GetTypes,
} from "../types/ses_ReceiptRuleSnsAction";
import {
  ses_ReceiptRuleBounceAction,
  ses_ReceiptRuleBounceAction_GetTypes,
} from "../types/ses_ReceiptRuleBounceAction";

export interface ReceiptRuleArgs {
  // The name of the rule set
  ruleSetName?: string;

  // If true, incoming emails will be scanned for spam and viruses
  scanEnabled?: boolean;

  // A list of S3 Action blocks. Documented below.
  s3Actions?: Array<ses_ReceiptRuleS3Action>;

  // A list of Stop Action blocks. Documented below.
  stopActions?: Array<ses_ReceiptRuleStopAction>;

  // A list of WorkMail Action blocks. Documented below.
  workmailActions?: Array<ses_ReceiptRuleWorkmailAction>;

  // If true, the rule will be enabled
  enabled?: boolean;

  // A list of Lambda Action blocks. Documented below.
  lambdaActions?: Array<ses_ReceiptRuleLambdaAction>;

  // A list of email addresses
  recipients?: Array<string>;

  // `Require` or `Optional`
  tlsPolicy?: string;

  // A list of Add Header Action blocks. Documented below.
  addHeaderActions?: Array<ses_ReceiptRuleAddHeaderAction>;

  // The name of the rule to place this rule after
  after?: string;

  // A list of SNS Action blocks. Documented below.
  snsActions?: Array<ses_ReceiptRuleSnsAction>;

  // A list of Bounce Action blocks. Documented below.
  bounceActions?: Array<ses_ReceiptRuleBounceAction>;

  // The name of the rule
  name?: string;
}
export class ReceiptRule extends DS_Resource {
  // A list of Bounce Action blocks. Documented below.
  public bounceActions?: Array<ses_ReceiptRuleBounceAction>;

  // A list of Lambda Action blocks. Documented below.
  public lambdaActions?: Array<ses_ReceiptRuleLambdaAction>;

  // The name of the rule
  public name?: string;

  // A list of WorkMail Action blocks. Documented below.
  public workmailActions?: Array<ses_ReceiptRuleWorkmailAction>;

  // The name of the rule to place this rule after
  public after?: string;

  // A list of email addresses
  public recipients?: Array<string>;

  // A list of S3 Action blocks. Documented below.
  public s3Actions?: Array<ses_ReceiptRuleS3Action>;

  // A list of SNS Action blocks. Documented below.
  public snsActions?: Array<ses_ReceiptRuleSnsAction>;

  // A list of Add Header Action blocks. Documented below.
  public addHeaderActions?: Array<ses_ReceiptRuleAddHeaderAction>;

  // The SES receipt rule ARN.
  public arn?: string;

  // A list of Stop Action blocks. Documented below.
  public stopActions?: Array<ses_ReceiptRuleStopAction>;

  // `Require` or `Optional`
  public tlsPolicy?: string;

  // If true, the rule will be enabled
  public enabled?: boolean;

  // The name of the rule set
  public ruleSetName?: string;

  // If true, incoming emails will be scanned for spam and viruses
  public scanEnabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "stopActions",
        "A list of Stop Action blocks. Documented below.",
        () => ses_ReceiptRuleStopAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "workmailActions",
        "A list of WorkMail Action blocks. Documented below.",
        () => ses_ReceiptRuleWorkmailAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tlsPolicy",
        "`Require` or `Optional`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "after",
        "The name of the rule to place this rule after",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "scanEnabled",
        "If true, incoming emails will be scanned for spam and viruses",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "s3Actions",
        "A list of S3 Action blocks. Documented below.",
        () => ses_ReceiptRuleS3Action_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "If true, the rule will be enabled",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "recipients",
        "A list of email addresses",
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ruleSetName",
        "The name of the rule set",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "snsActions",
        "A list of SNS Action blocks. Documented below.",
        () => ses_ReceiptRuleSnsAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "bounceActions",
        "A list of Bounce Action blocks. Documented below.",
        () => ses_ReceiptRuleBounceAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "lambdaActions",
        "A list of Lambda Action blocks. Documented below.",
        () => ses_ReceiptRuleLambdaAction_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "addHeaderActions",
        "A list of Add Header Action blocks. Documented below.",
        () => ses_ReceiptRuleAddHeaderAction_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
