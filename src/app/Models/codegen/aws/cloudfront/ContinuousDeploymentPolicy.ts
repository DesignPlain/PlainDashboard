import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  cloudfront_ContinuousDeploymentPolicyTrafficConfig,
  cloudfront_ContinuousDeploymentPolicyTrafficConfig_GetTypes,
} from "../types/cloudfront_ContinuousDeploymentPolicyTrafficConfig";
import {
  cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames,
  cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames_GetTypes,
} from "../types/cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames";

export interface ContinuousDeploymentPolicyArgs {
  // Parameters for routing production traffic from primary to staging distributions. See `traffic_config`.
  trafficConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfig;

  // Whether this continuous deployment policy is enabled.
  enabled?: boolean;

  // CloudFront domain name of the staging distribution. See `staging_distribution_dns_names`.
  stagingDistributionDnsNames?: cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames;
}
export class ContinuousDeploymentPolicy extends DS_Resource {
  // Whether this continuous deployment policy is enabled.
  public enabled?: boolean;

  // Current version of the continuous distribution policy.
  public etag?: string;

  // Date and time the continuous deployment policy was last modified.
  public lastModifiedTime?: string;

  // CloudFront domain name of the staging distribution. See `staging_distribution_dns_names`.
  public stagingDistributionDnsNames?: cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames;

  // Parameters for routing production traffic from primary to staging distributions. See `traffic_config`.
  public trafficConfig?: cloudfront_ContinuousDeploymentPolicyTrafficConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "trafficConfig",
        "Parameters for routing production traffic from primary to staging distributions. See `traffic_config`.",
        () => cloudfront_ContinuousDeploymentPolicyTrafficConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "enabled",
        "Whether this continuous deployment policy is enabled.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "stagingDistributionDnsNames",
        "CloudFront domain name of the staging distribution. See `staging_distribution_dns_names`.",
        () =>
          cloudfront_ContinuousDeploymentPolicyStagingDistributionDnsNames_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
