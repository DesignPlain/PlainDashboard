import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials,
  Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials_GetTypes,
} from "./Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials";
import {
  Identityplatform_ConfigBlockingFunctionsTrigger,
  Identityplatform_ConfigBlockingFunctionsTrigger_GetTypes,
} from "./Identityplatform_ConfigBlockingFunctionsTrigger";

export interface Identityplatform_ConfigBlockingFunctions {
  /*
The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.
Structure is documented below.
*/
  ForwardInboundCredentials?: Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials;

  /*
Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn".
Structure is documented below.
*/
  Triggers?: Array<Identityplatform_ConfigBlockingFunctionsTrigger>;
}

export function Identityplatform_ConfigBlockingFunctions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "ForwardInboundCredentials",
      "The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.\nStructure is documented below.",
      Identityplatform_ConfigBlockingFunctionsForwardInboundCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "Triggers",
      'Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn".\nStructure is documented below.',
      Identityplatform_ConfigBlockingFunctionsTrigger_GetTypes(),
      true,
      false,
    ),
  ];
}
