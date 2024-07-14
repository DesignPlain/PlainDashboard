import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_getClusterSetting {
  //
  name?: string;

  //
  value?: string;
}

export function ecs_getClusterSetting_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "name", "", [], true, false),
    new DynamicUIProps(InputType.String, "value", "", [], true, false),
  ];
}
