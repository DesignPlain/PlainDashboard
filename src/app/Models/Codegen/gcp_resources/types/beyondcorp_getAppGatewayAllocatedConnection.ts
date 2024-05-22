import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface beyondcorp_getAppGatewayAllocatedConnection {
  // The ingress port of an allocated connection.
  ingressPort?: number;

  // The PSC uri of an allocated connection.
  pscUri?: string;
}

export function beyondcorp_getAppGatewayAllocatedConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "ingressPort",
      "The ingress port of an allocated connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "pscUri",
      "The PSC uri of an allocated connection.",
      [],
      true,
      false,
    ),
  ];
}
