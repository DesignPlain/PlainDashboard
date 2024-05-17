import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Accesscontextmanager_ServicePerimeterStatusVpcAccessibleServices {
  /*
The list of APIs usable within the Service Perimeter.
Must be empty unless `enableRestriction` is True.
*/
  AllowedServices?: Array<string>;

  /*
Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
*/
  EnableRestriction?: boolean;
}

export function Accesscontextmanager_ServicePerimeterStatusVpcAccessibleServices_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "AllowedServices",
      "The list of APIs usable within the Service Perimeter.\nMust be empty unless `enableRestriction` is True.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "EnableRestriction",
      "Whether to restrict API calls within the Service Perimeter to the\nlist of APIs specified in 'allowedServices'.",
      [],
      false,
      false,
    ),
  ];
}
