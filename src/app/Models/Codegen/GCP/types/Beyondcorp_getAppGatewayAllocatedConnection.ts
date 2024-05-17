import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Beyondcorp_getAppGatewayAllocatedConnection {
  // The ingress port of an allocated connection.
  IngressPort?: number;

  // The PSC uri of an allocated connection.
  PscUri?: string;
}

export function Beyondcorp_getAppGatewayAllocatedConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "IngressPort",
      "The ingress port of an allocated connection.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PscUri",
      "The PSC uri of an allocated connection.",
      [],
      true,
      false,
    ),
  ];
}
