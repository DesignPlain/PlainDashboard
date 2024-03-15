import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { AlertPolicyCondition } from "../types/AlertPolicyCondition";
import { AlertPolicyDocumentation } from "../types/AlertPolicyDocumentation";
import { AlertPolicyAlertStrategy } from "../types/AlertPolicyAlertStrategy";
import { AlertPolicyCreationRecord } from "../types/AlertPolicyCreationRecord";

export interface AlertPolicyArgs {
  // Whether or not the policy is enabled. The default is true.
  Enabled?: boolean;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  UserLabels?: Map<string, string>;

  /*
A short name or phrase used to identify the policy in
dashboards, notifications, and incidents. To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.
*/
  DisplayName?: string;

  /*
How to combine the results of multiple conditions to
determine if an incident should be opened.
Possible values are: `AND`, `OR`, `AND_WITH_MATCHING_RESOURCE`.
*/
  Combiner?: string;

  /*
A list of conditions for the policy. The conditions are combined by
AND or OR according to the combiner field. If the combined conditions
evaluate to true, then an incident is created. A policy can have from
one to six conditions.
Structure is documented below.
*/
  Conditions?: Array<AlertPolicyCondition>;

  /*
Documentation that is included with notifications and incidents related
to this policy. Best practice is for the documentation to include information
to help responders understand, mitigate, escalate, and correct the underlying
problems detected by the alerting policy. Notification channels that have
limited capacity might not show this documentation.
Structure is documented below.
*/
  Documentation?: AlertPolicyDocumentation;

  /*
Identifies the notification channels to which notifications should be
sent when incidents are opened or closed or when new violations occur
on an already opened incident. Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
`projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`
*/
  NotificationChannels?: Array<string>;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
The severity of an alert policy indicates how important incidents generated
by that policy are. The severity level will be displayed on the Incident
detail page and in notifications.
Possible values are: `CRITICAL`, `ERROR`, `WARNING`.
*/
  Severity?: string;

  /*
Control over how this alert policy's notification channels are notified.
Structure is documented below.
*/
  AlertStrategy?: AlertPolicyAlertStrategy;
}
export class AlertPolicy extends Resource {
  /*
Documentation that is included with notifications and incidents related
to this policy. Best practice is for the documentation to include information
to help responders understand, mitigate, escalate, and correct the underlying
problems detected by the alerting policy. Notification channels that have
limited capacity might not show this documentation.
Structure is documented below.
*/
  public Documentation?: AlertPolicyDocumentation;

  // Whether or not the policy is enabled. The default is true.
  public Enabled?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
The severity of an alert policy indicates how important incidents generated
by that policy are. The severity level will be displayed on the Incident
detail page and in notifications.
Possible values are: `CRITICAL`, `ERROR`, `WARNING`.
*/
  public Severity?: string;

  /*
Control over how this alert policy's notification channels are notified.
Structure is documented below.
*/
  public AlertStrategy?: AlertPolicyAlertStrategy;

  /*
A read-only record of the creation of the alerting policy.
If provided in a call to create or update, this field will
be ignored.
Structure is documented below.
*/
  public CreationRecords?: Array<AlertPolicyCreationRecord>;

  /*
A short name or phrase used to identify the policy in
dashboards, notifications, and incidents. To avoid confusion, don't use
the same display name for multiple policies in the same project. The
name is limited to 512 Unicode characters.
*/
  public DisplayName?: string;

  /*
Identifies the notification channels to which notifications should be
sent when incidents are opened or closed or when new violations occur
on an already opened incident. Each element of this array corresponds
to the name field in each of the NotificationChannel objects that are
returned from the notificationChannels.list method. The syntax of the
entries in this field is
`projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`
*/
  public NotificationChannels?: Array<string>;

  /*
This field is intended to be used for organizing and identifying the AlertPolicy
objects.The field can contain up to 64 entries. Each key and value is limited
to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values
can contain only lowercase letters, numerals, underscores, and dashes. Keys
must begin with a letter.
*/
  public UserLabels?: Map<string, string>;

  /*
How to combine the results of multiple conditions to
determine if an incident should be opened.
Possible values are: `AND`, `OR`, `AND_WITH_MATCHING_RESOURCE`.
*/
  public Combiner?: string;

  /*
A list of conditions for the policy. The conditions are combined by
AND or OR according to the combiner field. If the combined conditions
evaluate to true, then an incident is created. A policy can have from
one to six conditions.
Structure is documented below.
*/
  public Conditions?: Array<AlertPolicyCondition>;

  /*
(Output)
The unique resource name for this condition.
Its syntax is:
projects/[PROJECT_ID]/alertPolicies/[POLICY_ID]/conditions/[CONDITION_ID]
[CONDITION_ID] is assigned by Stackdriver Monitoring when
the condition is created as part of a new or updated alerting
policy.
*/
  public Name?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "AlertStrategy",
        "Control over how this alert policy's notification channels are notified.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UserLabels",
        "This field is intended to be used for organizing and identifying the AlertPolicy\nobjects.The field can contain up to 64 entries. Each key and value is limited\nto 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values\ncan contain only lowercase letters, numerals, underscores, and dashes. Keys\nmust begin with a letter.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Combiner",
        "How to combine the results of multiple conditions to\ndetermine if an incident should be opened.\nPossible values are: `AND`, `OR`, `AND_WITH_MATCHING_RESOURCE`.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Documentation",
        "Documentation that is included with notifications and incidents related\nto this policy. Best practice is for the documentation to include information\nto help responders understand, mitigate, escalate, and correct the underlying\nproblems detected by the alerting policy. Notification channels that have\nlimited capacity might not show this documentation.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Severity",
        "The severity of an alert policy indicates how important incidents generated\nby that policy are. The severity level will be displayed on the Incident\ndetail page and in notifications.\nPossible values are: `CRITICAL`, `ERROR`, `WARNING`.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "Whether or not the policy is enabled. The default is true.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "A short name or phrase used to identify the policy in\ndashboards, notifications, and incidents. To avoid confusion, don't use\nthe same display name for multiple policies in the same project. The\nname is limited to 512 Unicode characters.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "Conditions",
        "A list of conditions for the policy. The conditions are combined by\nAND or OR according to the combiner field. If the combined conditions\nevaluate to true, then an incident is created. A policy can have from\none to six conditions.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.DropDown,
        "NotificationChannels",
        "Identifies the notification channels to which notifications should be\nsent when incidents are opened or closed or when new violations occur\non an already opened incident. Each element of this array corresponds\nto the name field in each of the NotificationChannel objects that are\nreturned from the notificationChannels.list method. The syntax of the\nentries in this field is\n`projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]`",
      ),
    ];
  }
}
