import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Gkeonprem_VMwareNodePoolConfigVsphereConfigTag {
  // The Vsphere tag category.
  Category?: string;

  /*
The Vsphere tag name.

- - -
*/
  Tag?: string;
}

export function Gkeonprem_VMwareNodePoolConfigVsphereConfigTag_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Category",
      "The Vsphere tag category.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "Tag",
      "The Vsphere tag name.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
