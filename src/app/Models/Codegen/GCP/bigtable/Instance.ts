import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { InstanceCluster } from "../types/InstanceCluster";

export interface InstanceArgs {
  /*
A set of key/value label pairs to assign to the resource. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.
  Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  Project?: string;

  /*
A block of cluster configuration options. This can be specified at least once, and up 
to as many as possible within 8 cloud regions. Removing the field entirely from the config will cause the provider
to default to the backend value. See structure below.

-----
*/
  Clusters?: Array<InstanceCluster>;

  /*
Whether or not to allow this provider to destroy the instance. Unless this field is set to false
in the statefile, a `pulumi destroy` or `pulumi up` that would delete the instance will fail.
*/
  DeletionProtection?: boolean;

  // The human-readable display name of the Bigtable instance. Defaults to the instance `name`.
  DisplayName?: string;

  /*
The instance type to create. One of `"DEVELOPMENT"` or `"PRODUCTION"`. Defaults to `"PRODUCTION"`.
It is recommended to leave this field unspecified since the distinction between `"DEVELOPMENT"` and `"PRODUCTION"` instances is going away,
and all instances will become `"PRODUCTION"` instances. This means that new and existing `"DEVELOPMENT"` instances will be converted to
`"PRODUCTION"` instances. It is recommended for users to use `"PRODUCTION"` instances in any case, since a 1-node `"PRODUCTION"` instance
is functionally identical to a `"DEVELOPMENT"` instance, but without the accompanying restrictions.
*/
  InstanceType?: string;
}
export class Instance extends Resource {
  /*
The instance type to create. One of `"DEVELOPMENT"` or `"PRODUCTION"`. Defaults to `"PRODUCTION"`.
It is recommended to leave this field unspecified since the distinction between `"DEVELOPMENT"` and `"PRODUCTION"` instances is going away,
and all instances will become `"PRODUCTION"` instances. This means that new and existing `"DEVELOPMENT"` instances will be converted to
`"PRODUCTION"` instances. It is recommended for users to use `"PRODUCTION"` instances in any case, since a 1-node `"PRODUCTION"` instance
is functionally identical to a `"DEVELOPMENT"` instance, but without the accompanying restrictions.
*/
  public InstanceType?: string;

  // The combination of labels configured directly on the resource and default labels configured on the provider.
  public PulumiLabels?: Map<string, string>;

  /*
A block of cluster configuration options. This can be specified at least once, and up 
to as many as possible within 8 cloud regions. Removing the field entirely from the config will cause the provider
to default to the backend value. See structure below.

-----
*/
  public Clusters?: Array<InstanceCluster>;

  /*
All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.

-----
*/
  public EffectiveLabels?: Map<string, string>;

  /*
A set of key/value label pairs to assign to the resource. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.
  public Name?: string;

  /*
The ID of the project in which the resource belongs. If it
is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Whether or not to allow this provider to destroy the instance. Unless this field is set to false
in the statefile, a `pulumi destroy` or `pulumi up` that would delete the instance will fail.
*/
  public DeletionProtection?: boolean;

  // The human-readable display name of the Bigtable instance. Defaults to the instance `name`.
  public DisplayName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it\nis not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Clusters",
        "A block of cluster configuration options. This can be specified at least once, and up \nto as many as possible within 8 cloud regions. Removing the field entirely from the config will cause the provider\nto default to the backend value. See structure below.\n\n-----",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "DeletionProtection",
        "Whether or not to allow this provider to destroy the instance. Unless this field is set to false\nin the statefile, a `pulumi destroy` or `pulumi up` that would delete the instance will fail.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The human-readable display name of the Bigtable instance. Defaults to the instance `name`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceType",
        'The instance type to create. One of `"DEVELOPMENT"` or `"PRODUCTION"`. Defaults to `"PRODUCTION"`.\nIt is recommended to leave this field unspecified since the distinction between `"DEVELOPMENT"` and `"PRODUCTION"` instances is going away,\nand all instances will become `"PRODUCTION"` instances. This means that new and existing `"DEVELOPMENT"` instances will be converted to\n`"PRODUCTION"` instances. It is recommended for users to use `"PRODUCTION"` instances in any case, since a 1-node `"PRODUCTION"` instance\nis functionally identical to a `"DEVELOPMENT"` instance, but without the accompanying restrictions.',
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "A set of key/value label pairs to assign to the resource. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field 'effective_labels' for all of the labels present on the resource.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The name (also called Instance Id in the Cloud Console) of the Cloud Bigtable instance. Must be 6-33 characters and must only contain hyphens, lowercase letters and numbers.",
      ),
    ];
  }
}
