export interface ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource {
  // An AccessLevel resource name that allows resources outside the ServicePerimeter to be accessed from the inside.
  AccessLevel?: string;

  /*
A Google Cloud resource that is allowed to ingress the perimeter.
Requests from these resources will be allowed to access perimeter data.
Currently only projects are allowed. Format `projects/{project_number}`
The project may be in any Google Cloud organization, not just the
organization that the perimeter is defined in. `-` is not allowed, the case
of allowing all Google Cloud resources only is not supported.
*/
  Resource?: string;
}
