import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigatewayv2_StageAccessLogSettings,
  apigatewayv2_StageAccessLogSettings_GetTypes,
} from "../types/apigatewayv2_StageAccessLogSettings";
import {
  apigatewayv2_StageDefaultRouteSettings,
  apigatewayv2_StageDefaultRouteSettings_GetTypes,
} from "../types/apigatewayv2_StageDefaultRouteSettings";
import {
  apigatewayv2_StageRouteSetting,
  apigatewayv2_StageRouteSetting_GetTypes,
} from "../types/apigatewayv2_StageRouteSetting";

export interface StageArgs {
  // API identifier.
  apiId?: string;

  // Whether updates to an API automatically trigger a new deployment. Defaults to `false`. Applicable for HTTP APIs.
  autoDeploy?: boolean;

  // Deployment identifier of the stage. Use the `aws.apigatewayv2.Deployment` resource to configure a deployment.
  deploymentId?: string;

  // Description for the stage. Must be less than or equal to 1024 characters in length.
  description?: string;

  /*
Name of the stage. Must be between 1 and 128 characters in length.

The following arguments are optional:
*/
  name?: string;

  // Map of tags to assign to the stage. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  /*
Settings for logging access in this stage.
Use the `aws.apigateway.Account` resource to configure [permissions for CloudWatch Logging](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html#set-up-access-logging-permissions).
*/
  accessLogSettings?: apigatewayv2_StageAccessLogSettings;

  /*
Identifier of a client certificate for the stage. Use the `aws.apigateway.ClientCertificate` resource to configure a client certificate.
Supported only for WebSocket APIs.
*/
  clientCertificateId?: string;

  // Default route settings for the stage.
  defaultRouteSettings?: apigatewayv2_StageDefaultRouteSettings;

  // Route settings for the stage.
  routeSettings?: Array<apigatewayv2_StageRouteSetting>;

  // Map that defines the stage variables for the stage.
  stageVariables?: Map<string, string>;
}
export class Stage extends Resource {
  /*
Settings for logging access in this stage.
Use the `aws.apigateway.Account` resource to configure [permissions for CloudWatch Logging](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html#set-up-access-logging-permissions).
*/
  public accessLogSettings?: apigatewayv2_StageAccessLogSettings;

  // API identifier.
  public apiId?: string;

  // Map that defines the stage variables for the stage.
  public stageVariables?: Map<string, string>;

  /*
ARN prefix to be used in an `aws.lambda.Permission`'s `source_arn` attribute.
For WebSocket APIs this attribute can additionally be used in an `aws.iam.Policy` to authorize access to the [`@connections` API](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-how-to-call-websocket-api-connections.html).
See the [Amazon API Gateway Developer Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-control-access-iam.html) for details.
*/
  public executionArn?: string;

  /*
URL to invoke the API pointing to the stage,
e.g., `wss://z4675bid1j.execute-api.eu-west-2.amazonaws.com/example-stage`, or `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/`
*/
  public invokeUrl?: string;

  // Map of tags to assign to the stage. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Whether updates to an API automatically trigger a new deployment. Defaults to `false`. Applicable for HTTP APIs.
  public autoDeploy?: boolean;

  // Default route settings for the stage.
  public defaultRouteSettings?: apigatewayv2_StageDefaultRouteSettings;

  // Deployment identifier of the stage. Use the `aws.apigatewayv2.Deployment` resource to configure a deployment.
  public deploymentId?: string;

  // Route settings for the stage.
  public routeSettings?: Array<apigatewayv2_StageRouteSetting>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN of the stage.
  public arn?: string;

  /*
Identifier of a client certificate for the stage. Use the `aws.apigateway.ClientCertificate` resource to configure a client certificate.
Supported only for WebSocket APIs.
*/
  public clientCertificateId?: string;

  // Description for the stage. Must be less than or equal to 1024 characters in length.
  public description?: string;

  /*
Name of the stage. Must be between 1 and 128 characters in length.

The following arguments are optional:
*/
  public name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "deploymentId",
        "Deployment identifier of the stage. Use the `aws.apigatewayv2.Deployment` resource to configure a deployment.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Name of the stage. Must be between 1 and 128 characters in length.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessLogSettings",
        "Settings for logging access in this stage.\nUse the `aws.apigateway.Account` resource to configure [permissions for CloudWatch Logging](https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-logging.html#set-up-access-logging-permissions).",
        apigatewayv2_StageAccessLogSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "defaultRouteSettings",
        "Default route settings for the stage.",
        apigatewayv2_StageDefaultRouteSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "stageVariables",
        "Map that defines the stage variables for the stage.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "routeSettings",
        "Route settings for the stage.",
        apigatewayv2_StageRouteSetting_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "apiId",
        "API identifier.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "autoDeploy",
        "Whether updates to an API automatically trigger a new deployment. Defaults to `false`. Applicable for HTTP APIs.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description for the stage. Must be less than or equal to 1024 characters in length.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the stage. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientCertificateId",
        "Identifier of a client certificate for the stage. Use the `aws.apigateway.ClientCertificate` resource to configure a client certificate.\nSupported only for WebSocket APIs.",
        [],
        false,
        false,
      ),
    ];
  }
}
