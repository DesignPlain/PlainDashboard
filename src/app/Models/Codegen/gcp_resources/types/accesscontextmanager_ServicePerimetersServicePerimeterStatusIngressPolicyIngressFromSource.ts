import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource {
  // An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  accessLevel?: string;

  /*
A Google Cloud resource that is allowed to ingress the perimeter.
Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format `projects/{project_number}`
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. `-` is not allowed, the case
of allowing all Google Cloud resources only is not supported.
*/
  resource?: string;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessLevel",
      "An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resource",
      "A Google Cloud resource that is allowed to ingress the perimeter.\nRequests from these resources will be allowed to access perimeter data.\nCurrently only projects are allowed. Format `projects/{project_number}`\nThe project may be in any Google Cloud organization, not just the\norganization that the perimeter is defined in. `*` is not allowed, the case\nof allowing all Google Cloud resources only is not supported.",
      [],
      false,
      false,
    ),
  ];
}
