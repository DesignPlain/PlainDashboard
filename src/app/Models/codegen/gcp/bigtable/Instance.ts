import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigtable_InstanceCluster,
  bigtable_InstanceCluster_GetTypes,
} from "../types/bigtable_InstanceCluster";

export interface InstanceArgs {
  /*
Whether or not to allow this provider to destroy the instance. Unless this field is set to false
in the statefile, a `pulumi destroy` or `pulumi up` that would delete the instance will fail.
*/
  deletionProtection?: boolean;

  // The human-readable display name of the Bigtable instance. Defaults to the instance `name`.
  displayName?: string;

  /*
The instance type to create. One of `"DEVELOPMENT"` or `"PRODUCTION"`. Defaults to `"PRODUCTION"`.
It is recommended to leave this field unspecified since the distinction between `"DEVELOPMENT"` and `"PRODUCTION"` instances is going away,
and all instances will become `"PRODUCTION"` instances. This means that new and existing `"DEVELOPMENT"` instances will be converted to
`"PRODUCTION"` instances. It is recommended for users to use `"PRODUCTION"` instances in any case, since a 1-node `"PRODUCTION"` instance
is functionally identical to a `"DEVELOPMENT"` instance, but without the accompanying restrictions.
*/
  instanceType?: string;

  /*
A set of key/value label pairs to assign to the resource. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  labels?: Map<string, string>;

  // The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.
  name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  project?: string;

  /*
A block of cluster configuration options. This can be specified at least once, and up 
to as many as possible within 8 cloud regions. Removing the field entirely from the config will cause the provider
to default to the backend value. See structure below.

-----
*/
  clusters?: Array<bigtable_InstanceCluster>;
}
export class Instance extends DS_Resource {
  // The human-readable display name of the Bigtable instance. Defaults to the instance `name`.
  public displayName?: string;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.

-----
*/
  public effectiveLabels?: Map<string, string>;

  /*
The instance type to create. One of `"DEVELOPMENT"` or `"PRODUCTION"`. Defaults to `"PRODUCTION"`.
It is recommended to leave this field unspecified since the distinction between `"DEVELOPMENT"` and `"PRODUCTION"` instances is going away,
and all instances will become `"PRODUCTION"` instances. This means that new and existing `"DEVELOPMENT"` instances will be converted to
`"PRODUCTION"` instances. It is recommended for users to use `"PRODUCTION"` instances in any case, since a 1-node `"PRODUCTION"` instance
is functionally identical to a `"DEVELOPMENT"` instance, but without the accompanying restrictions.
*/
  public instanceType?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public project?: string;

  /*
A block of cluster configuration options. This can be specified at least once, and up 
to as many as possible within 8 cloud regions. Removing the field entirely from the config will cause the provider
to default to the backend value. See structure below.

-----
*/
  public clusters?: Array<bigtable_InstanceCluster>;

  /*
Whether or not to allow this provider to destroy the instance. Unless this field is set to false
in the statefile, a `pulumi destroy` or `pulumi up` that would delete the instance will fail.
*/
  public deletionProtection?: boolean;

  /*
A set of key/value label pairs to assign to the resource. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  // The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.
  public name?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public pulumiLabels?: Map<string, string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "name",
        "The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "clusters",
        "A block of cluster configuration options. This can be specified at least once, and up \nto as many as possible within 8 cloud regions. Removing the field entirely from the config will cause the provider\nto default to the backend value. See structure below.\n\n-----",
        () => bigtable_InstanceCluster_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "deletionProtection",
        "Whether or not to allow this provider to destroy the instance. Unless this field is set to false\nin the statefile, a `pulumi destroy` or `pulumi up` that would delete the instance will fail.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The human-readable display name of the Bigtable instance. Defaults to the instance `name`.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceType",
        'The instance type to create. One of `"DEVELOPMENT"` or `"PRODUCTION"`. Defaults to `"PRODUCTION"`.\nIt is recommended to leave this field unspecified since the distinction between `"DEVELOPMENT"` and `"PRODUCTION"` instances is going away,\nand all instances will become `"PRODUCTION"` instances. This means that new and existing `"DEVELOPMENT"` instances will be converted to\n`"PRODUCTION"` instances. It is recommended for users to use `"PRODUCTION"` instances in any case, since a 1-node `"PRODUCTION"` instance\nis functionally identical to a `"DEVELOPMENT"` instance, but without the accompanying restrictions.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        "A set of key/value label pairs to assign to the resource. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
