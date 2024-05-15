import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Workstations_WorkstationClusterDomainConfig {
  // Domain used by Workstations for HTTP ingress.
  Domain?: string;
}

export function Workstations_WorkstationClusterDomainConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Domain",
      "Domain used by Workstations for HTTP ingress.",
      [],
      true,
      true,
    ),
  ];
}
