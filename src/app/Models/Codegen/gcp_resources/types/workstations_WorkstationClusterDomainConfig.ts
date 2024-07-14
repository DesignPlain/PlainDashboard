import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface workstations_WorkstationClusterDomainConfig {
  // Domain used by Workstations for HTTP ingress.
  domain?: string;
}

export function workstations_WorkstationClusterDomainConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "domain",
      "Domain used by Workstations for HTTP ingress.",
      [],
      true,
      true,
    ),
  ];
}
