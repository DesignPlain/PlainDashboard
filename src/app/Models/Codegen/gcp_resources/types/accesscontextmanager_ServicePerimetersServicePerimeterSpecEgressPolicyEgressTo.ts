import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressToOperation,
  accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressToOperation_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressToOperation";

export interface accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo {
  /*
A list of external resources that are allowed to be accessed. A request
matches if it contains an external resource in this list (Example:
s3://bucket/path). Currently '-' is not allowed.
*/
  externalResources?: Array<string>;

  /*
A list of `ApiOperations` that this egress rule applies to. A request matches
if it contains an operation/service in this list.
Structure is documented below.
*/
  operations?: Array<accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressToOperation>;

  /*
A list of resources, currently only projects in the form
`projects/<projectnumber>`, that match this to stanza. A request matches
if it contains a resource in this list. If - is specified for resources,
then this `EgressTo` rule will authorize access to all resources outside
the perimeter.
*/
  resources?: Array<string>;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressTo_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "externalResources",
      "A list of external resources that are allowed to be accessed. A request\nmatches if it contains an external resource in this list (Example:\ns3://bucket/path). Currently '*' is not allowed.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "operations",
      "A list of `ApiOperations` that this egress rule applies to. A request matches\nif it contains an operation/service in this list.\nStructure is documented below.",
      accesscontextmanager_ServicePerimetersServicePerimeterSpecEgressPolicyEgressToOperation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "A list of resources, currently only projects in the form\n`projects/<projectnumber>`, that match this to stanza. A request matches\nif it contains a resource in this list. If * is specified for resources,\nthen this `EgressTo` rule will authorize access to all resources outside\nthe perimeter.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
