import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  gkebackup_RestorePlanRestoreConfig,
  gkebackup_RestorePlanRestoreConfig_GetTypes,
} from "../types/gkebackup_RestorePlanRestoreConfig";

export interface RestorePlanArgs {
  // The region of the Restore Plan.
  location?: string;

  // The full name of the BackupPlan Resource.
  name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
Defines the configuration of Restores created via this RestorePlan.
Structure is documented below.
*/
  restoreConfig?: gkebackup_RestorePlanRestoreConfig;

  /*
A reference to the BackupPlan from which Backups may be used
as the source for Restores created via this RestorePlan.
*/
  backupPlan?: string;

  // The source cluster from which Restores will be created via this RestorePlan.
  cluster?: string;

  // User specified descriptive string for this RestorePlan.
  description?: string;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  labels?: Map<string, string>;
}
export class RestorePlan extends Resource {
  /*
A reference to the BackupPlan from which Backups may be used
as the source for Restores created via this RestorePlan.
*/
  public backupPlan?: string;

  // The source cluster from which Restores will be created via this RestorePlan.
  public cluster?: string;

  // User specified descriptive string for this RestorePlan.
  public description?: string;

  // The region of the Restore Plan.
  public location?: string;

  // The full name of the BackupPlan Resource.
  public name?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The combination of labels configured directly on the resource
and default labels configured on the provider.
*/
  public pulumiLabels?: Map<string, string>;

  // Server generated, unique identifier of UUID format.
  public uid?: string;

  // All of labels (key/value pairs) present on the resource in GCP, including the labels configured through Pulumi, other clients and services.
  public effectiveLabels?: Map<string, string>;

  /*
Description: A set of custom labels supplied by the user.
A list of key->value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

--Note--: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.
*/
  public labels?: Map<string, string>;

  /*
Defines the configuration of Restores created via this RestorePlan.
Structure is documented below.
*/
  public restoreConfig?: gkebackup_RestorePlanRestoreConfig;

  // The State of the RestorePlan.
  public state?: string;

  // Detailed description of why RestorePlan is in its current state.
  public stateReason?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "description",
        "User specified descriptive string for this RestorePlan.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "labels",
        'Description: A set of custom labels supplied by the user.\nA list of key->value pairs.\nExample: { "name": "wrench", "mass": "1.3kg", "count": "3" }.\n\n**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.\nPlease refer to the field `effective_labels` for all of the labels present on the resource.',
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The region of the Restore Plan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "The full name of the BackupPlan Resource.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "restoreConfig",
        "Defines the configuration of Restores created via this RestorePlan.\nStructure is documented below.",
        gkebackup_RestorePlanRestoreConfig_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "backupPlan",
        "A reference to the BackupPlan from which Backups may be used\nas the source for Restores created via this RestorePlan.",
        [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "cluster",
        "The source cluster from which Restores will be created via this RestorePlan.",
        [],
        true,
        true,
      ),
    ];
  }
}
