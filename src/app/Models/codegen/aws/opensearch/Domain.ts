import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  opensearch_DomainAutoTuneOptions,
  opensearch_DomainAutoTuneOptions_GetTypes,
} from '../types/opensearch_DomainAutoTuneOptions';
import {
  opensearch_DomainClusterConfig,
  opensearch_DomainClusterConfig_GetTypes,
} from '../types/opensearch_DomainClusterConfig';
import {
  opensearch_DomainSoftwareUpdateOptions,
  opensearch_DomainSoftwareUpdateOptions_GetTypes,
} from '../types/opensearch_DomainSoftwareUpdateOptions';
import {
  opensearch_DomainVpcOptions,
  opensearch_DomainVpcOptions_GetTypes,
} from '../types/opensearch_DomainVpcOptions';
import {
  opensearch_DomainSnapshotOptions,
  opensearch_DomainSnapshotOptions_GetTypes,
} from '../types/opensearch_DomainSnapshotOptions';
import {
  opensearch_DomainEncryptAtRest,
  opensearch_DomainEncryptAtRest_GetTypes,
} from '../types/opensearch_DomainEncryptAtRest';
import {
  opensearch_DomainAdvancedSecurityOptions,
  opensearch_DomainAdvancedSecurityOptions_GetTypes,
} from '../types/opensearch_DomainAdvancedSecurityOptions';
import {
  opensearch_DomainEbsOptions,
  opensearch_DomainEbsOptions_GetTypes,
} from '../types/opensearch_DomainEbsOptions';
import {
  opensearch_DomainNodeToNodeEncryption,
  opensearch_DomainNodeToNodeEncryption_GetTypes,
} from '../types/opensearch_DomainNodeToNodeEncryption';
import {
  opensearch_DomainOffPeakWindowOptions,
  opensearch_DomainOffPeakWindowOptions_GetTypes,
} from '../types/opensearch_DomainOffPeakWindowOptions';
import {
  opensearch_DomainCognitoOptions,
  opensearch_DomainCognitoOptions_GetTypes,
} from '../types/opensearch_DomainCognitoOptions';
import {
  opensearch_DomainLogPublishingOption,
  opensearch_DomainLogPublishingOption_GetTypes,
} from '../types/opensearch_DomainLogPublishingOption';
import {
  opensearch_DomainDomainEndpointOptions,
  opensearch_DomainDomainEndpointOptions_GetTypes,
} from '../types/opensearch_DomainDomainEndpointOptions';

export interface DomainArgs {
  // Configuration block for encrypt at rest options. Only available for [certain instance types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html). Detailed below.
  encryptAtRest?: opensearch_DomainEncryptAtRest;

  // The IP address type for the endpoint. Valid values are `ipv4` and `dualstack`.
  ipAddressType?: string;

  // Configuration block for publishing slow and application logs to CloudWatch Logs. This block can be declared multiple times, for each log_type, within the same resource. Detailed below.
  logPublishingOptions?: Array<opensearch_DomainLogPublishingOption>;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block for [fine-grained access control](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html). Detailed below.
  advancedSecurityOptions?: opensearch_DomainAdvancedSecurityOptions;

  // Configuration block for domain endpoint HTTP(S) related options. Detailed below.
  domainEndpointOptions?: opensearch_DomainDomainEndpointOptions;

  // Configuration block for the Auto-Tune options of the domain. Detailed below.
  autoTuneOptions?: opensearch_DomainAutoTuneOptions;

  // Configuration block for EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/opensearch-service/pricing/). Detailed below.
  ebsOptions?: opensearch_DomainEbsOptions;

  // Configuration block for node-to-node encryption options. Detailed below.
  nodeToNodeEncryption?: opensearch_DomainNodeToNodeEncryption;

  // IAM policy document specifying the access policies for the domain.
  accessPolicies?: string;

  // Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing the provider to want to recreate your OpenSearch domain on every apply.
  advancedOptions?: Map<string, string>;

  /*
Either `Elasticsearch_X.Y` or `OpenSearch_X.Y` to specify the engine version for the Amazon OpenSearch Service domain. For example, `OpenSearch_1.0` or `Elasticsearch_7.9`.
See [Creating and managing Amazon OpenSearch Service domains](http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains).
Defaults to the lastest version of OpenSearch.
*/
  engineVersion?: string;

  // Configuration to add Off Peak update options. ([documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html)). Detailed below.
  offPeakWindowOptions?: opensearch_DomainOffPeakWindowOptions;

  // Configuration block for the cluster of the domain. Detailed below.
  clusterConfig?: opensearch_DomainClusterConfig;

  /*
Name of the domain.

The following arguments are optional:
*/
  domainName?: string;

  // Software update options for the domain. Detailed below.
  softwareUpdateOptions?: opensearch_DomainSoftwareUpdateOptions;

  // Configuration block for VPC related options. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html)). Detailed below.
  vpcOptions?: opensearch_DomainVpcOptions;

  // Configuration block for authenticating dashboard with Cognito. Detailed below.
  cognitoOptions?: opensearch_DomainCognitoOptions;

  // Configuration block for snapshot related options. Detailed below. DEPRECATED. For domains running OpenSearch 5.3 and later, Amazon OpenSearch takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions, OpenSearch takes daily automated snapshots.
  snapshotOptions?: opensearch_DomainSnapshotOptions;
}
export class Domain extends DS_Resource {
  // ARN of the domain.
  public arn?: string;

  // Configuration block for encrypt at rest options. Only available for [certain instance types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html). Detailed below.
  public encryptAtRest?: opensearch_DomainEncryptAtRest;

  // Configuration block for node-to-node encryption options. Detailed below.
  public nodeToNodeEncryption?: opensearch_DomainNodeToNodeEncryption;

  // Software update options for the domain. Detailed below.
  public softwareUpdateOptions?: opensearch_DomainSoftwareUpdateOptions;

  // Domain-specific endpoint used to submit index, search, and data upload requests.
  public endpoint?: string;

  // V2 domain endpoint that works with both IPv4 and IPv6 addresses, used to submit index, search, and data upload requests.
  public endpointV2?: string;

  // Dual stack hosted zone ID for the domain.
  public domainEndpointV2HostedZoneId?: string;

  // Unique identifier for the domain.
  public domainId?: string;

  // Configuration block for EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/opensearch-service/pricing/). Detailed below.
  public ebsOptions?: opensearch_DomainEbsOptions;

  // Configuration block for domain endpoint HTTP(S) related options. Detailed below.
  public domainEndpointOptions?: opensearch_DomainDomainEndpointOptions;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Configuration block for VPC related options. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html)). Detailed below.
  public vpcOptions?: opensearch_DomainVpcOptions;

  // Configuration block for [fine-grained access control](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html). Detailed below.
  public advancedSecurityOptions?: opensearch_DomainAdvancedSecurityOptions;

  // V2 domain endpoint for Dashboard that works with both IPv4 and IPv6 addresses, without https scheme.
  public dashboardEndpointV2?: string;

  // The IP address type for the endpoint. Valid values are `ipv4` and `dualstack`.
  public ipAddressType?: string;

  // (--Deprecated--) Domain-specific endpoint for kibana without https scheme. Use the `dashboard_endpoint` attribute instead.
  public kibanaEndpoint?: string;

  // Configuration block for snapshot related options. Detailed below. DEPRECATED. For domains running OpenSearch 5.3 and later, Amazon OpenSearch takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions, OpenSearch takes daily automated snapshots.
  public snapshotOptions?: opensearch_DomainSnapshotOptions;

  // IAM policy document specifying the access policies for the domain.
  public accessPolicies?: string;

  // Configuration block for authenticating dashboard with Cognito. Detailed below.
  public cognitoOptions?: opensearch_DomainCognitoOptions;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  /*
Either `Elasticsearch_X.Y` or `OpenSearch_X.Y` to specify the engine version for the Amazon OpenSearch Service domain. For example, `OpenSearch_1.0` or `Elasticsearch_7.9`.
See [Creating and managing Amazon OpenSearch Service domains](http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains).
Defaults to the lastest version of OpenSearch.
*/
  public engineVersion?: string;

  // Configuration block for publishing slow and application logs to CloudWatch Logs. This block can be declared multiple times, for each log_type, within the same resource. Detailed below.
  public logPublishingOptions?: Array<opensearch_DomainLogPublishingOption>;

  // Configuration to add Off Peak update options. ([documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html)). Detailed below.
  public offPeakWindowOptions?: opensearch_DomainOffPeakWindowOptions;

  // Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing the provider to want to recreate your OpenSearch domain on every apply.
  public advancedOptions?: Map<string, string>;

  // Configuration block for the Auto-Tune options of the domain. Detailed below.
  public autoTuneOptions?: opensearch_DomainAutoTuneOptions;

  // Configuration block for the cluster of the domain. Detailed below.
  public clusterConfig?: opensearch_DomainClusterConfig;

  // Domain-specific endpoint for Dashboard without https scheme.
  public dashboardEndpoint?: string;

  /*
Name of the domain.

The following arguments are optional:
*/
  public domainName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'nodeToNodeEncryption',
        'Configuration block for node-to-node encryption options. Detailed below.',
        () => opensearch_DomainNodeToNodeEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'engineVersion',
        'Either `Elasticsearch_X.Y` or `OpenSearch_X.Y` to specify the engine version for the Amazon OpenSearch Service domain. For example, `OpenSearch_1.0` or `Elasticsearch_7.9`.\nSee [Creating and managing Amazon OpenSearch Service domains](http://docs.aws.amazon.com/opensearch-service/latest/developerguide/createupdatedomains.html#createdomains).\nDefaults to the lastest version of OpenSearch.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'softwareUpdateOptions',
        'Software update options for the domain. Detailed below.',
        () => opensearch_DomainSoftwareUpdateOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'ebsOptions',
        'Configuration block for EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/opensearch-service/pricing/). Detailed below.',
        () => opensearch_DomainEbsOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'accessPolicies',
        'IAM policy document specifying the access policies for the domain.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'offPeakWindowOptions',
        'Configuration to add Off Peak update options. ([documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/off-peak.html)). Detailed below.',
        () => opensearch_DomainOffPeakWindowOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clusterConfig',
        'Configuration block for the cluster of the domain. Detailed below.',
        () => opensearch_DomainClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'encryptAtRest',
        'Configuration block for encrypt at rest options. Only available for [certain instance types](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/encryption-at-rest.html). Detailed below.',
        () => opensearch_DomainEncryptAtRest_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'advancedOptions',
        'Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing the provider to want to recreate your OpenSearch domain on every apply.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'domainName',
        'Name of the domain.\n\nThe following arguments are optional:',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'vpcOptions',
        'Configuration block for VPC related options. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/vpc.html)). Detailed below.',
        () => opensearch_DomainVpcOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        'snapshotOptions',
        'Configuration block for snapshot related options. Detailed below. DEPRECATED. For domains running OpenSearch 5.3 and later, Amazon OpenSearch takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions, OpenSearch takes daily automated snapshots.',
        () => opensearch_DomainSnapshotOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ipAddressType',
        'The IP address type for the endpoint. Valid values are `ipv4` and `dualstack`.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'logPublishingOptions',
        'Configuration block for publishing slow and application logs to CloudWatch Logs. This block can be declared multiple times, for each log_type, within the same resource. Detailed below.',
        () => opensearch_DomainLogPublishingOption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'advancedSecurityOptions',
        'Configuration block for [fine-grained access control](https://docs.aws.amazon.com/opensearch-service/latest/developerguide/fgac.html). Detailed below.',
        () => opensearch_DomainAdvancedSecurityOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'domainEndpointOptions',
        'Configuration block for domain endpoint HTTP(S) related options. Detailed below.',
        () => opensearch_DomainDomainEndpointOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'autoTuneOptions',
        'Configuration block for the Auto-Tune options of the domain. Detailed below.',
        () => opensearch_DomainAutoTuneOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'cognitoOptions',
        'Configuration block for authenticating dashboard with Cognito. Detailed below.',
        () => opensearch_DomainCognitoOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
