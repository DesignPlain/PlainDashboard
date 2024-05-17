import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Compute_getDiskGuestOsFeature {
  /*
URL of the disk type resource describing which disk type to use to
create the disk.
*/
  Type?: string;
}

export function Compute_getDiskGuestOsFeature_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "Type",
      "URL of the disk type resource describing which disk type to use to\ncreate the disk.",
      [],
      true,
      false,
    ),
  ];
}
