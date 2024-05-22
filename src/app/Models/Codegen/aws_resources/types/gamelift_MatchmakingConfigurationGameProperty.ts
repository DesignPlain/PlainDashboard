import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface gamelift_MatchmakingConfigurationGameProperty {
  // A game property key
  key?: string;

  // A game property value.
  value?: string;
}

export function gamelift_MatchmakingConfigurationGameProperty_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "key",
      "A game property key",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "value",
      "A game property value.",
      [],
      true,
      false,
    ),
  ];
}
