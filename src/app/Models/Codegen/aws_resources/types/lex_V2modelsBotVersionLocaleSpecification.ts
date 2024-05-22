import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface lex_V2modelsBotVersionLocaleSpecification {
  //
  sourceBotVersion?: string;
}

export function lex_V2modelsBotVersionLocaleSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "sourceBotVersion",
      "",
      [],
      true,
      false,
    ),
  ];
}
