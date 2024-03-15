import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { ClusterVirtualClusterConfig } from "../types/ClusterVirtualClusterConfig";
import { ClusterClusterConfig } from "../types/ClusterClusterConfig";

export interface ClusterArgs {
  /*
The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  Name?: string;

  /*
The ID of the project in which the `cluster` will exist. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
The region in which the cluster and associated nodes will be created in.
Defaults to `global`.
*/
  Region?: string;

  /*
Allows you to configure a virtual Dataproc on GKE cluster.
Structure defined below.
*/
  VirtualClusterConfig?: ClusterVirtualClusterConfig;

  /*
Allows you to configure various aspects of the cluster.
Structure defined below.
*/
  ClusterConfig?: ClusterClusterConfig;

  /*
The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a
terraform apply
*/
  GracefulDecommissionTimeout?: string;
}
export class Cluster extends Resource {
  /*
Allows you to configure various aspects of the cluster.
Structure defined below.
*/
  public ClusterConfig?: ClusterClusterConfig;

  /*
The list of labels (key/value pairs) to be applied to
instances in the cluster. GCP generates some itself including `goog-dataproc-cluster-name`
which is the name of the cluster.
*/
  public EffectiveLabels?: Map<string, string>;

  /*
The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a
terraform apply
*/
  public GracefulDecommissionTimeout?: string;

  /*
The name of the cluster, unique within the project and
zone.

- - -
*/
  public Name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  /*
The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.
--Note--: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer
to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  /*
The ID of the project in which the `cluster` will exist. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The region in which the cluster and associated nodes will be created in.
Defaults to `global`.
*/
  public Region?: string;

  /*
Allows you to configure a virtual Dataproc on GKE cluster.
Structure defined below.
*/
  public VirtualClusterConfig?: ClusterVirtualClusterConfig;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "VirtualClusterConfig",
        "Allows you to configure a virtual Dataproc on GKE cluster.\nStructure defined below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ClusterConfig",
        "Allows you to configure various aspects of the cluster.\nStructure defined below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "GracefulDecommissionTimeout",
        "The timeout duration which allows graceful decomissioning when you change the number of worker nodes directly through a\nterraform apply",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "The list of the labels (key/value pairs) configured on the resource and to be applied to instances in the cluster.\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration. Please refer\nto the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name of the cluster, unique within the project and\nzone.\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the `cluster` will exist. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Region",
        "The region in which the cluster and associated nodes will be created in.\nDefaults to `global`.",
      ),
    ];
  }
}
