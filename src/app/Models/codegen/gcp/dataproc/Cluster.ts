import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  dataproc_ClusterVirtualClusterConfig,
  dataproc_ClusterVirtualClusterConfig_GetTypes,
} from '../types/dataproc_ClusterVirtualClusterConfig';
import {
  dataproc_ClusterClusterConfig,
  dataproc_ClusterClusterConfig_GetTypes,
} from '../types/dataproc_ClusterClusterConfig';

export interface ClusterArgs {
  /*
The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a
terraform apply
*/
  gracefulDecommissionTimeout?: string;

  /*
The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  name?: string;

  /*
The ID of the project in which the `cluster` will exist. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
The region in which the cluster and associated nodes will be created in.
Defaults to `global`.
*/
  region?: string;

  /*
Allows you to configure a virtual Dataproc on GKE cluster.
Structure defined below.
*/
  virtualClusterConfig?: dataproc_ClusterVirtualClusterConfig;

  /*
Allows you to configure various aspects of the cluster.
Structure defined below.
*/
  clusterConfig?: dataproc_ClusterClusterConfig;
}
export class Cluster extends DS_Resource {
  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  public name?: string;

  /*
The ID of the project in which the `cluster` will exist. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
The region in which the cluster and associated nodes will be created in.
Defaults to `global`.
*/
  public region?: string;

  /*
Allows you to configure a virtual Dataproc on GKE cluster.
Structure defined below.
*/
  public virtualClusterConfig?: dataproc_ClusterVirtualClusterConfig;

  /*
Allows you to configure various aspects of the cluster.
Structure defined below.
*/
  public clusterConfig?: dataproc_ClusterClusterConfig;

  /*
The list of labels (key/value pairs) to be applied to
instances in the cluster. GCP generates some itself including `goog-dataproc-cluster-name`
which is the name of the cluster.
*/
  public effectiveLabels?: Map<string, string>;

  /*
The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a
terraform apply
*/
  public gracefulDecommissionTimeout?: string;

  /*
The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        'virtualClusterConfig',
        'Allows you to configure a virtual Dataproc on GKE cluster.\nStructure defined below.',
        () => dataproc_ClusterVirtualClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'clusterConfig',
        'Allows you to configure various aspects of the cluster.\nStructure defined below.',
        () => dataproc_ClusterClusterConfig_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'gracefulDecommissionTimeout',
        'The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a\nterraform apply',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        'labels',
        "The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer\nto the field 'effective_labels' for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'name',
        'The name of the cluster, unique within the project and\nzone.\n\n- - -',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the `cluster` will exist. If it\nis not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'region',
        'The region in which the cluster and associated nodes will be created in.\nDefaults to `global`.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
