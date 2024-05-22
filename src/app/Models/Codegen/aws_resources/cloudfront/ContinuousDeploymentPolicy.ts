import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames,
  cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames_GetTypes,
} from "../types/cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames";
import {
  cloudfront_ContinuousDeploymentPolicyTrafficConfig,
  cloudfront_ContinuousDeploymentPolicyTrafficConfig_GetTypes,
} from "../types/cloudfront_ContinuousDeploymentPolicyTrafficConfig";

export interface ContinuousDeploymentPolicyArgs {
  // Whether this continuous deployment policy is enabled.
  enabled?: boolean;

  // CloudFront domain name of the staging distribution. See `staging_distribution_dns_names`.
  stagingDistributionDnsNames?: cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames;

  // Parameters for routing production traffic from primary to staging distributions. See `traffic_config`.
  trafficConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfig;
}
export class ContinuousDeploymentPolicy extends Resource {
  // CloudFront domain name of the staging distribution. See `staging_distribution_dns_names`.
  public stagingDistributionDnsNames?: cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames;

  // Parameters for routing production traffic from primary to staging distributions. See `traffic_config`.
  public trafficConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfig;

  // Whether this continuous deployment policy is enabled.
  public enabled?: boolean;

  // Current version of the continuous distribution policy.
  public etag?: string;

  // Date and time the continuous deployment policy was last modified.
  public lastModifiedTime?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether this continuous deployment policy is enabled.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stagingDistributionDnsNames",
        "CloudFront domain name of the staging distribution. See `staging_distribution_dns_names`.",
        cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "trafficConfig",
        "Parameters for routing production traffic from primary to staging distributions. See `traffic_config`.",
        cloudfront_ContinuousDeploymentPolicyTrafficConfig_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
