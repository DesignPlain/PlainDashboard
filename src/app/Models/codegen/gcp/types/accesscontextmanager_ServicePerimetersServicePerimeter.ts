import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterSpec,
  accesscontextmanager_ServicePerimetersServicePerimeterSpec_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterSpec";
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatus,
  accesscontextmanager_ServicePerimetersServicePerimeterStatus_GetTypes,
} from "./accesscontextmanager_ServicePerimetersServicePerimeterStatus";

export interface accesscontextmanager_ServicePerimetersServicePerimeter {
  /*
(Output)
Time the AccessPolicy was updated in UTC.
*/
  updateTime?: string;

  /*
Description of the ServicePerimeter and its use. Does not affect
behavior.
*/
  description?: string;

  /*
Resource name for the ServicePerimeter. The short_name component must
begin with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/servicePerimeters/{short_name}
*/
  name?: string;

  /*
Proposed (or dry run) ServicePerimeter configuration.
This configuration allows to specify and test ServicePerimeter configuration
without enforcing actual access restrictions. Only allowed to be set when
the `useExplicitDryRunSpec` flag is set.
Structure is documented below.
*/
  spec?: accesscontextmanager_ServicePerimetersServicePerimeterSpec;

  // Human readable title. Must be unique within the Policy.
  title?: string;

  /*
(Output)
Time the AccessPolicy was created in UTC.
*/
  createTime?: string;

  /*
Specifies the type of the Perimeter. There are two types: regular and
bridge. Regular Service Perimeter contains resources, access levels,
and restricted services. Every resource can be in at most
ONE regular Service Perimeter.
In addition to being in a regular service perimeter, a resource can also
be in zero or more perimeter bridges. A perimeter bridge only contains
resources. Cross project operations are permitted if all effected
resources share some perimeter (whether bridge or regular). Perimeter
Bridge does not contain access levels or services: those are governed
entirely by the regular perimeter that resource is in.
Perimeter Bridges are typically useful when building more complex
topologies with many independent perimeters that need to share some data
with a common perimeter, but should not be able to share data among
themselves.
Default value is `PERIMETER_TYPE_REGULAR`.
Possible values are: `PERIMETER_TYPE_REGULAR`, `PERIMETER_TYPE_BRIDGE`.
*/
  perimeterType?: string;

  /*
ServicePerimeter configuration. Specifies sets of resources,
restricted services and access levels that determine
perimeter content and boundaries.
Structure is documented below.
*/
  status?: accesscontextmanager_ServicePerimetersServicePerimeterStatus;

  /*
Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists
for all Service Perimeters, and that spec is identical to the status for those
Service Perimeters. When this flag is set, it inhibits the generation of the
implicit spec, thereby allowing the user to explicitly provide a
configuration ("spec") to use in a dry-run version of the Service Perimeter.
This allows the user to test changes to the enforced config ("status") without
actually enforcing them. This testing is done through analyzing the differences
between currently enforced and suggested restrictions. useExplicitDryRunSpec must
bet set to True if any of the fields in the spec are set to non-default values.
*/
  useExplicitDryRunSpec?: boolean;
}

export function accesscontextmanager_ServicePerimetersServicePerimeter_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "createTime",
      "(Output)\nTime the AccessPolicy was created in UTC.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "perimeterType",
      "Specifies the type of the Perimeter. There are two types: regular and\nbridge. Regular Service Perimeter contains resources, access levels,\nand restricted services. Every resource can be in at most\nONE regular Service Perimeter.\nIn addition to being in a regular service perimeter, a resource can also\nbe in zero or more perimeter bridges. A perimeter bridge only contains\nresources. Cross project operations are permitted if all effected\nresources share some perimeter (whether bridge or regular). Perimeter\nBridge does not contain access levels or services: those are governed\nentirely by the regular perimeter that resource is in.\nPerimeter Bridges are typically useful when building more complex\ntopologies with many independent perimeters that need to share some data\nwith a common perimeter, but should not be able to share data among\nthemselves.\nDefault value is `PERIMETER_TYPE_REGULAR`.\nPossible values are: `PERIMETER_TYPE_REGULAR`, `PERIMETER_TYPE_BRIDGE`.",
      () => [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Object,
      "status",
      "ServicePerimeter configuration. Specifies sets of resources,\nrestricted services and access levels that determine\nperimeter content and boundaries.\nStructure is documented below.",
      () =>
        accesscontextmanager_ServicePerimetersServicePerimeterStatus_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "useExplicitDryRunSpec",
      'Use explicit dry run spec flag. Ordinarily, a dry-run spec implicitly exists\nfor all Service Perimeters, and that spec is identical to the status for those\nService Perimeters. When this flag is set, it inhibits the generation of the\nimplicit spec, thereby allowing the user to explicitly provide a\nconfiguration ("spec") to use in a dry-run version of the Service Perimeter.\nThis allows the user to test changes to the enforced config ("status") without\nactually enforcing them. This testing is done through analyzing the differences\nbetween currently enforced and suggested restrictions. useExplicitDryRunSpec must\nbet set to True if any of the fields in the spec are set to non-default values.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "description",
      "Description of the ServicePerimeter and its use. Does not affect\nbehavior.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "spec",
      "Proposed (or dry run) ServicePerimeter configuration.\nThis configuration allows to specify and test ServicePerimeter configuration\nwithout enforcing actual access restrictions. Only allowed to be set when\nthe `useExplicitDryRunSpec` flag is set.\nStructure is documented below.",
      () =>
        accesscontextmanager_ServicePerimetersServicePerimeterSpec_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "title",
      "Human readable title. Must be unique within the Policy.",
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "updateTime",
      "(Output)\nTime the AccessPolicy was updated in UTC.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Resource name for the ServicePerimeter. The short_name component must\nbegin with a letter and only include alphanumeric and '_'.\nFormat: accessPolicies/{policy_id}/servicePerimeters/{short_name}",
      () => [],
      true,
      true,
    ),
  ];
}
