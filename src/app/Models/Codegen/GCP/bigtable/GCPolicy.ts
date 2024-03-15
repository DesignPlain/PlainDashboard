import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { GCPolicyMaxVersion } from "../types/GCPolicyMaxVersion";
import { GCPolicyMaxAge } from "../types/GCPolicyMaxAge";

export interface GCPolicyArgs {
  // The name of the Bigtable instance.
  InstanceName?: string;

  // GC policy that applies to all cells older than the given age.
  MaxAge?: GCPolicyMaxAge;

  // GC policy that applies to all versions of a cell except for the most recent.
  MaxVersions?: Array<GCPolicyMaxVersion>;

  // If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.
  Mode?: string;

  // The name of the table.
  Table?: string;

  // The name of the column family.
  ColumnFamily?: string;

  /*
The deletion policy for the GC policy.
Setting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.

Possible values are: `ABANDON`.

-----
*/
  DeletionPolicy?: string;

  // Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.
  GcRules?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  Project?: string;
}
export class GCPolicy extends Resource {
  // Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.
  public GcRules?: string;

  // The name of the Bigtable instance.
  public InstanceName?: string;

  // The name of the table.
  public Table?: string;

  // The name of the column family.
  public ColumnFamily?: string;

  /*
The deletion policy for the GC policy.
Setting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.

Possible values are: `ABANDON`.

-----
*/
  public DeletionPolicy?: string;

  // GC policy that applies to all cells older than the given age.
  public MaxAge?: GCPolicyMaxAge;

  // GC policy that applies to all versions of a cell except for the most recent.
  public MaxVersions?: Array<GCPolicyMaxVersion>;

  // If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.
  public Mode?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  public Project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "MaxAge",
        "GC policy that applies to all cells older than the given age.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Mode",
        "If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ColumnFamily",
        "The name of the column family.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "The deletion policy for the GC policy.\nSetting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.\n\nPossible values are: `ABANDON`.\n\n-----",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "InstanceName",
        "The name of the Bigtable instance.",
      ),
      new DynamicUIProps(InputType.String, "Table", "The name of the table."),
      new DynamicUIProps(
        InputType.String,
        "GcRules",
        "Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "MaxVersions",
        "GC policy that applies to all versions of a cell except for the most recent.",
      ),
    ];
  }
}
