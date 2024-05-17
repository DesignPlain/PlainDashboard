import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFromSource,
  Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFromSource_GetTypes,
} from "./Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFromSource";

export interface Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom {
  /*
A list of identities that are allowed access through this `EgressPolicy`.
Should be in the format of email address. The email address should
represent individual user or service account only.
*/
  Identities?: Array<string>;

  /*
Specifies the type of identities that are allowed access to outside the
perimeter. If left unspecified, then members of `identities` field will
be allowed access.
Possible values are: `IDENTITY_TYPE_UNSPECIFIED`, `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.
*/
  IdentityType?: string;

  /*
Whether to enforce traffic restrictions based on `sources` field. If the `sources` field is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`.
Possible values are: `SOURCE_RESTRICTION_UNSPECIFIED`, `SOURCE_RESTRICTION_ENABLED`, `SOURCE_RESTRICTION_DISABLED`.
*/
  SourceRestriction?: string;

  /*
Sources that this EgressPolicy authorizes access from.
Structure is documented below.
*/
  Sources?: Array<Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFromSource>;
}

export function Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Array,
      "Identities",
      "A list of identities that are allowed access through this `EgressPolicy`.\nShould be in the format of email address. The email address should\nrepresent individual user or service account only.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "IdentityType",
      "Specifies the type of identities that are allowed access to outside the\nperimeter. If left unspecified, then members of `identities` field will\nbe allowed access.\nPossible values are: `IDENTITY_TYPE_UNSPECIFIED`, `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "SourceRestriction",
      "Whether to enforce traffic restrictions based on `sources` field. If the `sources` field is non-empty, then this field must be set to `SOURCE_RESTRICTION_ENABLED`.\nPossible values are: `SOURCE_RESTRICTION_UNSPECIFIED`, `SOURCE_RESTRICTION_ENABLED`, `SOURCE_RESTRICTION_DISABLED`.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Sources",
      "Sources that this EgressPolicy authorizes access from.\nStructure is documented below.",
      Accesscontextmanager_ServicePerimeterSpecEgressPolicyEgressFromSource_GetTypes(),
      false,
      false,
    ),
  ];
}
