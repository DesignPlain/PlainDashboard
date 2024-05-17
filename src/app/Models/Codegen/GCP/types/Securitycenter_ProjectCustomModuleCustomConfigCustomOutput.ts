import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty,
  Securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty_GetTypes,
} from "./Securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty";

export interface Securitycenter_ProjectCustomModuleCustomConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  Properties?: Array<Securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty>;
}

export function Securitycenter_ProjectCustomModuleCustomConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      Securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
