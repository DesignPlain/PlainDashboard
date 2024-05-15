import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterEnableK8sBetaApi {
  // Enabled Kubernetes Beta APIs.
  EnabledApis?: Array<string>;
}

export function Container_getClusterEnableK8sBetaApi_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "EnabledApis",
      "Enabled Kubernetes Beta APIs.",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
