import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  apigateway_StageAccessLogSettings,
  apigateway_StageAccessLogSettings_GetTypes,
} from "../types/apigateway_StageAccessLogSettings";
import {
  apigateway_StageCanarySettings,
  apigateway_StageCanarySettings_GetTypes,
} from "../types/apigateway_StageCanarySettings";

export interface StageArgs {
  // Version of the associated API documentation
  documentationVersion?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Map that defines the stage variables
  variables?: Map<string, string>;

  // Enables access logs for the API stage. See Access Log Settings below.
  accessLogSettings?: apigateway_StageAccessLogSettings;

  // Size of the cache cluster for the stage, if enabled. Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`.
  cacheClusterSize?: string;

  // Configuration settings of a canary deployment. See Canary Settings below.
  canarySettings?: apigateway_StageCanarySettings;

  // ID of the deployment that the stage points to
  deployment?: string;

  // Name of the stage
  stageName?: string;

  // Whether active tracing with X-ray is enabled. Defaults to `false`.
  xrayTracingEnabled?: boolean;

  // Whether a cache cluster is enabled for the stage
  cacheClusterEnabled?: boolean;

  // Identifier of a client certificate for the stage.
  clientCertificateId?: string;

  // Description of the stage.
  description?: string;

  // ID of the associated REST API
  restApi?: string;
}
export class Stage extends Resource {
  // Whether a cache cluster is enabled for the stage
  public cacheClusterEnabled?: boolean;

  /*
URL to invoke the API pointing to the stage,
e.g., `https://z4675bid1j.execute-api.eu-west-2.amazonaws.com/prod`
*/
  public invokeUrl?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ARN
  public arn?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map that defines the stage variables
  public variables?: Map<string, string>;

  // ARN of the WebAcl associated with the Stage.
  public webAclArn?: string;

  // Size of the cache cluster for the stage, if enabled. Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`.
  public cacheClusterSize?: string;

  // Configuration settings of a canary deployment. See Canary Settings below.
  public canarySettings?: apigateway_StageCanarySettings;

  // Identifier of a client certificate for the stage.
  public clientCertificateId?: string;

  // ID of the deployment that the stage points to
  public deployment?: string;

  // Version of the associated API documentation
  public documentationVersion?: string;

  /*
Execution ARN to be used in `lambda_permission`'s `source_arn`
when allowing API Gateway to invoke a Lambda function,
e.g., `arn:aws:execute-api:eu-west-2:123456789012:z4675bid1j/prod`
*/
  public executionArn?: string;

  // Enables access logs for the API stage. See Access Log Settings below.
  public accessLogSettings?: apigateway_StageAccessLogSettings;

  // Description of the stage.
  public description?: string;

  // ID of the associated REST API
  public restApi?: string;

  // Name of the stage
  public stageName?: string;

  // Whether active tracing with X-ray is enabled. Defaults to `false`.
  public xrayTracingEnabled?: boolean;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "canarySettings",
        "Configuration settings of a canary deployment. See Canary Settings below.",
        apigateway_StageCanarySettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "stageName",
        "Name of the stage",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "xrayTracingEnabled",
        "Whether active tracing with X-ray is enabled. Defaults to `false`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "cacheClusterEnabled",
        "Whether a cache cluster is enabled for the stage",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "clientCertificateId",
        "Identifier of a client certificate for the stage.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "restApi",
        "ID of the associated REST API",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the stage.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "documentationVersion",
        "Version of the associated API documentation",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "variables",
        "Map that defines the stage variables",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "accessLogSettings",
        "Enables access logs for the API stage. See Access Log Settings below.",
        apigateway_StageAccessLogSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "cacheClusterSize",
        "Size of the cache cluster for the stage, if enabled. Allowed values include `0.5`, `1.6`, `6.1`, `13.5`, `28.4`, `58.2`, `118` and `237`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "deployment",
        "ID of the deployment that the stage points to",
        [],
        true,
        false,
      ),
    ];
  }
}
