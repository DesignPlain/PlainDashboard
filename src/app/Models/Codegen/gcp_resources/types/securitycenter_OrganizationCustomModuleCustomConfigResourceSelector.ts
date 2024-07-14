import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface securitycenter_OrganizationCustomModuleCustomConfigResourceSelector {
  /*
The resource types to run the detector on.

- - -
*/
  resourceTypes?: Array<string>;
}

export function securitycenter_OrganizationCustomModuleCustomConfigResourceSelector_GetTypes(): DynamicUIProps[] {
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
