import { ServicePerimeterStatusEgressPolicyEgressToOperation } from "./ServicePerimeterStatusEgressPolicyEgressToOperation";

export interface ServicePerimeterStatusEgressPolicyEgressTo {
  /*
A list of external resources that are allowed to be accessed. A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '-' is not allowed.
*/
  ExternalResources?: Array<string>;

  /*
A list of `ApiOperations` that this egress rule applies to. A request matches
if it contains an operation/service in this list.
Structure is documented below.
*/
  Operations?: Array<ServicePerimeterStatusEgressPolicyEgressToOperation>;

  /*
A list of resources, currently only projects in the form
`projects/<projectnumber>`, that match this to stanza. A request matches
if it contains a resource in this list. If - is specified for resources,
then this `EgressTo` rule will authorize access to all resources outside
the perimeter.
*/
  Resources?: Array<string>;
}
