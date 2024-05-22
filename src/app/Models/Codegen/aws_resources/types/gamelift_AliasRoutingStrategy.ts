import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gamelift_AliasRoutingStrategy {
  // ID of the GameLift Fleet to point the alias to.
  fleetId?: string;

  // Message text to be used with the `TERMINAL` routing strategy.
  message?: string;

  // Type of routing strategyE.g., `SIMPLE` or `TERMINAL`
  type?: string;
}

export function gamelift_AliasRoutingStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "fleetId",
      "ID of the GameLift Fleet to point the alias to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "message",
      "Message text to be used with the `TERMINAL` routing strategy.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of routing strategyE.g., `SIMPLE` or `TERMINAL`",
      [],
      true,
      false,
    ),
  ];
}
