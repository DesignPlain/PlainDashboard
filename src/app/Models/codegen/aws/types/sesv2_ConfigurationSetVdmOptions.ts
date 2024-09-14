import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  sesv2_ConfigurationSetVdmOptionsDashboardOptions,
  sesv2_ConfigurationSetVdmOptionsDashboardOptions_GetTypes,
} from "./sesv2_ConfigurationSetVdmOptionsDashboardOptions";
import {
  sesv2_ConfigurationSetVdmOptionsGuardianOptions,
  sesv2_ConfigurationSetVdmOptionsGuardianOptions_GetTypes,
} from "./sesv2_ConfigurationSetVdmOptionsGuardianOptions";

export interface sesv2_ConfigurationSetVdmOptions {
  // Specifies additional settings for your VDM configuration as applicable to the Dashboard. See `dashboard_options` Block for details.
  dashboardOptions?: sesv2_ConfigurationSetVdmOptionsDashboardOptions;

  // Specifies additional settings for your VDM configuration as applicable to the Guardian. See `guardian_options` Block for details.
  guardianOptions?: sesv2_ConfigurationSetVdmOptionsGuardianOptions;
}

export function sesv2_ConfigurationSetVdmOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dashboardOptions",
      "Specifies additional settings for your VDM configuration as applicable to the Dashboard. See `dashboard_options` Block for details.",
      () => sesv2_ConfigurationSetVdmOptionsDashboardOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "guardianOptions",
      "Specifies additional settings for your VDM configuration as applicable to the Guardian. See `guardian_options` Block for details.",
      () => sesv2_ConfigurationSetVdmOptionsGuardianOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
