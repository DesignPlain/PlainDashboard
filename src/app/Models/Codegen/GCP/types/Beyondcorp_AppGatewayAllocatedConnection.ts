import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Beyondcorp_AppGatewayAllocatedConnection {
  // The ingress port of an allocated connection.
  IngressPort?: number;

  // The PSC uri of an allocated connection.
  PscUri?: string;
}

export function Beyondcorp_AppGatewayAllocatedConnection_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "IngressPort",
      "The ingress port of an allocated connection.",
      [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "PscUri",
      "The PSC uri of an allocated connection.",
      [],
      false,
      false,
    ),
  ];
}
