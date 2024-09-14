import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface lex_V2modelsIntentOutputContext {
  // Name of the output context.
  name?: string;

  // Amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.
  timeToLiveInSeconds?: number;

  // Number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.
  turnsToLive?: number;
}

export function lex_V2modelsIntentOutputContext_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "name",
      "Name of the output context.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "timeToLiveInSeconds",
      "Amount of time, in seconds, that the output context should remain active. The time is figured from the first time the context is sent to the user.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "turnsToLive",
      "Number of conversation turns that the output context should remain active. The number of turns is counted from the first time that the context is sent to the user.",
      () => [],
      true,
      false,
    ),
  ];
}
