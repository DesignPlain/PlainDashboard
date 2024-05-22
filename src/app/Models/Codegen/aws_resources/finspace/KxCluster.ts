import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  finspace_KxClusterTickerplantLogConfiguration,
  finspace_KxClusterTickerplantLogConfiguration_GetTypes,
} from "../types/finspace_KxClusterTickerplantLogConfiguration";
import {
  finspace_KxClusterCode,
  finspace_KxClusterCode_GetTypes,
} from "../types/finspace_KxClusterCode";
import {
  finspace_KxClusterDatabase,
  finspace_KxClusterDatabase_GetTypes,
} from "../types/finspace_KxClusterDatabase";
import {
  finspace_KxClusterVpcConfiguration,
  finspace_KxClusterVpcConfiguration_GetTypes,
} from "../types/finspace_KxClusterVpcConfiguration";
import {
  finspace_KxClusterCacheStorageConfiguration,
  finspace_KxClusterCacheStorageConfiguration_GetTypes,
} from "../types/finspace_KxClusterCacheStorageConfiguration";
import {
  finspace_KxClusterSavedownStorageConfiguration,
  finspace_KxClusterSavedownStorageConfiguration_GetTypes,
} from "../types/finspace_KxClusterSavedownStorageConfiguration";
import {
  finspace_KxClusterScalingGroupConfiguration,
  finspace_KxClusterScalingGroupConfiguration_GetTypes,
} from "../types/finspace_KxClusterScalingGroupConfiguration";
import {
  finspace_KxClusterAutoScalingConfiguration,
  finspace_KxClusterAutoScalingConfiguration_GetTypes,
} from "../types/finspace_KxClusterAutoScalingConfiguration";
import {
  finspace_KxClusterCapacityConfiguration,
  finspace_KxClusterCapacityConfiguration_GetTypes,
} from "../types/finspace_KxClusterCapacityConfiguration";

export interface KxClusterArgs {
  // List of key-value pairs to make available inside the cluster.
  commandLineArguments?: Map<string, string>;

  // KX database that will be available for querying. Defined below.
  databases?: Array<finspace_KxClusterDatabase>;

  // Version of FinSpace Managed kdb to run.
  releaseLabel?: string;

  // A configuration to store Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant , the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path.
  tickerplantLogConfigurations?: Array<finspace_KxClusterTickerplantLogConfiguration>;

  // Structure for the metadata of a cluster. Includes information like the CPUs needed, memory of instances, and number of instances. See capacity_configuration.
  capacityConfiguration?: finspace_KxClusterCapacityConfiguration;

  // An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
  executionRole?: string;

  /*
Configuration details about the network where the Privatelink endpoint of the cluster resides. See vpc_configuration.

The following arguments are optional:
*/
  vpcConfiguration?: finspace_KxClusterVpcConfiguration;

  // The availability zone identifiers for the requested regions. Required when `az_mode` is set to SINGLE.
  availabilityZoneId?: string;

  // Description of the cluster.
  description?: string;

  // Path to Q program that will be run at launch of a cluster. This is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.
  initializationScript?: string;

  /*
Type of KDB database. The following types are available:
- HDB - Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed KX databases mounted to the cluster.
- RDB - Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the `savedownStorageConfiguration` parameter.
- GATEWAY - A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.
- GP - A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only `SINGLE` AZ mode.
- Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.
*/
  type?: string;

  // Configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. See cache_storage_configuration.
  cacheStorageConfigurations?: Array<finspace_KxClusterCacheStorageConfiguration>;

  /*
The number of availability zones you want to assign per cluster. This can be one of the following:
- SINGLE - Assigns one availability zone per cluster.
- MULTI - Assigns all the availability zones per cluster.
*/
  azMode?: string;

  // Details of the custom code that you want to use inside a cluster when analyzing data. Consists of the S3 source bucket, location, object version, and the relative path from where the custom code is loaded into the cluster. See code.
  code?: finspace_KxClusterCode;

  // Unique identifier for the KX environment.
  environmentId?: string;

  // Unique name for the cluster that you want to create.
  name?: string;

  // Size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose `type` as RDB. All the data written to this storage space is lost when the cluster node is restarted. See savedown_storage_configuration.
  savedownStorageConfiguration?: finspace_KxClusterSavedownStorageConfiguration;

  // The structure that stores the configuration details of a scaling group.
  scalingGroupConfiguration?: finspace_KxClusterScalingGroupConfiguration;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // Configuration based on which FinSpace will scale in or scale out nodes in your cluster. See auto_scaling_configuration.
  autoScalingConfiguration?: finspace_KxClusterAutoScalingConfiguration;
}
export class KxCluster extends Resource {
  // Unique name for the cluster that you want to create.
  public name?: string;

  // Version of FinSpace Managed kdb to run.
  public releaseLabel?: string;

  /*
Configuration details about the network where the Privatelink endpoint of the cluster resides. See vpc_configuration.

The following arguments are optional:
*/
  public vpcConfiguration?: finspace_KxClusterVpcConfiguration;

  // Structure for the metadata of a cluster. Includes information like the CPUs needed, memory of instances, and number of instances. See capacity_configuration.
  public capacityConfiguration?: finspace_KxClusterCapacityConfiguration;

  // Details of the custom code that you want to use inside a cluster when analyzing data. Consists of the S3 source bucket, location, object version, and the relative path from where the custom code is loaded into the cluster. See code.
  public code?: finspace_KxClusterCode;

  // List of key-value pairs to make available inside the cluster.
  public commandLineArguments?: Map<string, string>;

  // KX database that will be available for querying. Defined below.
  public databases?: Array<finspace_KxClusterDatabase>;

  // Path to Q program that will be run at launch of a cluster. This is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.
  public initializationScript?: string;

  // Last timestamp at which the cluster was updated in FinSpace. Value determined as epoch time in seconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000.
  public lastModifiedTimestamp?: string;

  // The structure that stores the configuration details of a scaling group.
  public scalingGroupConfiguration?: finspace_KxClusterScalingGroupConfiguration;

  /*
Type of KDB database. The following types are available:
- HDB - Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed KX databases mounted to the cluster.
- RDB - Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the `savedownStorageConfiguration` parameter.
- GATEWAY - A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.
- GP - A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only `SINGLE` AZ mode.
- Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.
*/
  public type?: string;

  // Amazon Resource Name (ARN) identifier of the KX cluster.
  public arn?: string;

  // The availability zone identifiers for the requested regions. Required when `az_mode` is set to SINGLE.
  public availabilityZoneId?: string;

  // Description of the cluster.
  public description?: string;

  // An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.
  public executionRole?: string;

  //
  public status?: string;

  //
  public statusReason?: string;

  // Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  /*
The number of availability zones you want to assign per cluster. This can be one of the following:
- SINGLE - Assigns one availability zone per cluster.
- MULTI - Assigns all the availability zones per cluster.
*/
  public azMode?: string;

  // Timestamp at which the cluster is created in FinSpace. Value determined as epoch time in seconds. For example, the value for Monday, November 1, 2021 12:00:00 PM UTC is specified as 1635768000.
  public createdTimestamp?: string;

  // Unique identifier for the KX environment.
  public environmentId?: string;

  // Size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose `type` as RDB. All the data written to this storage space is lost when the cluster node is restarted. See savedown_storage_configuration.
  public savedownStorageConfiguration?: finspace_KxClusterSavedownStorageConfiguration;

  // Configuration based on which FinSpace will scale in or scale out nodes in your cluster. See auto_scaling_configuration.
  public autoScalingConfiguration?: finspace_KxClusterAutoScalingConfiguration;

  // Configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. See cache_storage_configuration.
  public cacheStorageConfigurations?: Array<finspace_KxClusterCacheStorageConfiguration>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // A configuration to store Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant , the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path.
  public tickerplantLogConfigurations?: Array<finspace_KxClusterTickerplantLogConfiguration>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "azMode",
        "The number of availability zones you want to assign per cluster. This can be one of the following:\n* SINGLE - Assigns one availability zone per cluster.\n* MULTI - Assigns all the availability zones per cluster.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "code",
        "Details of the custom code that you want to use inside a cluster when analyzing data. Consists of the S3 source bucket, location, object version, and the relative path from where the custom code is loaded into the cluster. See code.",
        finspace_KxClusterCode_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "releaseLabel",
        "Version of FinSpace Managed kdb to run.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "initializationScript",
        "Path to Q program that will be run at launch of a cluster. This is a relative path within .zip file that contains the custom code, which will be loaded on the cluster. It must include the file name itself. For example, somedir/init.q.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scalingGroupConfiguration",
        "The structure that stores the configuration details of a scaling group.",
        finspace_KxClusterScalingGroupConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "Key-value mapping of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "capacityConfiguration",
        "Structure for the metadata of a cluster. Includes information like the CPUs needed, memory of instances, and number of instances. See capacity_configuration.",
        finspace_KxClusterCapacityConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "savedownStorageConfiguration",
        "Size and type of the temporary storage that is used to hold data during the savedown process. This parameter is required when you choose `type` as RDB. All the data written to this storage space is lost when the cluster node is restarted. See savedown_storage_configuration.",
        finspace_KxClusterSavedownStorageConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "vpcConfiguration",
        "Configuration details about the network where the Privatelink endpoint of the cluster resides. See vpc_configuration.\n\nThe following arguments are optional:",
        finspace_KxClusterVpcConfiguration_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "environmentId",
        "Unique identifier for the KX environment.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "tickerplantLogConfigurations",
        "A configuration to store Tickerplant logs. It consists of a list of volumes that will be mounted to your cluster. For the cluster type Tickerplant , the location of the TP volume on the cluster will be available by using the global variable .aws.tp_log_path.",
        finspace_KxClusterTickerplantLogConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "executionRole",
        "An IAM role that defines a set of permissions associated with a cluster. These permissions are assumed when a cluster attempts to access another cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "availabilityZoneId",
        "The availability zone identifiers for the requested regions. Required when `az_mode` is set to SINGLE.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "Description of the cluster.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "type",
        "Type of KDB database. The following types are available:\n* HDB - Historical Database. The data is only accessible with read-only permissions from one of the FinSpace managed KX databases mounted to the cluster.\n* RDB - Realtime Database. This type of database captures all the data from a ticker plant and stores it in memory until the end of day, after which it writes all of its data to a disk and reloads the HDB. This cluster type requires local storage for temporary storage of data during the savedown process. If you specify this field in your request, you must provide the `savedownStorageConfiguration` parameter.\n* GATEWAY - A gateway cluster allows you to access data across processes in kdb systems. It allows you to create your own routing logic using the initialization scripts and custom code. This type of cluster does not require a  writable local storage.\n* GP - A general purpose cluster allows you to quickly iterate on code during development by granting greater access to system commands and enabling a fast reload of custom code. This cluster type can optionally mount databases including cache and savedown storage. For this cluster type, the node count is fixed at 1. It does not support autoscaling and supports only `SINGLE` AZ mode.\n* Tickerplant – A tickerplant cluster allows you to subscribe to feed handlers based on IAM permissions. It can publish to RDBs, other Tickerplants, and real-time subscribers (RTS). Tickerplants can persist messages to log, which is readable by any RDB environment. It supports only single-node that is only one kdb process.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "cacheStorageConfigurations",
        "Configurations for a read only cache storage associated with a cluster. This cache will be stored as an FSx Lustre that reads from the S3 store. See cache_storage_configuration.",
        finspace_KxClusterCacheStorageConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "Unique name for the cluster that you want to create.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "autoScalingConfiguration",
        "Configuration based on which FinSpace will scale in or scale out nodes in your cluster. See auto_scaling_configuration.",
        finspace_KxClusterAutoScalingConfiguration_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "commandLineArguments",
        "List of key-value pairs to make available inside the cluster.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "databases",
        "KX database that will be available for querying. Defined below.",
        finspace_KxClusterDatabase_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
