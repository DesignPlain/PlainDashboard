import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom,
  accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom_GetTypes,
} from './accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom';
import {
  accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo,
  accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo_GetTypes,
} from './accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo';

export interface accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicy {
  /*
Defines the conditions on the source of a request causing this `IngressPolicy`
to apply.
Structure is documented below.
*/
  ingressFrom?: accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom;

  /*
Defines the conditions on the `ApiOperation` and request destination that cause
this `IngressPolicy` to apply.
Structure is documented below.
*/
  ingressTo?: accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo;
}

export function accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'ingressFrom',
      'Defines the conditions on the source of a request causing this `IngressPolicy`\nto apply.\nStructure is documented below.',
      () =>
        accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressFrom_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      'ingressTo',
      'Defines the conditions on the `ApiOperation` and request destination that cause\nthis `IngressPolicy` to apply.\nStructure is documented below.',
      () =>
        accesscontextmanager_ServicePerimetersServicePerimeterStatusIngressPolicyIngressTo_GetTypes(),
      false,
      false,
    ),
  ];
}
