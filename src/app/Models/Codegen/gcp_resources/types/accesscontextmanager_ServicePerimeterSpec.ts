import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimeterSpecEgressPolicy,
  accesscontextmanager_ServicePerimeterSpecEgressPolicy_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecEgressPolicy";
import {
  accesscontextmanager_ServicePerimeterSpecIngressPolicy,
  accesscontextmanager_ServicePerimeterSpecIngressPolicy_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecIngressPolicy";
import {
  accesscontextmanager_ServicePerimeterSpecVpcAccessibleServices,
  accesscontextmanager_ServicePerimeterSpecVpcAccessibleServices_GetTypes,
} from "./accesscontextmanager_ServicePerimeterSpecVpcAccessibleServices";

export interface accesscontextmanager_ServicePerimeterSpec {
  /*
A list of AccessLevel resource names that allow resources within
the ServicePerimeter to be accessed from the internet.
AccessLevels listed must be in the same policy as this
ServicePerimeter. Referencing a nonexistent AccessLevel is a
syntax error. If no AccessLevel names are listed, resources within
the perimeter can only be accessed via GCP calls with request
origins within the perimeter. For Service Perimeter Bridge, must
be empty.
Format: accessPolicies/{policy_id}/accessLevels/{access_level_name}
*/
  accessLevels?: Array<string>;

  /*
List of EgressPolicies to apply to the perimeter. A perimeter may
have multiple EgressPolicies, each of which is evaluated separately.
Access is granted if any EgressPolicy grants it. Must be empty for
a perimeter bridge.
Structure is documented below.
*/
  egressPolicies?: Array<accesscontextmanager_ServicePerimeterSpecEgressPolicy>;

  /*
List of `IngressPolicies` to apply to the perimeter. A perimeter may
have multiple `IngressPolicies`, each of which is evaluated
separately. Access is granted if any `Ingress Policy` grants it.
Must be empty for a perimeter bridge.
Structure is documented below.
*/
  ingressPolicies?: Array<accesscontextmanager_ServicePerimeterSpecIngressPolicy>;

  /*
A list of GCP resources that are inside of the service perimeter.
Currently only projects are allowed.
Format: projects/{project_number}
*/
  resources?: Array<string>;

  /*
GCP services that are subject to the Service Perimeter
restrictions. Must contain a list of services. For example, if
`storage.googleapis.com` is specified, access to the storage
buckets inside the perimeter must meet the perimeter's access
restrictions.
*/
  restrictedServices?: Array<string>;

  /*
Specifies how APIs are allowed to communicate within the Service
Perimeter.
Structure is documented below.
*/
  vpcAccessibleServices?: accesscontextmanager_ServicePerimeterSpecVpcAccessibleServices;
}

export function accesscontextmanager_ServicePerimeterSpec_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "resources",
      "A list of GCP resources that are inside of the service perimeter.\nCurrently only projects are allowed.\nFormat: projects/{project_number}",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "restrictedServices",
      "GCP services that are subject to the Service Perimeter\nrestrictions. Must contain a list of services. For example, if\n`storage.googleapis.com` is specified, access to the storage\nbuckets inside the perimeter must meet the perimeter's access\nrestrictions.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "vpcAccessibleServices",
      "Specifies how APIs are allowed to communicate within the Service\nPerimeter.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecVpcAccessibleServices_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "accessLevels",
      "A list of AccessLevel resource names that allow resources within\nthe ServicePerimeter to be accessed from the internet.\nAccessLevels listed must be in the same policy as this\nServicePerimeter. Referencing a nonexistent AccessLevel is a\nsyntax error. If no AccessLevel names are listed, resources within\nthe perimeter can only be accessed via GCP calls with request\norigins within the perimeter. For Service Perimeter Bridge, must\nbe empty.\nFormat: accessPolicies/{policy_id}/accessLevels/{access_level_name}",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "egressPolicies",
      "List of EgressPolicies to apply to the perimeter. A perimeter may\nhave multiple EgressPolicies, each of which is evaluated separately.\nAccess is granted if any EgressPolicy grants it. Must be empty for\na perimeter bridge.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecEgressPolicy_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "ingressPolicies",
      "List of `IngressPolicies` to apply to the perimeter. A perimeter may\nhave multiple `IngressPolicies`, each of which is evaluated\nseparately. Access is granted if any `Ingress Policy` grants it.\nMust be empty for a perimeter bridge.\nStructure is documented below.",
      accesscontextmanager_ServicePerimeterSpecIngressPolicy_GetTypes(),
      false,
      false,
    ),
  ];
}
