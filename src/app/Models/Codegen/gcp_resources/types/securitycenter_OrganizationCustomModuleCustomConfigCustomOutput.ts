import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty,
  securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty_GetTypes,
} from "./securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty";

export interface securitycenter_OrganizationCustomModuleCustomConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  properties?: Array<securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty>;
}

export function securitycenter_OrganizationCustomModuleCustomConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
