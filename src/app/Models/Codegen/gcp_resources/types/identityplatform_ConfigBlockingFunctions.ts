import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  identityplatform_ConfigBlockingFunctionsForwardInboundCredentials,
  identityplatform_ConfigBlockingFunctionsForwardInboundCredentials_GetTypes,
} from "./identityplatform_ConfigBlockingFunctionsForwardInboundCredentials";
import {
  identityplatform_ConfigBlockingFunctionsTrigger,
  identityplatform_ConfigBlockingFunctionsTrigger_GetTypes,
} from "./identityplatform_ConfigBlockingFunctionsTrigger";

export interface identityplatform_ConfigBlockingFunctions {
  /*
The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.
Structure is documented below.
*/
  forwardInboundCredentials?: identityplatform_ConfigBlockingFunctionsForwardInboundCredentials;

  /*
Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn".
Structure is documented below.
*/
  triggers?: Array<identityplatform_ConfigBlockingFunctionsTrigger>;
}

export function identityplatform_ConfigBlockingFunctions_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "forwardInboundCredentials",
      "The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.\nStructure is documented below.",
      identityplatform_ConfigBlockingFunctionsForwardInboundCredentials_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "triggers",
      'Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn".\nStructure is documented below.',
      identityplatform_ConfigBlockingFunctionsTrigger_GetTypes(),
      true,
      false,
    ),
  ];
}
