import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface ecs_getClusterServiceConnectDefault {
  //
  namespace?: string;
}

export function ecs_getClusterServiceConnectDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "",
      () => [],
      true,
      false,
    ),
  ];
}
