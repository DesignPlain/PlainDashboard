import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource {
  /*
An `AccessLevel` resource name that allow resources within the
`ServicePerimeters` to be accessed from the internet. `AccessLevels` listed
must be in the same policy as this `ServicePerimeter`. Referencing a nonexistent
`AccessLevel` will cause an error. If no `AccessLevel` names are listed,
resources within the perimeter can only be accessed via Google Cloud calls
with request origins within the perimeter.
Example `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.`
If - is specified, then all IngressSources will be allowed.
*/
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

export function accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "accessLevel",
      "An `AccessLevel` resource name that allow resources within the\n`ServicePerimeters` to be accessed from the internet. `AccessLevels` listed\nmust be in the same policy as this `ServicePerimeter`. Referencing a nonexistent\n`AccessLevel` will cause an error. If no `AccessLevel` names are listed,\nresources within the perimeter can only be accessed via Google Cloud calls\nwith request origins within the perimeter.\nExample `accessPolicies/MY_POLICY/accessLevels/MY_LEVEL.`\nIf * is specified, then all IngressSources will be allowed.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resource",
      "A Google Cloud resource that is allowed to ingress the perimeter.\nRequests from these resources will be allowed to access perimeter data.\nCurrently only projects are allowed. Format `projects/{project_number}`\nThe project may be in any Google Cloud organization, not just the\norganization that the perimeter is defined in. `*` is not allowed, the case\nof allowing all Google Cloud resources only is not supported.",
      () => [],
      false,
      false,
    ),
  ];
}
