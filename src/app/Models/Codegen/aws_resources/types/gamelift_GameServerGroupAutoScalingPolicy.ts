import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration,
  gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration_GetTypes,
} from "./gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration";

export interface gamelift_GameServerGroupAutoScalingPolicy {
  /*
Length of time, in seconds, it takes for a new instance to start
new game server processes and register with GameLift FleetIQ.
Specifying a warm-up time can be useful, particularly with game servers that take a long time to start up,
because it avoids prematurely starting new instances. Defaults to `60`.
*/
  estimatedInstanceWarmup?: number;

  //
  targetTrackingConfiguration?: gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration;
}

export function gamelift_GameServerGroupAutoScalingPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "targetTrackingConfiguration",
      "",
      gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "estimatedInstanceWarmup",
      "Length of time, in seconds, it takes for a new instance to start\nnew game server processes and register with GameLift FleetIQ.\nSpecifying a warm-up time can be useful, particularly with game servers that take a long time to start up,\nbecause it avoids prematurely starting new instances. Defaults to `60`.",
      [],
      false,
      true,
    ),
  ];
}
