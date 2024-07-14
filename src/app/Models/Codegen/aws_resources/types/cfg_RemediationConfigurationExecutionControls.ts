import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  cfg_RemediationConfigurationExecutionControlsSsmControls,
  cfg_RemediationConfigurationExecutionControlsSsmControls_GetTypes,
} from "./cfg_RemediationConfigurationExecutionControlsSsmControls";

export interface cfg_RemediationConfigurationExecutionControls {
  // Configuration block for SSM controls. See below.
  ssmControls?: cfg_RemediationConfigurationExecutionControlsSsmControls;
}

export function cfg_RemediationConfigurationExecutionControls_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ssmControls",
      "Configuration block for SSM controls. See below.",
      cfg_RemediationConfigurationExecutionControlsSsmControls_GetTypes(),
      false,
      false,
    ),
  ];
}
