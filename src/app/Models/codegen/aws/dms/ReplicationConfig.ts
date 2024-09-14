import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  dms_ReplicationConfigComputeConfig,
  dms_ReplicationConfigComputeConfig_GetTypes,
} from "../types/dms_ReplicationConfigComputeConfig";

export interface ReplicationConfigArgs {
  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Unique identifier that you want to use to create the config.
  replicationConfigIdentifier?: string;

  // Unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see [Fine-grained access control using resource names and tags](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess)
  resourceIdentifier?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
  sourceEndpointArn?: string;

  // JSON settings for specifying supplemental data. For more information see [Specifying supplemental data for task settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html)
  supplementalSettings?: string;

  // An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
  tableMappings?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
  targetEndpointArn?: string;

  // Configuration block for provisioning an DMS Serverless replication.
  computeConfig?: dms_ReplicationConfigComputeConfig;

  // An escaped JSON string that are used to provision this replication configuration. For example, [Change processing tuning settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html)
  replicationSettings?: string;

  // The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
  replicationType?: string;

  // Whether to run or stop the serverless replication, default is false.
  startReplication?: boolean;
}
export class ReplicationConfig extends DS_Resource {
  // An escaped JSON string that are used to provision this replication configuration. For example, [Change processing tuning settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html)
  public replicationSettings?: string;

  // An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)
  public tableMappings?: string;

  // A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.
  public targetEndpointArn?: string;

  // Unique identifier that you want to use to create the config.
  public replicationConfigIdentifier?: string;

  // Configuration block for provisioning an DMS Serverless replication.
  public computeConfig?: dms_ReplicationConfigComputeConfig;

  // The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.
  public replicationType?: string;

  // Unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see [Fine-grained access control using resource names and tags](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess)
  public resourceIdentifier?: string;

  // The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.
  public sourceEndpointArn?: string;

  // Whether to run or stop the serverless replication, default is false.
  public startReplication?: boolean;

  // JSON settings for specifying supplemental data. For more information see [Specifying supplemental data for task settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html)
  public supplementalSettings?: string;

  // The Amazon Resource Name (ARN) for the serverless replication config.
  public arn?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "supplementalSettings",
        "JSON settings for specifying supplemental data. For more information see [Specifying supplemental data for task settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "targetEndpointArn",
        "The Amazon Resource Name (ARN) string that uniquely identifies the target endpoint.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "computeConfig",
        "Configuration block for provisioning an DMS Serverless replication.",
        () => dms_ReplicationConfigComputeConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "startReplication",
        "Whether to run or stop the serverless replication, default is false.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationConfigIdentifier",
        "Unique identifier that you want to use to create the config.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "resourceIdentifier",
        "Unique value or name that you set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource. For more information, see [Fine-grained access control using resource names and tags](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.FineGrainedAccess)",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "tableMappings",
        "An escaped JSON string that contains the table mappings. For information on table mapping see [Using Table Mapping with an AWS Database Migration Service Task to Select and Filter Data](http://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html)",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationSettings",
        "An escaped JSON string that are used to provision this replication configuration. For example, [Change processing tuning settings](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.ChangeProcessingTuning.html)",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "replicationType",
        "The migration type. Can be one of `full-load | cdc | full-load-and-cdc`.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceEndpointArn",
        "The Amazon Resource Name (ARN) string that uniquely identifies the source endpoint.",
        () => [],
        true,
        false,
      ),
    ];
  }
}
