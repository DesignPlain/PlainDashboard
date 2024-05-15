import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface Dataproc_ClusterClusterConfigSoftwareConfig {
  /*
The Cloud Dataproc image version to use
for the cluster - this controls the sets of software versions
installed onto the nodes when you create clusters. If not specified, defaults to the
latest version. For a list of valid versions see
[Cloud Dataproc versions](https://cloud.google.com/dataproc/docs/concepts/dataproc-versions)
*/
  ImageVersion?: string;

  /*
The set of optional components to activate on the cluster. See [Available Optional Components](https://cloud.google.com/dataproc/docs/concepts/components/overview#available_optional_components).

- - -
*/
  OptionalComponents?: Array<string>;

  /*
A list of override and additional properties (key/value pairs)
used to modify various aspects of the common configuration files used when creating
a cluster. For a list of valid properties please see
[Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties)
*/
  OverrideProperties?: Map<string, string>;

  /*
The properties to set on daemon config files. Property keys are specified in prefix:property format, 
for example spark:spark.kubernetes.container.image.
*/
  Properties?: Map<string, InputType.String>;
}

export function Dataproc_ClusterClusterConfigSoftwareConfig_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Map,
      "Properties",
      "The properties to set on daemon config files. Property keys are specified in prefix:property format, \nfor example spark:spark.kubernetes.container.image.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "ImageVersion",
      "The Cloud Dataproc image version to use\nfor the cluster - this controls the sets of software versions\ninstalled onto the nodes when you create clusters. If not specified, defaults to the\nlatest version. For a list of valid versions see\n[Cloud Dataproc versions](https://cloud.google.com/dataproc/docs/concepts/dataproc-versions)",
      [],
      false,
      true,
    ),
    new DynamicUIProps(
      InputType.Array,
      "OptionalComponents",
      "The set of optional components to activate on the cluster. See [Available Optional Components](https://cloud.google.com/dataproc/docs/concepts/components/overview#available_optional_components).\n\n- - -",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "OverrideProperties",
      "A list of override and additional properties (key/value pairs)\nused to modify various aspects of the common configuration files used when creating\na cluster. For a list of valid properties please see\n[Cluster properties](https://cloud.google.com/dataproc/docs/concepts/cluster-properties)",
      InputType_Map_GetTypes(),
      false,
      true,
    ),
  ];
}
