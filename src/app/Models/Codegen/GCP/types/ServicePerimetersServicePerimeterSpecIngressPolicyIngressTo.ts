import { ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperation } from "./ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperation";

export interface ServicePerimetersServicePerimeterSpecIngressPolicyIngressTo {
  /*
A list of `ApiOperations` the sources specified in corresponding `IngressFrom`
are allowed to perform in this `ServicePerimeter`.
Structure is documented below.
*/
  Operations?: Array<ServicePerimetersServicePerimeterSpecIngressPolicyIngressToOperation>;

  /*
A list of resources, currently only projects in the form
`projects/<projectnumber>`, protected by this `ServicePerimeter`
that are allowed to be accessed by sources defined in the
corresponding `IngressFrom`. A request matches if it contains
a resource in this list. If `-` is specified for resources,
then this `IngressTo` rule will authorize access to all
resources inside the perimeter, provided that the request
also matches the `operations` field.
*/
  Resources?: Array<string>;
}
