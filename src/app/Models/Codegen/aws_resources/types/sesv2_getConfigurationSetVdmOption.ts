import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sesv2_getConfigurationSetVdmOptionDashboardOption,
  sesv2_getConfigurationSetVdmOptionDashboardOption_GetTypes,
} from "./sesv2_getConfigurationSetVdmOptionDashboardOption";
import {
  sesv2_getConfigurationSetVdmOptionGuardianOption,
  sesv2_getConfigurationSetVdmOptionGuardianOption_GetTypes,
} from "./sesv2_getConfigurationSetVdmOptionGuardianOption";

export interface sesv2_getConfigurationSetVdmOption {
  // Specifies additional settings for your VDM configuration as applicable to the Dashboard.
  dashboardOptions?: Array<sesv2_getConfigurationSetVdmOptionDashboardOption>;

  // Specifies additional settings for your VDM configuration as applicable to the Guardian.
  guardianOptions?: Array<sesv2_getConfigurationSetVdmOptionGuardianOption>;
}

export function sesv2_getConfigurationSetVdmOption_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "dashboardOptions",
      "Specifies additional settings for your VDM configuration as applicable to the Dashboard.",
      sesv2_getConfigurationSetVdmOptionDashboardOption_GetTypes(),
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "guardianOptions",
      "Specifies additional settings for your VDM configuration as applicable to the Guardian.",
      sesv2_getConfigurationSetVdmOptionGuardianOption_GetTypes(),
      true,
      false,
    ),
  ];
}
