import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IntegrationResponseArgs {
  // Identifier of the `aws.apigatewayv2.Integration`.
  integrationId?: string;

  // Integration response key.
  integrationResponseKey?: string;

  // Map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.
  responseTemplates?: Map<string, string>;

  // The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration response.
  templateSelectionExpression?: string;

  // API identifier.
  apiId?: string;

  // How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`.
  contentHandlingStrategy?: string;
}
export class IntegrationResponse extends DS_Resource {
  // API identifier.
  public apiId?: string;

  // How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`.
  public contentHandlingStrategy?: string;

  // Identifier of the `aws.apigatewayv2.Integration`.
  public integrationId?: string;

  // Integration response key.
  public integrationResponseKey?: string;

  // Map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.
  public responseTemplates?: Map<string, string>;

  // The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration response.
  public templateSelectionExpression?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'integrationId',
        'Identifier of the `aws.apigatewayv2.Integration`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'integrationResponseKey',
        'Integration response key.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'responseTemplates',
        'Map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'templateSelectionExpression',
        'The [template selection expression](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-template-selection-expressions) for the integration response.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'apiId',
        'API identifier.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'contentHandlingStrategy',
        'How to handle response payload content type conversions. Valid values: `CONVERT_TO_BINARY`, `CONVERT_TO_TEXT`.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
