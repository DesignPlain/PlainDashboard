import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  bigtable_GCPolicyMaxVersion,
  bigtable_GCPolicyMaxVersion_GetTypes,
} from "../types/bigtable_GCPolicyMaxVersion";
import {
  bigtable_GCPolicyMaxAge,
  bigtable_GCPolicyMaxAge_GetTypes,
} from "../types/bigtable_GCPolicyMaxAge";

export interface GCPolicyArgs {
  // The name of the column family.
  columnFamily?: string;

  /*
The deletion policy for the GC policy.
Setting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.

Possible values are: `ABANDON`.

-----
*/
  deletionPolicy?: string;

  // GC policy that applies to all versions of a cell except for the most recent.
  maxVersions?: Array<bigtable_GCPolicyMaxVersion>;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  project?: string;

  // The name of the table.
  table?: string;

  // Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.
  gcRules?: string;

  // The name of the Bigtable instance.
  instanceName?: string;

  // GC policy that applies to all cells older than the given age.
  maxAge?: bigtable_GCPolicyMaxAge;

  // If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.
  mode?: string;
}
export class GCPolicy extends Resource {
  // GC policy that applies to all versions of a cell except for the most recent.
  public maxVersions?: Array<bigtable_GCPolicyMaxVersion>;

  // If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.
  public mode?: string;

  // The ID of the project in which the resource belongs. If it is not provided, the provider project is used.
  public project?: string;

  // The name of the Bigtable instance.
  public instanceName?: string;

  /*
The deletion policy for the GC policy.
Setting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.

Possible values are: `ABANDON`.

-----
*/
  public deletionPolicy?: string;

  // Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.
  public gcRules?: string;

  // GC policy that applies to all cells older than the given age.
  public maxAge?: bigtable_GCPolicyMaxAge;

  // The name of the table.
  public table?: string;

  // The name of the column family.
  public columnFamily?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "columnFamily",
        "The name of the column family.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "deletionPolicy",
        "The deletion policy for the GC policy.\nSetting ABANDON allows the resource to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted in a replicated instance.\n\nPossible values are: `ABANDON`.\n\n-----",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs. If it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "table",
        "The name of the table.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "maxAge",
        "GC policy that applies to all cells older than the given age.",
        bigtable_GCPolicyMaxAge_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "mode",
        "If multiple policies are set, you should choose between `UNION` OR `INTERSECTION`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Array,
        "maxVersions",
        "GC policy that applies to all versions of a cell except for the most recent.",
        bigtable_GCPolicyMaxVersion_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "gcRules",
        "Serialized JSON object to represent a more complex GC policy. Conflicts with `mode`, `max_age` and `max_version`. Conflicts with `mode`, `max_age` and `max_version`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "instanceName",
        "The name of the Bigtable instance.",
        [],
        true,
        true,
      ),
    ];
  }
}
