import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Bigtable_GCPolicyMaxAge,
  Bigtable_GCPolicyMaxAge_GetTypes,
} from "../types/Bigtable_GCPolicyMaxAge";
import {
  Bigtable_GCPolicyMaxVersion,
  Bigtable_GCPolicyMaxVersion_GetTypes,
} from "../types/Bigtable_GCPolicyMaxVersion";

export interface GCPolicyArgs {
  /*
The deletion policy for the GC policy.
Setting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.

Possible values are: `ABANDON`.

-----
*/
  DeletionPolicy?: string;

  // GC policy that applies to all cells older than the given age.
  MaxAge?: Bigtable_GCPolicyMaxAge;

  // GC policy that applies to all versions of a cell except for the most recent.
  MaxVersions?: Array<Bigtable_GCPolicyMaxVersion>;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  Project?: string;

  // The name of the column family.
  ColumnFamily?: string;

  // The name of the Bigtable instance.
  InstanceName?: string;

  // If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.
  Mode?: string;

  // The name of the table.
  Table?: string;

  // Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.
  GcRules?: string;
}
export class GCPolicy extends Resource {
  // GC policy that applies to all versions of a cell except for the most recent.
  public MaxVersions?: Array<Bigtable_GCPolicyMaxVersion>;

  // The name of the table.
  public Table?: string;

  /*
The deletion policy for the GC policy.
Setting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.

Possible values are: `ABANDON`.

-----
*/
  public DeletionPolicy?: string;

  // GC policy that applies to all cells older than the given age.
  public MaxAge?: Bigtable_GCPolicyMaxAge;

  // The name of the Bigtable instance.
  public InstanceName?: string;

  // If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.
  public Mode?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  public Project?: string;

  // The name of the column family.
  public ColumnFamily?: string;

  // Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.
  public GcRules?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "InstanceName",
        "The name of the Bigtable instance.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Mode",
        "If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Table",
        "The name of the table.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "DeletionPolicy",
        "The deletion policy for the GC policy.\nSetting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.\n\nPossible values are: `ABANDON`.\n\n-----",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "MaxAge",
        "GC policy that applies to all cells older than the given age.",
        Bigtable_GCPolicyMaxAge_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "MaxVersions",
        "GC policy that applies to all versions of a cell except for the most recent.",
        Bigtable_GCPolicyMaxVersion_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "ColumnFamily",
        "The name of the column family.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "GcRules",
        "Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.",
        [],
        false,
        false,
      ),
    ];
  }
}
