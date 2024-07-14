import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource {
  // An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  accessLevel?: string;
}

export function accesscontextmanager_ServicePerimeterEgressPolicyEgressFromSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessLevel",
      "An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.",
      [],
      false,
      false,
    ),
  ];
}
