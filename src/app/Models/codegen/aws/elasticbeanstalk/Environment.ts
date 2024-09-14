import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  elasticbeanstalk_EnvironmentAllSetting,
  elasticbeanstalk_EnvironmentAllSetting_GetTypes,
} from "../types/elasticbeanstalk_EnvironmentAllSetting";
import {
  elasticbeanstalk_EnvironmentSetting,
  elasticbeanstalk_EnvironmentSetting_GetTypes,
} from "../types/elasticbeanstalk_EnvironmentSetting";

export interface EnvironmentArgs {
  /*
A unique name for this Environment. This name is used
in the application URL
*/
  name?: string;

  /*
The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Elastic Beanstalk [Platform](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html#cfn-beanstalk-environment-platformarn)
to use in deployment
*/
  platformArn?: string;

  /*
Option settings to configure the new Environment. These
override specific values that are set as defaults. The format is detailed
below in Option Settings
*/
  settings?: Array<elasticbeanstalk_EnvironmentSetting>;

  /*
A solution stack to base your environment
off of. Example stacks can be found in the [Amazon API documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html)
*/
  solutionStackName?: string;

  // A set of tags to apply to the Environment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Elastic Beanstalk Environment tier. Valid values are `Worker`
or `WebServer`. If tier is left blank `WebServer` will be used.
*/
  tier?: string;

  /*
Name of the application that contains the version
to be deployed
*/
  application?: string;

  // Short description of the Environment
  description?: string;

  /*
The maximum
[duration](https://golang.org/pkg/time/#ParseDuration) that this provider should
wait for an Elastic Beanstalk Environment to be in a ready state before timing
out.
*/
  waitForReadyTimeout?: string;

  /*
The name of the Elastic Beanstalk Configuration
template to use in deployment
*/
  templateName?: string;

  /*
The name of the Elastic Beanstalk Application Version
to use in deployment.
*/
  version?: string;

  /*
Prefix to use for the fully qualified DNS name of
the Environment.
*/
  cnamePrefix?: string;

  /*
The time between polling the AWS API to
check if changes have been applied. Use this to adjust the rate of API calls
for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
use the default behavior, which is an exponential backoff
*/
  pollInterval?: string;
}
export class Environment extends DS_Resource {
  /*
The time between polling the AWS API to
check if changes have been applied. Use this to adjust the rate of API calls
for any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to
use the default behavior, which is an exponential backoff
*/
  public pollInterval?: string;

  /*
Option settings to configure the new Environment. These
override specific values that are set as defaults. The format is detailed
below in Option Settings
*/
  public settings?: Array<elasticbeanstalk_EnvironmentSetting>;

  /*
The name of the Elastic Beanstalk Configuration
template to use in deployment
*/
  public templateName?: string;

  /*
Elastic Beanstalk Environment tier. Valid values are `Worker`
or `WebServer`. If tier is left blank `WebServer` will be used.
*/
  public tier?: string;

  //
  public arn?: string;

  // Fully qualified DNS name for this Environment.
  public cname?: string;

  // SQS queues in use by this Environment.
  public queues?: Array<string>;

  /*
A solution stack to base your environment
off of. Example stacks can be found in the [Amazon API documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html)
*/
  public solutionStackName?: string;

  // A set of tags to apply to the Environment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Autoscaling triggers in use by this Environment.
  public triggers?: Array<string>;

  /*
Prefix to use for the fully qualified DNS name of
the Environment.
*/
  public cnamePrefix?: string;

  /*
The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Elastic Beanstalk [Platform](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html#cfn-beanstalk-environment-platformarn)
to use in deployment
*/
  public platformArn?: string;

  // Short description of the Environment
  public description?: string;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
The name of the Elastic Beanstalk Application Version
to use in deployment.
*/
  public version?: string;

  /*
List of all option settings configured in this Environment. These
are a combination of default settings and their overrides from `setting` in
the configuration.
*/
  public allSettings?: Array<elasticbeanstalk_EnvironmentAllSetting>;

  // The autoscaling groups used by this Environment.
  public autoscalingGroups?: Array<string>;

  // Instances used by this Environment.
  public instances?: Array<string>;

  // Launch configurations in use by this Environment.
  public launchConfigurations?: Array<string>;

  // Elastic load balancers in use by this Environment.
  public loadBalancers?: Array<string>;

  /*
A unique name for this Environment. This name is used
in the application URL
*/
  public name?: string;

  /*
The maximum
[duration](https://golang.org/pkg/time/#ParseDuration) that this provider should
wait for an Elastic Beanstalk Environment to be in a ready state before timing
out.
*/
  public waitForReadyTimeout?: string;

  /*
Name of the application that contains the version
to be deployed
*/
  public application?: string;

  // The URL to the Load Balancer for this Environment
  public endpointUrl?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "templateName",
        "The name of the Elastic Beanstalk Configuration\ntemplate to use in deployment",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "pollInterval",
        "The time between polling the AWS API to\ncheck if changes have been applied. Use this to adjust the rate of API calls\nfor any `create` or `update` action. Minimum `10s`, maximum `180s`. Omit this to\nuse the default behavior, which is an exponential backoff",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique name for this Environment. This name is used\nin the application URL",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "platformArn",
        "The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Elastic Beanstalk [Platform](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-beanstalk-environment.html#cfn-beanstalk-environment-platformarn)\nto use in deployment",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "settings",
        "Option settings to configure the new Environment. These\noverride specific values that are set as defaults. The format is detailed\nbelow in Option Settings",
        () => elasticbeanstalk_EnvironmentSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "application",
        "Name of the application that contains the version\nto be deployed",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Short description of the Environment",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cnamePrefix",
        "Prefix to use for the fully qualified DNS name of\nthe Environment.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "solutionStackName",
        "A solution stack to base your environment\noff of. Example stacks can be found in the [Amazon API documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A set of tags to apply to the Environment. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "tier",
        "Elastic Beanstalk Environment tier. Valid values are `Worker`\nor `WebServer`. If tier is left blank `WebServer` will be used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "waitForReadyTimeout",
        "The maximum\n[duration](https://golang.org/pkg/time/#ParseDuration) that this provider should\nwait for an Elastic Beanstalk Environment to be in a ready state before timing\nout.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "version",
        "The name of the Elastic Beanstalk Application Version\nto use in deployment.",
        () => [],
        false,
        false,
      ),
    ];
  }
}
