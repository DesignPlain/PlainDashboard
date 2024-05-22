import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface OrganizationCustomRuleArgs {
  // Tag value of AWS resources to evaluate
  tagValueScope?: string;

  // List of notification types that trigger AWS Config to run an evaluation for the rule. Valid values: `ConfigurationItemChangeNotification`, `OversizedConfigurationItemChangeNotification`, and `ScheduledNotification`
  triggerTypes?: Array<string>;

  // Description of the rule
  description?: string;

  // List of AWS account identifiers to exclude from the rule
  excludedAccounts?: Array<string>;

  // A string in JSON format that is passed to the AWS Config Rule Lambda Function
  inputParameters?: string;

  // The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.
  maximumExecutionFrequency?: string;

  // The name of the rule
  name?: string;

  // Tag key of AWS resources to evaluate
  tagKeyScope?: string;

  // Amazon Resource Name (ARN) of the rule Lambda Function
  lambdaFunctionArn?: string;

  // Identifier of the AWS resource to evaluate
  resourceIdScope?: string;

  // List of types of AWS resources to evaluate
  resourceTypesScopes?: Array<string>;
}
export class OrganizationCustomRule extends Resource {
  // Amazon Resource Name (ARN) of the rule Lambda Function
  public lambdaFunctionArn?: string;

  // The name of the rule
  public name?: string;

  // Tag value of AWS resources to evaluate
  public tagValueScope?: string;

  // List of notification types that trigger AWS Config to run an evaluation for the rule. Valid values: `ConfigurationItemChangeNotification`, `OversizedConfigurationItemChangeNotification`, and `ScheduledNotification`
  public triggerTypes?: Array<string>;

  // Amazon Resource Name (ARN) of the rule
  public arn?: string;

  // Description of the rule
  public description?: string;

  // List of AWS account identifiers to exclude from the rule
  public excludedAccounts?: Array<string>;

  // List of types of AWS resources to evaluate
  public resourceTypesScopes?: Array<string>;

  // Tag key of AWS resources to evaluate
  public tagKeyScope?: string;

  // A string in JSON format that is passed to the AWS Config Rule Lambda Function
  public inputParameters?: string;

  // The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.
  public maximumExecutionFrequency?: string;

  // Identifier of the AWS resource to evaluate
  public resourceIdScope?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "maximumExecutionFrequency",
        "The maximum frequency with which AWS Config runs evaluations for a rule, if the rule is triggered at a periodic frequency. Defaults to `TwentyFour_Hours` for periodic frequency triggered rules. Valid values: `One_Hour`, `Three_Hours`, `Six_Hours`, `Twelve_Hours`, or `TwentyFour_Hours`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagKeyScope",
        "Tag key of AWS resources to evaluate",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "lambdaFunctionArn",
        "Amazon Resource Name (ARN) of the rule Lambda Function",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tagValueScope",
        "Tag value of AWS resources to evaluate",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "triggerTypes",
        "List of notification types that trigger AWS Config to run an evaluation for the rule. Valid values: `ConfigurationItemChangeNotification`, `OversizedConfigurationItemChangeNotification`, and `ScheduledNotification`",
        InputType_String_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the rule",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "excludedAccounts",
        "List of AWS account identifiers to exclude from the rule",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "inputParameters",
        "A string in JSON format that is passed to the AWS Config Rule Lambda Function",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceIdScope",
        "Identifier of the AWS resource to evaluate",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the rule",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "resourceTypesScopes",
        "List of types of AWS resources to evaluate",
        InputType_String_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
