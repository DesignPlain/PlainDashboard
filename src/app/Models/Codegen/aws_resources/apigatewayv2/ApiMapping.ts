import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface ApiMappingArgs {
  // Domain name. Use the `aws.apigatewayv2.DomainName` resource to configure a domain name.
  domainName?: string;

  // API stage. Use the `aws.apigatewayv2.Stage` resource to configure an API stage.
  stage?: string;

  // API identifier.
  apiId?: string;

  // The API mapping key. Refer to [REST API](https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mappings.html), [HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-mappings.html) or [WebSocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-mappings.html).
  apiMappingKey?: string;
}
export class ApiMapping extends Resource {
  // API identifier.
  public apiId?: string;

  // The API mapping key. Refer to [REST API](https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mappings.html), [HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-mappings.html) or [WebSocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-mappings.html).
  public apiMappingKey?: string;

  // Domain name. Use the `aws.apigatewayv2.DomainName` resource to configure a domain name.
  public domainName?: string;

  // API stage. Use the `aws.apigatewayv2.Stage` resource to configure an API stage.
  public stage?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "stage",
        "API stage. Use the `aws.apigatewayv2.Stage` resource to configure an API stage.",
        [],
        true,
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
        InputType.String,
        "apiMappingKey",
        "The API mapping key. Refer to [REST API](https://docs.aws.amazon.com/apigateway/latest/developerguide/rest-api-mappings.html), [HTTP API](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-mappings.html) or [WebSocket API](https://docs.aws.amazon.com/apigateway/latest/developerguide/websocket-api-mappings.html).",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Domain name. Use the `aws.apigatewayv2.DomainName` resource to configure a domain name.",
        [],
        true,
        true,
      ),
    ];
  }
}
