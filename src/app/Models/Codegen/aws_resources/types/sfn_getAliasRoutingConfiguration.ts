import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface sfn_getAliasRoutingConfiguration {
  //
  stateMachineVersionArn?: string;

  //
  weight?: number;
}

export function sfn_getAliasRoutingConfiguration_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "stateMachineVersionArn",
      "",
      [],
      true,
      false,
    ),
    new DynamicUIProps(InputType.Number, "weight", "", [], true, false),
  ];
}
