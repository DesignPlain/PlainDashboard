import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterAddonsConfigCloudrunConfig {
  //
  disabled?: boolean;

  //
  loadBalancerType?: string;
}

export function container_getClusterAddonsConfigCloudrunConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.Bool, "disabled", "", [], true, false),
    new DynamicUIProps(
      InputType.String,
      "loadBalancerType",
      "",
      [],
      true,
      false,
    ),
  ];
}
