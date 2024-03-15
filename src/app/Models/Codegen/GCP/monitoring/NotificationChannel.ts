import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { NotificationChannelSensitiveLabels } from "../types/NotificationChannelSensitiveLabels";

export interface NotificationChannelArgs {
  /*
The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...


- - -
*/
  Type?: string;

  // An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.
  DisplayName?: string;

  // Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.
  Enabled?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Different notification type behaviors are configured primarily using the the `labels` field on this
resource. This block contains the labels which contain secrets or passwords so that they can be marked
sensitive and hidden from plan output. The name of the field, eg: password, will be the key
in the `labels` map in the api request.
Credentials may not be specified in both locations and will cause an error. Changing from one location
to a different credential configuration in the config will require an apply to update state.
Structure is documented below.
*/
  SensitiveLabels?: NotificationChannelSensitiveLabels;

  // User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  UserLabels?: Map<string, string>;

  // An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.
  Description?: string;

  /*
If true, the notification channel will be deleted regardless
of its use in alert policies (the policies will be updated
to remove the channel). If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.
*/
  ForceDelete?: boolean;

  /*
Configuration fields that define the channel and its behavior. The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.
Labels with sensitive data are obfuscated by the API and therefore the provider cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.
*/
  Labels?: Map<string, string>;
}
export class NotificationChannel extends Resource {
  // An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.
  public DisplayName?: string;

  // Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.
  public Enabled?: boolean;

  /*
If true, the notification channel will be deleted regardless
of its use in alert policies (the policies will be updated
to remove the channel). If false, channels that are still
referenced by an existing alerting policy will fail to be
deleted in a delete operation.
*/
  public ForceDelete?: boolean;

  /*
Configuration fields that define the channel and its behavior. The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.
Labels with sensitive data are obfuscated by the API and therefore the provider cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.
*/
  public Labels?: Map<string, string>;

  /*
The full REST resource name for this channel. The syntax is:
projects/[PROJECT_ID]/notificationChannels/[CHANNEL_ID]
The [CHANNEL_ID] is automatically assigned by the server on creation.
*/
  public Name?: string;

  /*
The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...


- - -
*/
  public Type?: string;

  // An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.
  public Description?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  /*
Different notification type behaviors are configured primarily using the the `labels` field on this
resource. This block contains the labels which contain secrets or passwords so that they can be marked
sensitive and hidden from plan output. The name of the field, eg: password, will be the key
in the `labels` map in the api request.
Credentials may not be specified in both locations and will cause an error. Changing from one location
to a different credential configuration in the config will require an apply to update state.
Structure is documented below.
*/
  public SensitiveLabels?: NotificationChannelSensitiveLabels;

  // User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.
  public UserLabels?: Map<string, string>;

  // Indicates whether this channel has been verified or not. On a ListNotificationChannels or GetNotificationChannel operation, this field is expected to be populated.If the value is UNVERIFIED, then it indicates that the channel is non-functioning (it both requires verification and lacks verification); otherwise, it is assumed that the channel works.If the channel is neither VERIFIED nor UNVERIFIED, it implies that the channel is of a type that does not require verification or that this specific channel has been exempted from verification because it was created prior to verification being required for channels of this type.This field cannot be modified using a standard UpdateNotificationChannel operation. To change the value of this field, you must call VerifyNotificationChannel.
  public VerificationStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Description",
        "An optional human-readable description of this notification channel. This description may provide additional details, beyond the display name, for the channel. This may not exceed 1024 Unicode characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Labels",
        "Configuration fields that define the channel and its behavior. The\npermissible and required labels are specified in the\nNotificationChannelDescriptor corresponding to the type field.\nLabels with sensitive data are obfuscated by the API and therefore the provider cannot\ndetermine if there are upstream changes to these fields. They can also be configured via\nthe sensitive_labels block, but cannot be configured in both places.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "An optional human-readable name for this notification channel. It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "UserLabels",
        "User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "ForceDelete",
        "If true, the notification channel will be deleted regardless\nof its use in alert policies (the policies will be updated\nto remove the channel). If false, channels that are still\nreferenced by an existing alerting policy will fail to be\ndeleted in a delete operation.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Type",
        'The type of the notification channel. This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...\n\n\n- - -',
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Enabled",
        "Whether notifications are forwarded to the described channel. This makes it possible to disable delivery of notifications to a particular channel without removing the channel from all alerting policies that reference the channel. This is a more convenient approach when the change is temporary and you want to receive notifications from the same set of alerting policies on the channel at some point in the future.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SensitiveLabels",
        "Different notification type behaviors are configured primarily using the the `labels` field on this\nresource. This block contains the labels which contain secrets or passwords so that they can be marked\nsensitive and hidden from plan output. The name of the field, eg: password, will be the key\nin the `labels` map in the api request.\nCredentials may not be specified in both locations and will cause an error. Changing from one location\nto a different credential configuration in the config will require an apply to update state.\nStructure is documented below.",
      ),
    ];
  }
}
