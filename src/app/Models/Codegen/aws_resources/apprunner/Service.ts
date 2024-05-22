import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  apprunner_ServiceInstanceConfiguration,
  apprunner_ServiceInstanceConfiguration_GetTypes,
} from "../types/apprunner_ServiceInstanceConfiguration";
import {
  apprunner_ServiceNetworkConfiguration,
  apprunner_ServiceNetworkConfiguration_GetTypes,
} from "../types/apprunner_ServiceNetworkConfiguration";
import {
  apprunner_ServiceSourceConfiguration,
  apprunner_ServiceSourceConfiguration_GetTypes,
} from "../types/apprunner_ServiceSourceConfiguration";
import {
  apprunner_ServiceEncryptionConfiguration,
  apprunner_ServiceEncryptionConfiguration_GetTypes,
} from "../types/apprunner_ServiceEncryptionConfiguration";
import {
  apprunner_ServiceHealthCheckConfiguration,
  apprunner_ServiceHealthCheckConfiguration_GetTypes,
} from "../types/apprunner_ServiceHealthCheckConfiguration";
import {
  apprunner_ServiceObservabilityConfiguration,
  apprunner_ServiceObservabilityConfiguration_GetTypes,
} from "../types/apprunner_ServiceObservabilityConfiguration";

export interface ServiceArgs {
  // The runtime configuration of instances (scaling units) of the App Runner service. See Instance Configuration below for more details.
  instanceConfiguration?: apprunner_ServiceInstanceConfiguration;

  // Configuration settings related to network traffic of the web application that the App Runner service runs. See Network Configuration below for more details.
  networkConfiguration?: apprunner_ServiceNetworkConfiguration;

  // Name of the service.
  serviceName?: string;

  /*
The source to deploy to the App Runner service. Can be a code or an image repository. See Source Configuration below for more details.

The following arguments are optional:
*/
  sourceConfiguration?: apprunner_ServiceSourceConfiguration;

  // ARN of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.
  autoScalingConfigurationArn?: string;

  // An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an AWS managed CMK. See Encryption Configuration below for more details.
  encryptionConfiguration?: apprunner_ServiceEncryptionConfiguration;

  // Settings of the health check that AWS App Runner performs to monitor the health of your service. See Health Check Configuration below for more details.
  healthCheckConfiguration?: apprunner_ServiceHealthCheckConfiguration;

  // The observability configuration of your service. See Observability Configuration below for more details.
  observabilityConfiguration?: apprunner_ServiceObservabilityConfiguration;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Service extends Resource {
  // The observability configuration of your service. See Observability Configuration below for more details.
  public observabilityConfiguration?: apprunner_ServiceObservabilityConfiguration;

  // An alphanumeric ID that App Runner generated for this service. Unique within the AWS Region.
  public serviceId?: string;

  // Name of the service.
  public serviceName?: string;

  /*
The source to deploy to the App Runner service. Can be a code or an image repository. See Source Configuration below for more details.

The following arguments are optional:
*/
  public sourceConfiguration?: apprunner_ServiceSourceConfiguration;

  // An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an AWS managed CMK. See Encryption Configuration below for more details.
  public encryptionConfiguration?: apprunner_ServiceEncryptionConfiguration;

  // The runtime configuration of instances (scaling units) of the App Runner service. See Instance Configuration below for more details.
  public instanceConfiguration?: apprunner_ServiceInstanceConfiguration;

  // Subdomain URL that App Runner generated for this service. You can use this URL to access your service web application.
  public serviceUrl?: string;

  // Current state of the App Runner service.
  public status?: string;

  // Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // Settings of the health check that AWS App Runner performs to monitor the health of your service. See Health Check Configuration below for more details.
  public healthCheckConfiguration?: apprunner_ServiceHealthCheckConfiguration;

  // Configuration settings related to network traffic of the web application that the App Runner service runs. See Network Configuration below for more details.
  public networkConfiguration?: apprunner_ServiceNetworkConfiguration;

  // ARN of the App Runner service.
  public arn?: string;

  // ARN of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.
  public autoScalingConfigurationArn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "instanceConfiguration",
        "The runtime configuration of instances (scaling units) of the App Runner service. See Instance Configuration below for more details.",
        apprunner_ServiceInstanceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "networkConfiguration",
        "Configuration settings related to network traffic of the web application that the App Runner service runs. See Network Configuration below for more details.",
        apprunner_ServiceNetworkConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceName",
        "Name of the service.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptionConfiguration",
        "An optional custom encryption key that App Runner uses to encrypt the copy of your source repository that it maintains and your service logs. By default, App Runner uses an AWS managed CMK. See Encryption Configuration below for more details.",
        apprunner_ServiceEncryptionConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sourceConfiguration",
        "The source to deploy to the App Runner service. Can be a code or an image repository. See Source Configuration below for more details.\n\nThe following arguments are optional:",
        apprunner_ServiceSourceConfiguration_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "autoScalingConfigurationArn",
        "ARN of an App Runner automatic scaling configuration resource that you want to associate with your service. If not provided, App Runner associates the latest revision of a default auto scaling configuration.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "healthCheckConfiguration",
        "Settings of the health check that AWS App Runner performs to monitor the health of your service. See Health Check Configuration below for more details.",
        apprunner_ServiceHealthCheckConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "observabilityConfiguration",
        "The observability configuration of your service. See Observability Configuration below for more details.",
        apprunner_ServiceObservabilityConfiguration_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
