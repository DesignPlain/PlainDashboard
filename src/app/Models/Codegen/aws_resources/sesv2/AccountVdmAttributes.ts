import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  sesv2_AccountVdmAttributesDashboardAttributes,
  sesv2_AccountVdmAttributesDashboardAttributes_GetTypes,
} from "../types/sesv2_AccountVdmAttributesDashboardAttributes";
import {
  sesv2_AccountVdmAttributesGuardianAttributes,
  sesv2_AccountVdmAttributesGuardianAttributes_GetTypes,
} from "../types/sesv2_AccountVdmAttributesGuardianAttributes";

export interface AccountVdmAttributesArgs {
  /*
Specifies the status of your VDM configuration. Valid values: `ENABLED`, `DISABLED`.

The following arguments are optional:
*/
  vdmEnabled?: string;

  // Specifies additional settings for your VDM configuration as applicable to the Dashboard.
  dashboardAttributes?: sesv2_AccountVdmAttributesDashboardAttributes;

  // Specifies additional settings for your VDM configuration as applicable to the Guardian.
  guardianAttributes?: sesv2_AccountVdmAttributesGuardianAttributes;
}
export class AccountVdmAttributes extends Resource {
  // Specifies additional settings for your VDM configuration as applicable to the Dashboard.
  public dashboardAttributes?: sesv2_AccountVdmAttributesDashboardAttributes;

  // Specifies additional settings for your VDM configuration as applicable to the Guardian.
  public guardianAttributes?: sesv2_AccountVdmAttributesGuardianAttributes;

  /*
Specifies the status of your VDM configuration. Valid values: `ENABLED`, `DISABLED`.

The following arguments are optional:
*/
  public vdmEnabled?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "vdmEnabled",
        "Specifies the status of your VDM configuration. Valid values: `ENABLED`, `DISABLED`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "dashboardAttributes",
        "Specifies additional settings for your VDM configuration as applicable to the Dashboard.",
        sesv2_AccountVdmAttributesDashboardAttributes_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "guardianAttributes",
        "Specifies additional settings for your VDM configuration as applicable to the Guardian.",
        sesv2_AccountVdmAttributesGuardianAttributes_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
