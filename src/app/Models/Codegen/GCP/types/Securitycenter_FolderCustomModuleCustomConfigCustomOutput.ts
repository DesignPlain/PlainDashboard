import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty,
  Securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty_GetTypes,
} from "./Securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty";

export interface Securitycenter_FolderCustomModuleCustomConfigCustomOutput {
  /*
A list of custom output properties to add to the finding.
Structure is documented below.
*/
  Properties?: Array<Securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty>;
}

export function Securitycenter_FolderCustomModuleCustomConfigCustomOutput_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Properties",
      "A list of custom output properties to add to the finding.\nStructure is documented below.",
      Securitycenter_FolderCustomModuleCustomConfigCustomOutputProperty_GetTypes(),
      false,
      false,
    ),
  ];
}
