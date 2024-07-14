import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  elasticsearch_DomainAdvancedSecurityOptions,
  elasticsearch_DomainAdvancedSecurityOptions_GetTypes,
} from "../types/elasticsearch_DomainAdvancedSecurityOptions";
import {
  elasticsearch_DomainVpcOptions,
  elasticsearch_DomainVpcOptions_GetTypes,
} from "../types/elasticsearch_DomainVpcOptions";
import {
  elasticsearch_DomainClusterConfig,
  elasticsearch_DomainClusterConfig_GetTypes,
} from "../types/elasticsearch_DomainClusterConfig";
import {
  elasticsearch_DomainNodeToNodeEncryption,
  elasticsearch_DomainNodeToNodeEncryption_GetTypes,
} from "../types/elasticsearch_DomainNodeToNodeEncryption";
import {
  elasticsearch_DomainCognitoOptions,
  elasticsearch_DomainCognitoOptions_GetTypes,
} from "../types/elasticsearch_DomainCognitoOptions";
import {
  elasticsearch_DomainEbsOptions,
  elasticsearch_DomainEbsOptions_GetTypes,
} from "../types/elasticsearch_DomainEbsOptions";
import {
  elasticsearch_DomainLogPublishingOption,
  elasticsearch_DomainLogPublishingOption_GetTypes,
} from "../types/elasticsearch_DomainLogPublishingOption";
import {
  elasticsearch_DomainAutoTuneOptions,
  elasticsearch_DomainAutoTuneOptions_GetTypes,
} from "../types/elasticsearch_DomainAutoTuneOptions";
import {
  elasticsearch_DomainDomainEndpointOptions,
  elasticsearch_DomainDomainEndpointOptions_GetTypes,
} from "../types/elasticsearch_DomainDomainEndpointOptions";
import {
  elasticsearch_DomainEncryptAtRest,
  elasticsearch_DomainEncryptAtRest_GetTypes,
} from "../types/elasticsearch_DomainEncryptAtRest";
import {
  elasticsearch_DomainSnapshotOptions,
  elasticsearch_DomainSnapshotOptions_GetTypes,
} from "../types/elasticsearch_DomainSnapshotOptions";

export interface DomainArgs {
  // Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing the provider to want to recreate your Elasticsearch domain on every apply.
  advancedOptions?: Map<string, string>;

  // Configuration block for [fine-grained access control](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/fgac.html). Detailed below.
  advancedSecurityOptions?: elasticsearch_DomainAdvancedSecurityOptions;

  /*
Name of the domain.

The following arguments are optional:
*/
  domainName?: string;

  // Configuration block for VPC related options. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)). Detailed below.
  vpcOptions?: elasticsearch_DomainVpcOptions;

  // IAM policy document specifying the access policies for the domain.
  accessPolicies?: string;

  // Configuration block for the Auto-Tune options of the domain. Detailed below.
  autoTuneOptions?: elasticsearch_DomainAutoTuneOptions;

  // Configuration block for the cluster of the domain. Detailed below.
  clusterConfig?: elasticsearch_DomainClusterConfig;

  // Configuration block for domain endpoint HTTP(S) related options. Detailed below.
  domainEndpointOptions?: elasticsearch_DomainDomainEndpointOptions;

  // Configuration block for node-to-node encryption options. Detailed below.
  nodeToNodeEncryption?: elasticsearch_DomainNodeToNodeEncryption;

  // Configuration block for authenticating Kibana with Cognito. Detailed below.
  cognitoOptions?: elasticsearch_DomainCognitoOptions;

  // Version of Elasticsearch to deploy. Defaults to `1.5`.
  elasticsearchVersion?: string;

  // Configuration block for encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). Detailed below.
  encryptAtRest?: elasticsearch_DomainEncryptAtRest;

  // Configuration block for snapshot related options. Detailed below. DEPRECATED. For domains running Elasticsearch 5.3 and later, Amazon ES takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions of Elasticsearch, Amazon ES takes daily automated snapshots.
  snapshotOptions?: elasticsearch_DomainSnapshotOptions;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration block for EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). Detailed below.
  ebsOptions?: elasticsearch_DomainEbsOptions;

  // Configuration block for publishing slow and application logs to CloudWatch Logs. This block can be declared multiple times, for each log_type, within the same resource. Detailed below.
  logPublishingOptions?: Array<elasticsearch_DomainLogPublishingOption>;
}
export class Domain extends Resource {
  // Unique identifier for the domain.
  public domainId?: string;

  // Configuration block for EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). Detailed below.
  public ebsOptions?: elasticsearch_DomainEbsOptions;

  // Configuration block for encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). Detailed below.
  public encryptAtRest?: elasticsearch_DomainEncryptAtRest;

  // Configuration block for [fine-grained access control](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/fgac.html). Detailed below.
  public advancedSecurityOptions?: elasticsearch_DomainAdvancedSecurityOptions;

  // Configuration block for the Auto-Tune options of the domain. Detailed below.
  public autoTuneOptions?: elasticsearch_DomainAutoTuneOptions;

  // Version of Elasticsearch to deploy. Defaults to `1.5`.
  public elasticsearchVersion?: string;

  // Configuration block for node-to-node encryption options. Detailed below.
  public nodeToNodeEncryption?: elasticsearch_DomainNodeToNodeEncryption;

  // Configuration block for snapshot related options. Detailed below. DEPRECATED. For domains running Elasticsearch 5.3 and later, Amazon ES takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions of Elasticsearch, Amazon ES takes daily automated snapshots.
  public snapshotOptions?: elasticsearch_DomainSnapshotOptions;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing the provider to want to recreate your Elasticsearch domain on every apply.
  public advancedOptions?: Map<string, string>;

  // Configuration block for authenticating Kibana with Cognito. Detailed below.
  public cognitoOptions?: elasticsearch_DomainCognitoOptions;

  // Configuration block for domain endpoint HTTP(S) related options. Detailed below.
  public domainEndpointOptions?: elasticsearch_DomainDomainEndpointOptions;

  // Domain-specific endpoint used to submit index, search, and data upload requests.
  public endpoint?: string;

  // Domain-specific endpoint for kibana without https scheme.
  public kibanaEndpoint?: string;

  /*
Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
- `vpc_options.0.availability_zones` - If the domain was created inside a VPC, the names of the availability zones the configured `subnet_ids` were created inside.
- `vpc_options.0.vpc_id` - If the domain was created inside a VPC, the ID of the VPC.
*/
  public tagsAll?: Map<string, string>;

  // ARN of the domain.
  public arn?: string;

  // Configuration block for the cluster of the domain. Detailed below.
  public clusterConfig?: elasticsearch_DomainClusterConfig;

  /*
Name of the domain.

The following arguments are optional:
*/
  public domainName?: string;

  // Configuration block for publishing slow and application logs to CloudWatch Logs. This block can be declared multiple times, for each log_type, within the same resource. Detailed below.
  public logPublishingOptions?: Array<elasticsearch_DomainLogPublishingOption>;

  // Configuration block for VPC related options. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)). Detailed below.
  public vpcOptions?: elasticsearch_DomainVpcOptions;

  // IAM policy document specifying the access policies for the domain.
  public accessPolicies?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "ebsOptions",
        "Configuration block for EBS related options, may be required based on chosen [instance size](https://aws.amazon.com/elasticsearch-service/pricing/). Detailed below.",
        elasticsearch_DomainEbsOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcOptions",
        "Configuration block for VPC related options. Adding or removing this configuration forces a new resource ([documentation](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-vpc-limitations)). Detailed below.",
        elasticsearch_DomainVpcOptions_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "accessPolicies",
        "IAM policy document specifying the access policies for the domain.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "clusterConfig",
        "Configuration block for the cluster of the domain. Detailed below.",
        elasticsearch_DomainClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "cognitoOptions",
        "Configuration block for authenticating Kibana with Cognito. Detailed below.",
        elasticsearch_DomainCognitoOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "snapshotOptions",
        "Configuration block for snapshot related options. Detailed below. DEPRECATED. For domains running Elasticsearch 5.3 and later, Amazon ES takes hourly automated snapshots, making this setting irrelevant. For domains running earlier versions of Elasticsearch, Amazon ES takes daily automated snapshots.",
        elasticsearch_DomainSnapshotOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "advancedOptions",
        "Key-value string pairs to specify advanced configuration options. Note that the values for these configuration options must be strings (wrapped in quotes) or they may be wrong and cause a perpetual diff, causing the provider to want to recreate your Elasticsearch domain on every apply.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "domainName",
        "Name of the domain.\n\nThe following arguments are optional:",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoTuneOptions",
        "Configuration block for the Auto-Tune options of the domain. Detailed below.",
        elasticsearch_DomainAutoTuneOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "elasticsearchVersion",
        "Version of Elasticsearch to deploy. Defaults to `1.5`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "logPublishingOptions",
        "Configuration block for publishing slow and application logs to CloudWatch Logs. This block can be declared multiple times, for each log_type, within the same resource. Detailed below.",
        elasticsearch_DomainLogPublishingOption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "advancedSecurityOptions",
        "Configuration block for [fine-grained access control](https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/fgac.html). Detailed below.",
        elasticsearch_DomainAdvancedSecurityOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "nodeToNodeEncryption",
        "Configuration block for node-to-node encryption options. Detailed below.",
        elasticsearch_DomainNodeToNodeEncryption_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "encryptAtRest",
        "Configuration block for encrypt at rest options. Only available for [certain instance types](http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/aes-supported-instance-types.html). Detailed below.",
        elasticsearch_DomainEncryptAtRest_GetTypes(),
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
        InputType.Object,
        "domainEndpointOptions",
        "Configuration block for domain endpoint HTTP(S) related options. Detailed below.",
        elasticsearch_DomainDomainEndpointOptions_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
