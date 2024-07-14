import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface container_getClusterEnableK8sBetaApi {
  // Enabled Kubernetes Beta APIs.
  enabledApis?: Array<string>;
}

export function container_getClusterEnableK8sBetaApi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "enabledApis",
      "Enabled Kubernetes Beta APIs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
