import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  Gkebackup_RestorePlanRestoreConfig,
  Gkebackup_RestorePlanRestoreConfig_GetTypes,
} from "../types/Gkebackup_RestorePlanRestoreConfig";

export interface RestorePlanArgs {
  // User specified descriptive string for this RestorePlan.
  Description?: string;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  Labels?: Map<string, string>;

  // The region of the Restore Plan.
  Location?: string;

  // The full name of the BackupPlan Resource.
  Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Defines the configuration of Restores created via this RestorePlan.
Structure is documented below.
*/
  RestoreConfig?: Gkebackup_RestorePlanRestoreConfig;

  /*
A reference to the BackupPlan from which Backups may be used
as the source for Restores created via this RestorePlan.
*/
  BackupPlan?: string;

  // The source cluster from which Restores will be created via this RestorePlan.
  Cluster?: string;
}
export class RestorePlan extends Resource {
  /*
A reference to the BackupPlan from which Backups may be used
as the source for Restores created via this RestorePlan.
*/
  public BackupPlan?: string;

  // The full name of the BackupPlan Resource.
  public Name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Defines the configuration of Restores created via this RestorePlan.
Structure is documented below.
*/
  public RestoreConfig?: Gkebackup_RestorePlanRestoreConfig;

  // The region of the Restore Plan.
  public Location?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public PulumiLabels?: Map<string, string>;

  // The State of the RestorePlan.
  public State?: string;

  // Detailed description of why RestorePlan is in its current state.
  public StateReason?: string;

  // The source cluster from which Restores will be created via this RestorePlan.
  public Cluster?: string;

  // User specified descriptive string for this RestorePlan.
  public Description?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public EffectiveLabels?: Map<string, string>;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public Labels?: Map<string, string>;

  // Server generated, unique identifier of UUID format.
  public Uid?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "RestoreConfig",
        "Defines the configuration of Restores created via this RestorePlan.\nStructure is documented below.",
        Gkebackup_RestorePlanRestoreConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "BackupPlan",
        "A reference to the BackupPlan from which Backups may be used\nas the source for Restores created via this RestorePlan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Cluster",
        "The source cluster from which Restores will be created via this RestorePlan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Description",
        "User specified descriptive string for this RestorePlan.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "Labels",
        'Description: A set of custom labels supplied by the user.\nA list of key->value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The region of the Restore Plan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "Name",
        "The full name of the BackupPlan Resource.",
        [],
        false,
        true,
      ),
    ];
  }
}
