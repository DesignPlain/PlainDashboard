import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty,
  Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty_GetTypes,
} from "./Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty";

export interface Securitycenter_OrganizationCustomModuleCustomConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  Properties?: Array<Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty>;
}

export function Securitycenter_OrganizationCustomModuleCustomConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      Securitycenter_OrganizationCustomModuleCustomConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
