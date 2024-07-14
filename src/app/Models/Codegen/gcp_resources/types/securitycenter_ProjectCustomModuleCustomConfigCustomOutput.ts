import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty,
  securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty_GetTypes,
} from "./securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty";

export interface securitycenter_ProjectCustomModuleCustomConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  properties?: Array<securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty>;
}

export function securitycenter_ProjectCustomModuleCustomConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      securitycenter_ProjectCustomModuleCustomConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
