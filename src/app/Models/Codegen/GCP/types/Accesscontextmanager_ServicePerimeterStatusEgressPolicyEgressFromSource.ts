import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFromSource {
  // An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  AccessLevel?: string;
}

export function Accesscontextmanager_ServicePerimeterStatusEgressPolicyEgressFromSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "AccessLevel",
      "An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.",
      [],
      false,
      false,
    ),
  ];
}
