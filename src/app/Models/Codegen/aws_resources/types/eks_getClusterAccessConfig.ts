import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface eks_getClusterAccessConfig {
  // Values returned are `CONFIG_MAP`, `API` or `API_AND_CONFIG_MAP`
  authenticationMode?: string;
}

export function eks_getClusterAccessConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "authenticationMode",
      "Values returned are `CONFIG_MAP`, `API` or `API_AND_CONFIG_MAP`",
      [],
      true,
      false,
    ),
  ];
}
