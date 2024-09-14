import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface securitycenter_ProjectCustomModuleCustomConfigResourceSelector {
  /*
The resource types to run the detector on.

- - -
*/
  resourceTypes?: Array<string>;
}

export function securitycenter_ProjectCustomModuleCustomConfigResourceSelector_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "resourceTypes",
      "The resource types to run the detector on.\n\n- - -",
      () => InputType_String_GetTypes(),
      true,
      false,
    ),
  ];
}
