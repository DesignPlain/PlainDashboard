import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface accesscontextmanager_ServicePerimeterStatusVpcAccessibleServices {
  /*
Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
*/
  enableRestriction?: boolean;

  /*
The list of APIs usable within the Service Perimeter.
Must be empty unless `enableRestriction` is True.
*/
  allowedServices?: Array<string>;
}

export function accesscontextmanager_ServicePerimeterStatusVpcAccessibleServices_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      'enableRestriction',
      "Whether to restrict API calls within the Service Perimeter to the\nlist of APIs specified in 'allowedServices'.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'allowedServices',
      'The list of APIs usable within the Service Perimeter.\nMust be empty unless `enableRestriction` is True.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
