import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  sesv2_ConfigurationSetVdmOptionsDashboardOptions,
  sesv2_ConfigurationSetVdmOptionsDashboardOptions_GetTypes,
} from "./sesv2_ConfigurationSetVdmOptionsDashboardOptions";
import {
  sesv2_ConfigurationSetVdmOptionsGuardianOptions,
  sesv2_ConfigurationSetVdmOptionsGuardianOptions_GetTypes,
} from "./sesv2_ConfigurationSetVdmOptionsGuardianOptions";

export interface sesv2_ConfigurationSetVdmOptions {
  // Specifies additional settings for your VDM configuration as applicable to the Dashboard.
  dashboardOptions?: sesv2_ConfigurationSetVdmOptionsDashboardOptions;

  // Specifies additional settings for your VDM configuration as applicable to the Guardian.
  guardianOptions?: sesv2_ConfigurationSetVdmOptionsGuardianOptions;
}

export function sesv2_ConfigurationSetVdmOptions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "dashboardOptions",
      "Specifies additional settings for your VDM configuration as applicable to the Dashboard.",
      sesv2_ConfigurationSetVdmOptionsDashboardOptions_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "guardianOptions",
      "Specifies additional settings for your VDM configuration as applicable to the Guardian.",
      sesv2_ConfigurationSetVdmOptionsGuardianOptions_GetTypes(),
      false,
      false,
    ),
  ];
}
