import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource,
  accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource_GetTypes,
} from './accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource';

export interface accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom {
  /*
Specifies the type of identities that are allowed access from outside the
perimeter. If left unspecified, then members of `identities` field will be
allowed access.
Possible values are: `IDENTITY_TYPE_UNSPECIFIED`, `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.
*/
  identityType?: string;

  /*
Sources that this `IngressPolicy` authorizes access from.
Structure is documented below.
*/
  sources?: Array<accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource>;

  /*
A list of identities that are allowed access through this ingress policy.
Should be in the format of email address. The email address should represent
individual user or service account only.
*/
  identities?: Array<string>;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'identityType',
      'Specifies the type of identities that are allowed access from outside the\nperimeter. If left unspecified, then members of `identities` field will be\nallowed access.\nPossible values are: `IDENTITY_TYPE_UNSPECIFIED`, `ANY_IDENTITY`, `ANY_USER_ACCOUNT`, `ANY_SERVICE_ACCOUNT`.',
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'sources',
      'Sources that this `IngressPolicy` authorizes access from.\nStructure is documented below.',
      () =>
        accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFromSource_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'identities',
      'A list of identities that are allowed access through this ingress policy.\nShould be in the format of email address. The email address should represent\nindividual user or service account only.',
      () => InputType_String_GetTypes(),
      false,
      false,
    ),
  ];
}
