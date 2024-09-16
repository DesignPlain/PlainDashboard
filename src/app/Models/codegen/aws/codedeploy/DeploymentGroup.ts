import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  codedeploy_DeploymentGroupLoadBalancerInfo,
  codedeploy_DeploymentGroupLoadBalancerInfo_GetTypes,
} from '../types/codedeploy_DeploymentGroupLoadBalancerInfo';
import {
  codedeploy_DeploymentGroupTriggerConfiguration,
  codedeploy_DeploymentGroupTriggerConfiguration_GetTypes,
} from '../types/codedeploy_DeploymentGroupTriggerConfiguration';
import {
  codedeploy_DeploymentGroupEc2TagFilter,
  codedeploy_DeploymentGroupEc2TagFilter_GetTypes,
} from '../types/codedeploy_DeploymentGroupEc2TagFilter';
import {
  codedeploy_DeploymentGroupBlueGreenDeploymentConfig,
  codedeploy_DeploymentGroupBlueGreenDeploymentConfig_GetTypes,
} from '../types/codedeploy_DeploymentGroupBlueGreenDeploymentConfig';
import {
  codedeploy_DeploymentGroupEc2TagSet,
  codedeploy_DeploymentGroupEc2TagSet_GetTypes,
} from '../types/codedeploy_DeploymentGroupEc2TagSet';
import {
  codedeploy_DeploymentGroupEcsService,
  codedeploy_DeploymentGroupEcsService_GetTypes,
} from '../types/codedeploy_DeploymentGroupEcsService';
import {
  codedeploy_DeploymentGroupOnPremisesInstanceTagFilter,
  codedeploy_DeploymentGroupOnPremisesInstanceTagFilter_GetTypes,
} from '../types/codedeploy_DeploymentGroupOnPremisesInstanceTagFilter';
import {
  codedeploy_DeploymentGroupDeploymentStyle,
  codedeploy_DeploymentGroupDeploymentStyle_GetTypes,
} from '../types/codedeploy_DeploymentGroupDeploymentStyle';
import {
  codedeploy_DeploymentGroupAlarmConfiguration,
  codedeploy_DeploymentGroupAlarmConfiguration_GetTypes,
} from '../types/codedeploy_DeploymentGroupAlarmConfiguration';
import {
  codedeploy_DeploymentGroupAutoRollbackConfiguration,
  codedeploy_DeploymentGroupAutoRollbackConfiguration_GetTypes,
} from '../types/codedeploy_DeploymentGroupAutoRollbackConfiguration';

export interface DeploymentGroupArgs {
  // Single configuration block of the load balancer to use in a blue/green deployment (documented below).
  loadBalancerInfo?: codedeploy_DeploymentGroupLoadBalancerInfo;

  // On premise tag filters associated with the group. See the AWS docs for details.
  onPremisesInstanceTagFilters?: Array<codedeploy_DeploymentGroupOnPremisesInstanceTagFilter>;

  // The service role ARN that allows deployments.
  serviceRoleArn?: string;

  // The name of the application.
  appName?: string;

  // Autoscaling groups associated with the deployment group.
  autoscalingGroups?: Array<string>;

  // Configuration block(s) of the triggers for the deployment group (documented below).
  triggerConfigurations?: Array<codedeploy_DeploymentGroupTriggerConfiguration>;

  // Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
  deploymentStyle?: codedeploy_DeploymentGroupDeploymentStyle;

  // Configuration block of Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. Valid values are `UPDATE` and `IGNORE`. Defaults to `UPDATE`.
  outdatedInstancesStrategy?: string;

  // Tag filters associated with the deployment group. See the AWS docs for details.
  ec2TagFilters?: Array<codedeploy_DeploymentGroupEc2TagFilter>;

  // Configuration block of the blue/green deployment options for a deployment group (documented below).
  blueGreenDeploymentConfig?: codedeploy_DeploymentGroupBlueGreenDeploymentConfig;

  // The name of the deployment group.
  deploymentGroupName?: string;

  // The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
  deploymentConfigName?: string;

  // Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
  ec2TagSets?: Array<codedeploy_DeploymentGroupEc2TagSet>;

  // Configuration block(s) of the ECS services for a deployment group (documented below).
  ecsService?: codedeploy_DeploymentGroupEcsService;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block of alarms associated with the deployment group (documented below).
  alarmConfiguration?: codedeploy_DeploymentGroupAlarmConfiguration;

  // Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
  autoRollbackConfiguration?: codedeploy_DeploymentGroupAutoRollbackConfiguration;
}
export class DeploymentGroup extends DS_Resource {
  // The name of the group's deployment config. The default is "CodeDeployDefault.OneAtATime".
  public deploymentConfigName?: string;

  // The ID of the CodeDeploy deployment group.
  public deploymentGroupId?: string;

  // Configuration block of Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. Valid values are `UPDATE` and `IGNORE`. Defaults to `UPDATE`.
  public outdatedInstancesStrategy?: string;

  // The service role ARN that allows deployments.
  public serviceRoleArn?: string;

  // The ARN of the CodeDeploy deployment group.
  public arn?: string;

  // Configuration block of the blue/green deployment options for a deployment group (documented below).
  public blueGreenDeploymentConfig?: codedeploy_DeploymentGroupBlueGreenDeploymentConfig;

  // On premise tag filters associated with the group. See the AWS docs for details.
  public onPremisesInstanceTagFilters?: Array<codedeploy_DeploymentGroupOnPremisesInstanceTagFilter>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Autoscaling groups associated with the deployment group.
  public autoscalingGroups?: Array<string>;

  // Single configuration block of the load balancer to use in a blue/green deployment (documented below).
  public loadBalancerInfo?: codedeploy_DeploymentGroupLoadBalancerInfo;

  // The destination platform type for the deployment.
  public computePlatform?: string;

  // The name of the deployment group.
  public deploymentGroupName?: string;

  // Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).
  public deploymentStyle?: codedeploy_DeploymentGroupDeploymentStyle;

  // Tag filters associated with the deployment group. See the AWS docs for details.
  public ec2TagFilters?: Array<codedeploy_DeploymentGroupEc2TagFilter>;

  // Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.
  public ec2TagSets?: Array<codedeploy_DeploymentGroupEc2TagSet>;

  // Configuration block(s) of the ECS services for a deployment group (documented below).
  public ecsService?: codedeploy_DeploymentGroupEcsService;

  // Configuration block of alarms associated with the deployment group (documented below).
  public alarmConfiguration?: codedeploy_DeploymentGroupAlarmConfiguration;

  // Configuration block of the automatic rollback configuration associated with the deployment group (documented below).
  public autoRollbackConfiguration?: codedeploy_DeploymentGroupAutoRollbackConfiguration;

  // Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Configuration block(s) of the triggers for the deployment group (documented below).
  public triggerConfigurations?: Array<codedeploy_DeploymentGroupTriggerConfiguration>;

  // The name of the application.
  public appName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        'triggerConfigurations',
        'Configuration block(s) of the triggers for the deployment group (documented below).',
        () => codedeploy_DeploymentGroupTriggerConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'outdatedInstancesStrategy',
        'Configuration block of Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. Valid values are `UPDATE` and `IGNORE`. Defaults to `UPDATE`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Key-value map of resource tags. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'alarmConfiguration',
        'Configuration block of alarms associated with the deployment group (documented below).',
        () => codedeploy_DeploymentGroupAlarmConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'onPremisesInstanceTagFilters',
        'On premise tag filters associated with the group. See the AWS docs for details.',
        () => codedeploy_DeploymentGroupOnPremisesInstanceTagFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'deploymentStyle',
        'Configuration block of the type of deployment, either in-place or blue/green, you want to run and whether to route deployment traffic behind a load balancer (documented below).',
        () => codedeploy_DeploymentGroupDeploymentStyle_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ec2TagFilters',
        'Tag filters associated with the deployment group. See the AWS docs for details.',
        () => codedeploy_DeploymentGroupEc2TagFilter_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deploymentGroupName',
        'The name of the deployment group.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoRollbackConfiguration',
        'Configuration block of the automatic rollback configuration associated with the deployment group (documented below).',
        () => codedeploy_DeploymentGroupAutoRollbackConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'loadBalancerInfo',
        'Single configuration block of the load balancer to use in a blue/green deployment (documented below).',
        () => codedeploy_DeploymentGroupLoadBalancerInfo_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'appName',
        'The name of the application.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'autoscalingGroups',
        'Autoscaling groups associated with the deployment group.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'deploymentConfigName',
        'The name of the group\'s deployment config. The default is "CodeDeployDefault.OneAtATime".',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'ec2TagSets',
        'Configuration block(s) of Tag filters associated with the deployment group, which are also referred to as tag groups (documented below). See the AWS docs for details.',
        () => codedeploy_DeploymentGroupEc2TagSet_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'serviceRoleArn',
        'The service role ARN that allows deployments.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'ecsService',
        'Configuration block(s) of the ECS services for a deployment group (documented below).',
        () => codedeploy_DeploymentGroupEcsService_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'blueGreenDeploymentConfig',
        'Configuration block of the blue/green deployment options for a deployment group (documented below).',
        () => codedeploy_DeploymentGroupBlueGreenDeploymentConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
