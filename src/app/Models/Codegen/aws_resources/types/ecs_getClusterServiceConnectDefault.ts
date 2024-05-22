import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ecs_getClusterServiceConnectDefault {
  //
  namespace?: string;
}

export function ecs_getClusterServiceConnectDefault_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "namespace", "", [], true, false),
  ];
}
