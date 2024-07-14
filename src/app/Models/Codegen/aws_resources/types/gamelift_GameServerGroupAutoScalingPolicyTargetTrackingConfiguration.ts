import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration {
  // Desired value to use with a game server group target-based scaling policy.
  targetValue?: number;
}

export function gamelift_GameServerGroupAutoScalingPolicyTargetTrackingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "targetValue",
      "Desired value to use with a game server group target-based scaling policy.",
      [],
      true,
      true,
    ),
  ];
}
