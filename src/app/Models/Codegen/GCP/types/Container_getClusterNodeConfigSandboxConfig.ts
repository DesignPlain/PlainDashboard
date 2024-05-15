import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Container_getClusterNodeConfigSandboxConfig {
  // Type of the sandbox to use for the node (e.g. 'gvisor')
  SandboxType?: string;
}

export function Container_getClusterNodeConfigSandboxConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "SandboxType",
      "Type of the sandbox to use for the node (e.g. 'gvisor')",
      [],
      true,
      false,
    ),
  ];
}
