import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface sfn_AliasRoutingConfiguration {
  // The Amazon Resource Name (ARN) of the state machine version.
  stateMachineVersionArn?: string;

  // Percentage of traffic routed to the state machine version.
  weight?: number;
}

export function sfn_AliasRoutingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Percentage of traffic routed to the state machine version.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "stateMachineVersionArn",
      "The Amazon Resource Name (ARN) of the state machine version.",
      () => [],
      true,
      false,
    ),
  ];
}
