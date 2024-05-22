import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  gamelift_GameServerGroupInstanceDefinition,
  gamelift_GameServerGroupInstanceDefinition_GetTypes,
} from "../types/gamelift_GameServerGroupInstanceDefinition";
import {
  gamelift_GameServerGroupLaunchTemplate,
  gamelift_GameServerGroupLaunchTemplate_GetTypes,
} from "../types/gamelift_GameServerGroupLaunchTemplate";
import {
  gamelift_GameServerGroupAutoScalingPolicy,
  gamelift_GameServerGroupAutoScalingPolicy_GetTypes,
} from "../types/gamelift_GameServerGroupAutoScalingPolicy";

export interface GameServerGroupArgs {
  /*
Indicates whether instances in the game server group are protected from early termination.
Unprotected instances that have active game servers running might be terminated during a scale-down event,
causing players to be dropped from the game.
Protected instances cannot be terminated while there are active game servers running except in the event
of a forced game server group deletion.
Valid values: `NO_PROTECTION`, `FULL_PROTECTION`. Defaults to `NO_PROTECTION`.
*/
  gameServerProtectionPolicy?: string;

  //
  instanceDefinitions?: Array<gamelift_GameServerGroupInstanceDefinition>;

  /*
The maximum number of instances allowed in the EC2 Auto Scaling group.
During automatic scaling events, GameLift FleetIQ and EC2 do not scale up the group above this maximum.
*/
  maxSize?: number;

  /*
The minimum number of instances allowed in the EC2 Auto Scaling group.
During automatic scaling events, GameLift FleetIQ and EC2 do not scale down the group below this minimum.
*/
  minSize?: number;

  // ARN for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
  roleArn?: string;

  // Key-value map of resource tags
  tags?: Map<string, string>;

  /*
Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances.
Valid values: `SPOT_ONLY`, `SPOT_PREFERRED`, `ON_DEMAND_ONLY`. Defaults to `SPOT_PREFERRED`.
*/
  balancingStrategy?: string;

  /*
Name of the game server group.
This value is used to generate unique ARN identifiers for the EC2 Auto Scaling group and the GameLift FleetIQ game server group.
*/
  gameServerGroupName?: string;

  //
  launchTemplate?: gamelift_GameServerGroupLaunchTemplate;

  /*
A list of VPC subnets to use with instances in the game server group.
By default, all GameLift FleetIQ-supported Availability Zones are used.
*/
  vpcSubnets?: Array<string>;

  //
  autoScalingPolicy?: gamelift_GameServerGroupAutoScalingPolicy;
}
export class GameServerGroup extends Resource {
  //
  public instanceDefinitions?: Array<gamelift_GameServerGroupInstanceDefinition>;

  //
  public launchTemplate?: gamelift_GameServerGroupLaunchTemplate;

  /*
A list of VPC subnets to use with instances in the game server group.
By default, all GameLift FleetIQ-supported Availability Zones are used.
*/
  public vpcSubnets?: Array<string>;

  /*
Indicates whether instances in the game server group are protected from early termination.
Unprotected instances that have active game servers running might be terminated during a scale-down event,
causing players to be dropped from the game.
Protected instances cannot be terminated while there are active game servers running except in the event
of a forced game server group deletion.
Valid values: `NO_PROTECTION`, `FULL_PROTECTION`. Defaults to `NO_PROTECTION`.
*/
  public gameServerProtectionPolicy?: string;

  /*
Name of the game server group.
This value is used to generate unique ARN identifiers for the EC2 Auto Scaling group and the GameLift FleetIQ game server group.
*/
  public gameServerGroupName?: string;

  /*
The maximum number of instances allowed in the EC2 Auto Scaling group.
During automatic scaling events, GameLift FleetIQ and EC2 do not scale up the group above this maximum.
*/
  public maxSize?: number;

  // The ARN of the created EC2 Auto Scaling group.
  public autoScalingGroupArn?: string;

  // ARN for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
  public roleArn?: string;

  // Key-value map of resource tags
  public tags?: Map<string, string>;

  //
  public tagsAll?: Map<string, string>;

  // The ARN of the GameLift Game Server Group.
  public arn?: string;

  /*
Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances.
Valid values: `SPOT_ONLY`, `SPOT_PREFERRED`, `ON_DEMAND_ONLY`. Defaults to `SPOT_PREFERRED`.
*/
  public balancingStrategy?: string;

  /*
The minimum number of instances allowed in the EC2 Auto Scaling group.
During automatic scaling events, GameLift FleetIQ and EC2 do not scale down the group below this minimum.
*/
  public minSize?: number;

  //
  public autoScalingPolicy?: gamelift_GameServerGroupAutoScalingPolicy;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Number,
        "maxSize",
        "The maximum number of instances allowed in the EC2 Auto Scaling group.\nDuring automatic scaling events, GameLift FleetIQ and EC2 do not scale up the group above this maximum.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "minSize",
        "The minimum number of instances allowed in the EC2 Auto Scaling group.\nDuring automatic scaling events, GameLift FleetIQ and EC2 do not scale down the group below this minimum.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "roleArn",
        "ARN for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "balancingStrategy",
        "Indicates how GameLift FleetIQ balances the use of Spot Instances and On-Demand Instances.\nValid values: `SPOT_ONLY`, `SPOT_PREFERRED`, `ON_DEMAND_ONLY`. Defaults to `SPOT_PREFERRED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "vpcSubnets",
        "A list of VPC subnets to use with instances in the game server group.\nBy default, all GameLift FleetIQ-supported Availability Zones are used.",
        InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "instanceDefinitions",
        "",
        gamelift_GameServerGroupInstanceDefinition_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "gameServerGroupName",
        "Name of the game server group.\nThis value is used to generate unique ARN identifiers for the EC2 Auto Scaling group and the GameLift FleetIQ game server group.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "launchTemplate",
        "",
        gamelift_GameServerGroupLaunchTemplate_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoScalingPolicy",
        "",
        gamelift_GameServerGroupAutoScalingPolicy_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gameServerProtectionPolicy",
        "Indicates whether instances in the game server group are protected from early termination.\nUnprotected instances that have active game servers running might be terminated during a scale-down event,\ncausing players to be dropped from the game.\nProtected instances cannot be terminated while there are active game servers running except in the event\nof a forced game server group deletion.\nValid values: `NO_PROTECTION`, `FULL_PROTECTION`. Defaults to `NO_PROTECTION`.",
        [],
        false,
        false,
      ),
    ];
  }
}
