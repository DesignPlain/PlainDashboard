import { ConfigBlockingFunctionsForwardInboundCredentials } from "./ConfigBlockingFunctionsForwardInboundCredentials";
import { ConfigBlockingFunctionsTrigger } from "./ConfigBlockingFunctionsTrigger";

export interface ConfigBlockingFunctions {
  /*
The user credentials to include in the JWT payload that is sent to the registered Blocking Functions.
Structure is documented below.
*/
  ForwardInboundCredentials?: ConfigBlockingFunctionsForwardInboundCredentials;

  /*
Map of Trigger to event type. Key should be one of the supported event types: "beforeCreate", "beforeSignIn".
Structure is documented below.
*/
  Triggers?: Array<ConfigBlockingFunctionsTrigger>;
}
