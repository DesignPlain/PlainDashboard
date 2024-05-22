import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface securitycenter_FolderCustomModuleCustomConfigResourceSelector {
  /*
The resource types to run the detector on.

- - -
*/
  resourceTypes?: Array<string>;
}

export function securitycenter_FolderCustomModuleCustomConfigResourceSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "resourceTypes",
      "The resource types to run the detector on.\n\n- - -",
      InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
