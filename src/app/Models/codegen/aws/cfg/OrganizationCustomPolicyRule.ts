import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface OrganizationCustomPolicyRuleArgs {
  // policy definition containing the logic for your organization AWS Config Custom Policy rule
  policyText?: string;

  // Tag key of AWS resources to evaluate
  tagKeyScope?: string;

  /*
List of notification types that trigger AWS Config to run an evaluation for the rule. Valid values: `ConfigurationItemChangeNotification`, `OversizedConfigurationItemChangeNotification`

The following arguments are optional:
*/
  triggerTypes?: Array<string>;

  // Description of the rule
  description?: string;

  // List of AWS account identifiers to exclude from the rule
  excludedAccounts?: Array<string>;

  // Maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.
  maximumExecutionFrequency?: string;

  // runtime system for your organization AWS Config Custom Policy rules
  policyRuntime?: string;

  // Identifier of the AWS resource to evaluate
  resourceIdScope?: string;

  // List of types of AWS resources to evaluate
  resourceTypesScopes?: Array<string>;

  // Tag value of AWS resources to evaluate
  tagValueScope?: string;

  // List of AWS account identifiers to exclude from the rule
  debugLogDeliveryAccounts?: Array<string>;

  // A string in JSON format that is passed to the AWS Config Rule Lambda Function
  inputParameters?: string;

  // name of the rule
  name?: string;
}
export class OrganizationCustomPolicyRule extends DS_Resource {
  // policy definition containing the logic for your organization AWS Config Custom Policy rule
  public policyText?: string;

  // Identifier of the AWS resource to evaluate
  public resourceIdScope?: string;

  // Amazon Resource Name (ARN) of the rule
  public arn?: string;

  // Description of the rule
  public description?: string;

  // List of AWS account identifiers to exclude from the rule
  public excludedAccounts?: Array<string>;

  // runtime system for your organization AWS Config Custom Policy rules
  public policyRuntime?: string;

  // A string in JSON format that is passed to the AWS Config Rule Lambda Function
  public inputParameters?: string;

  // Maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.
  public maximumExecutionFrequency?: string;

  // name of the rule
  public name?: string;

  // List of types of AWS resources to evaluate
  public resourceTypesScopes?: Array<string>;

  // List of AWS account identifiers to exclude from the rule
  public debugLogDeliveryAccounts?: Array<string>;

  // Tag key of AWS resources to evaluate
  public tagKeyScope?: string;

  // Tag value of AWS resources to evaluate
  public tagValueScope?: string;

  /*
List of notification types that trigger AWS Config to run an evaluation for the rule. Valid values: `ConfigurationItemChangeNotification`, `OversizedConfigurationItemChangeNotification`

The following arguments are optional:
*/
  public triggerTypes?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'resourceIdScope',
        'Identifier of the AWS resource to evaluate',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'resourceTypesScopes',
        'List of types of AWS resources to evaluate',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tagValueScope',
        'Tag value of AWS resources to evaluate',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyText',
        'policy definition containing the logic for your organization AWS Config Custom Policy rule',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tagKeyScope',
        'Tag key of AWS resources to evaluate',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'triggerTypes',
        'List of notification types that trigger AWS Config to run an evaluation for the rule. Valid values: `ConfigurationItemChangeNotification`, `OversizedConfigurationItemChangeNotification`\n\nThe following arguments are optional:',
        () => InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'description',
        'Description of the rule',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'maximumExecutionFrequency',
        'Maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'debugLogDeliveryAccounts',
        'List of AWS account identifiers to exclude from the rule',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'name of the rule',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        'excludedAccounts',
        'List of AWS account identifiers to exclude from the rule',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'policyRuntime',
        'runtime system for your organization AWS Config Custom Policy rules',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'inputParameters',
        'A string in JSON format that is passed to the AWS Config Rule Lambda Function',
        () => [],
        false,
        false,
      ),
    ];
  }
}
