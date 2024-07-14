import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sfn_StateMachineLoggingConfiguration,
  sfn_StateMachineLoggingConfiguration_GetTypes,
} from "../types/sfn_StateMachineLoggingConfiguration";
import {
  sfn_StateMachineTracingConfiguration,
  sfn_StateMachineTracingConfiguration_GetTypes,
} from "../types/sfn_StateMachineTracingConfiguration";

export interface StateMachineArgs {
  // Determines whether a Standard or Express state machine is created. The default is `STANDARD`. You cannot update the type of a state machine once it has been created. Valid values: `STANDARD`, `EXPRESS`.
  type?: string;

  // Defines what execution history events are logged and where they are logged. The `logging_configuration` parameter is only valid when `type` is set to `EXPRESS`. Defaults to `OFF`. For more information see [Logging Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html) and [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
  loggingConfiguration?: sfn_StateMachineLoggingConfiguration;

  // Set to true to publish a version of the state machine during creation. Default: false.
  publish?: boolean;

  // Selects whether AWS X-Ray tracing is enabled.
  tracingConfiguration?: sfn_StateMachineTracingConfiguration;

  // The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
  roleArn?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // The [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) definition of the state machine.
  definition?: string;

  // The name of the state machine. The name should only contain `0`-`9`, `A`-`Z`, `a`-`z`, `-` and `_`. If omitted, the provider will assign a random, unique name.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;
}
export class StateMachine extends Resource {
  // The Amazon Resource Name (ARN) of the IAM role to use for this state machine.
  public roleArn?: string;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Determines whether a Standard or Express state machine is created. The default is `STANDARD`. You cannot update the type of a state machine once it has been created. Valid values: `STANDARD`, `EXPRESS`.
  public type?: string;

  //
  public versionDescription?: string;

  // The ARN of the state machine.
  public arn?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  // Set to true to publish a version of the state machine during creation. Default: false.
  public publish?: boolean;

  //
  public revisionId?: string;

  // The current status of the state machine. Either `ACTIVE` or `DELETING`.
  public status?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Selects whether AWS X-Ray tracing is enabled.
  public tracingConfiguration?: sfn_StateMachineTracingConfiguration;

  //
  public description?: string;

  // Defines what execution history events are logged and where they are logged. The `logging_configuration` parameter is only valid when `type` is set to `EXPRESS`. Defaults to `OFF`. For more information see [Logging Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html) and [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.
  public loggingConfiguration?: sfn_StateMachineLoggingConfiguration;

  // The date the state machine was created.
  public creationDate?: string;

  //
  public stateMachineVersionArn?: string;

  // The [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) definition of the state machine.
  public definition?: string;

  // The name of the state machine. The name should only contain `0`-`9`, `A`-`Z`, `a`-`z`, `-` and `_`. If omitted, the provider will assign a random, unique name.
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "tracingConfiguration",
        "Selects whether AWS X-Ray tracing is enabled.",
        sfn_StateMachineTracingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name of the state machine. The name should only contain `0`-`9`, `A`-`Z`, `a`-`z`, `-` and `_`. If omitted, the provider will assign a random, unique name.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Determines whether a Standard or Express state machine is created. The default is `STANDARD`. You cannot update the type of a state machine once it has been created. Valid values: `STANDARD`, `EXPRESS`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "loggingConfiguration",
        "Defines what execution history events are logged and where they are logged. The `logging_configuration` parameter is only valid when `type` is set to `EXPRESS`. Defaults to `OFF`. For more information see [Logging Express Workflows](https://docs.aws.amazon.com/step-functions/latest/dg/cw-logs.html) and [Log Levels](https://docs.aws.amazon.com/step-functions/latest/dg/cloudwatch-log-level.html) in the AWS Step Functions User Guide.",
        sfn_StateMachineLoggingConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "publish",
        "Set to true to publish a version of the state machine during creation. Default: false.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "The Amazon Resource Name (ARN) of the IAM role to use for this state machine.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "definition",
        "The [Amazon States Language](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-amazon-states-language.html) definition of the state machine.",
        [],
        true,
        false,
      ),
    ];
  }
}
