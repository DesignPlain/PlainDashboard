import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface emrcontainers_VirtualClusterContainerProviderInfoEksInfo {
  // The namespace where the EMR Containers cluster is running
  namespace?: string;
}

export function emrcontainers_VirtualClusterContainerProviderInfoEksInfo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "namespace",
      "The namespace where the EMR Containers cluster is running",
      [],
      false,
      true,
    ),
  ];
}
