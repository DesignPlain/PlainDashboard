import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface networkservices_TlsRouteRuleActionDestination {
  // The URL of a BackendService to route traffic to.
  serviceName?: string;

  /*
Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

- - -
*/
  weight?: number;
}

export function networkservices_TlsRouteRuleActionDestination_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "serviceName",
      "The URL of a BackendService to route traffic to.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "weight",
      "Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.\n\n- - -",
      [],
      false,
      false,
    ),
  ];
}
