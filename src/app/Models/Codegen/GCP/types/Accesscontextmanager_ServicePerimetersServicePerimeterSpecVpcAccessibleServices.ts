import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface accesscontextmanager_ServicePerimetersServicePerimeterSpecVpcAccessibleServices {
  /*
The list of APIs usable within the Service Perimeter.
Must be empty unless `enableRestriction` is True.
*/
  allowedServices?: Array<string>;

  /*
Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
*/
  enableRestriction?: boolean;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterSpecVpcAccessibleServices_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "allowedServices",
      "The list of APIs usable within the Service Perimeter.\nMust be empty unless `enableRestriction` is True.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "enableRestriction",
      "Whether to restrict API calls within the Service Perimeter to the\nlist of APIs specified in 'allowedServices'.",
      [],
      false,
      false,
    ),
  ];
}
