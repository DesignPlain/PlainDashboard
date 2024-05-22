import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface DeploymentArgs {
  // Configuration version to deploy. Can be at most 1024 characters.
  configurationVersion?: string;

  // Deployment strategy ID or name of a predefined deployment strategy. See [Predefined Deployment Strategies](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy.html#appconfig-creating-deployment-strategy-predefined) for more details.
  deploymentStrategyId?: string;

  // Description of the deployment. Can be at most 1024 characters.
  description?: string;

  // Environment ID. Must be between 4 and 7 characters in length.
  environmentId?: string;

  // The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this to encrypt the configuration data using a customer managed key.
  kmsKeyIdentifier?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Application ID. Must be between 4 and 7 characters in length.
  applicationId?: string;

  // Configuration profile ID. Must be between 4 and 7 characters in length.
  configurationProfileId?: string;
}
export class Deployment extends Resource {
  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Configuration version to deploy. Can be at most 1024 characters.
  public configurationVersion?: string;

  // Deployment number.
  public deploymentNumber?: number;

  // Deployment strategy ID or name of a predefined deployment strategy. See [Predefined Deployment Strategies](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy.html#appconfig-creating-deployment-strategy-predefined) for more details.
  public deploymentStrategyId?: string;

  // Description of the deployment. Can be at most 1024 characters.
  public description?: string;

  // The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this to encrypt the configuration data using a customer managed key.
  public kmsKeyIdentifier?: string;

  // State of the deployment.
  public state?: string;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Application ID. Must be between 4 and 7 characters in length.
  public applicationId?: string;

  // ARN of the AppConfig Deployment.
  public arn?: string;

  // Configuration profile ID. Must be between 4 and 7 characters in length.
  public configurationProfileId?: string;

  // Environment ID. Must be between 4 and 7 characters in length.
  public environmentId?: string;

  // ARN of the KMS key used to encrypt configuration data.
  public kmsKeyArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "configurationProfileId",
        "Configuration profile ID. Must be between 4 and 7 characters in length.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "configurationVersion",
        "Configuration version to deploy. Can be at most 1024 characters.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deploymentStrategyId",
        "Deployment strategy ID or name of a predefined deployment strategy. See [Predefined Deployment Strategies](https://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-creating-deployment-strategy.html#appconfig-creating-deployment-strategy-predefined) for more details.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the deployment. Can be at most 1024 characters.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentId",
        "Environment ID. Must be between 4 and 7 characters in length.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "kmsKeyIdentifier",
        "The KMS key identifier (key ID, key alias, or key ARN). AppConfig uses this to encrypt the configuration data using a customer managed key.",
        [],
        false,
        true,
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
        InputType.String,
        "applicationId",
        "Application ID. Must be between 4 and 7 characters in length.",
        [],
        true,
        true,
      ),
    ];
  }
}
