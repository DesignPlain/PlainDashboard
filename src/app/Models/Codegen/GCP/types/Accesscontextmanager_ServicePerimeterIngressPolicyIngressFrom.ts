import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource,
  Accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource";

export interface Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom {
  /*
A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent
individual user or service account only.
*/
  Identities?: Array<string>;

  /*
Specifies the type of identities that are allowed access from outside the
perimeter. If left unspecified, then members of `identities` field will be
allowed access.
Possible values are: `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.
*/
  IdentityType?: string;

  /*
Sources that this `IngressPolicy` authorizes access from.
Structure is documented below.
*/
  Sources?: Array<Accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource>;
}

export function Accesscontextmanager_ServicePerimeterIngressPolicyIngressFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Identities",
      "A list of identities that are allowed access through this ingress policy.\nShould be in the format of email address. The email address should represent\nindividual user or service account only.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdentityType",
      "Specifies the type of identities that are allowed access from outside the\nperimeter. If left unspecified, then members of `identities` field will be\nallowed access.\nPossible values are: `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Sources",
      "Sources that this `IngressPolicy` authorizes access from.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterIngressPolicyIngressFromSource_GetTypes(),
      false,
      false,
    ),
  ];
}
