import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterAddonsConfigCloudrunConfig {
  //
  Disabled?: boolean;

  //
  LoadBalancerType?: string;
}

export function Container_getClusterAddonsConfigCloudrunConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "Disabled", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "LoadBalancerType",
      "",
      [],
      true,
      false,
    ),
  ];
}
