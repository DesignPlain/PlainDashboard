import { InputType } from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import { DataTransferConfigSensitiveParams } from "../types/DataTransferConfigSensitiveParams";
import { DataTransferConfigScheduleOptions } from "../types/DataTransferConfigScheduleOptions";
import { DataTransferConfigEmailPreferences } from "../types/DataTransferConfigEmailPreferences";

export interface DataTransferConfigArgs {
  // The data source id. Cannot be changed once the transfer config is created.
  DataSourceId?: string;

  // The user specified display name for the transfer config.
  DisplayName?: string;

  /*
Email notifications will be sent according to these preferences to the
email address of the user who owns this transfer config.
Structure is documented below.
*/
  EmailPreferences?: DataTransferConfigEmailPreferences;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  Location?: string;

  /*
The number of days to look back to automatically refresh the data.
For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.
*/
  DataRefreshWindowDays?: number;

  // When set to true, no runs are scheduled for a given transfer.
  Disabled?: boolean;

  // The BigQuery target dataset id.
  DestinationDatasetId?: string;

  /*
Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
--NOTE-- : If you are attempting to update a parameter that cannot be updated (due to api limitations) please force recreation of the resource.


- - -
*/
  Params?: Map<string, string>;

  /*
Different parameters are configured primarily using the the `params` field on this
resource. This block contains the parameters which contain secrets or passwords so that they can be marked
sensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key
in the `params` map in the api request.
Credentials may not be specified in both locations and will cause an error. Changing from one location
to a different credential configuration in the config will require an apply to update state.
Structure is documented below.
*/
  SensitiveParams?: DataTransferConfigSensitiveParams;

  /*
Pub/Sub topic where notifications will be sent after transfer runs
associated with this transfer config finish.
*/
  NotificationPubsubTopic?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  Project?: string;

  /*
Data transfer schedule. If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.
*/
  Schedule?: string;

  /*
Options customizing the data transfer schedule.
Structure is documented below.
*/
  ScheduleOptions?: DataTransferConfigScheduleOptions;

  /*
Service account email. If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.
*/
  ServiceAccountName?: string;
}
export class DataTransferConfig extends Resource {
  /*
The number of days to look back to automatically refresh the data.
For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.
*/
  public DataRefreshWindowDays?: number;

  // The data source id. Cannot be changed once the transfer config is created.
  public DataSourceId?: string;

  /*
Email notifications will be sent according to these preferences to the
email address of the user who owns this transfer config.
Structure is documented below.
*/
  public EmailPreferences?: DataTransferConfigEmailPreferences;

  /*
The resource name of the transfer config. Transfer config names have the
form projects/{projectId}/locations/{location}/transferConfigs/{configId}
or projects/{projectId}/transferConfigs/{configId},
where configId is usually a uuid, but this is not required.
The name is ignored when creating a transfer config.
*/
  public Name?: string;

  /*
Pub/Sub topic where notifications will be sent after transfer runs
associated with this transfer config finish.
*/
  public NotificationPubsubTopic?: string;

  /*
Service account email. If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.
*/
  public ServiceAccountName?: string;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  public Location?: string;

  /*
Data transfer schedule. If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.
*/
  public Schedule?: string;

  // The BigQuery target dataset id.
  public DestinationDatasetId?: string;

  // When set to true, no runs are scheduled for a given transfer.
  public Disabled?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public Project?: string;

  // The user specified display name for the transfer config.
  public DisplayName?: string;

  /*
Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
--NOTE-- : If you are attempting to update a parameter that cannot be updated (due to api limitations) please force recreation of the resource.


- - -
*/
  public Params?: Map<string, string>;

  /*
Options customizing the data transfer schedule.
Structure is documented below.
*/
  public ScheduleOptions?: DataTransferConfigScheduleOptions;

  /*
Different parameters are configured primarily using the the `params` field on this
resource. This block contains the parameters which contain secrets or passwords so that they can be marked
sensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key
in the `params` map in the api request.
Credentials may not be specified in both locations and will cause an error. Changing from one location
to a different credential configuration in the config will require an apply to update state.
Structure is documented below.
*/
  public SensitiveParams?: DataTransferConfigSensitiveParams;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "Location",
        "The geographic location where the transfer config should reside.\nExamples: US, EU, asia-northeast1. The default value is US.",
      ),
      new DynamicUIProps(
        InputType.Number,
        "DataRefreshWindowDays",
        "The number of days to look back to automatically refresh the data.\nFor example, if dataRefreshWindowDays = 10, then every day BigQuery\nreingests data for [today-10, today-1], rather than ingesting data for\njust [today-1]. Only valid if the data source supports the feature.\nSet the value to 0 to use the default value.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DestinationDatasetId",
        "The BigQuery target dataset id.",
      ),
      new DynamicUIProps(
        InputType.String,
        "SensitiveParams",
        "Different parameters are configured primarily using the the `params` field on this\nresource. This block contains the parameters which contain secrets or passwords so that they can be marked\nsensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key\nin the `params` map in the api request.\nCredentials may not be specified in both locations and will cause an error. Changing from one location\nto a different credential configuration in the config will require an apply to update state.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DisplayName",
        "The user specified display name for the transfer config.",
      ),
      new DynamicUIProps(
        InputType.String,
        "EmailPreferences",
        "Email notifications will be sent according to these preferences to the\nemail address of the user who owns this transfer config.\nStructure is documented below.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Schedule",
        "Data transfer schedule. If the data source does not support a custom\nschedule, this should be empty. If it is empty, the default value for\nthe data source will be used. The specified times are in UTC. Examples\nof valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,\njun 13:15, and first sunday of quarter 00:00. See more explanation\nabout the format here:\nhttps://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format\nNOTE: the granularity should be at least 8 hours, or less frequent.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ServiceAccountName",
        "Service account email. If this field is set, transfer config will\nbe created with this service account credentials. It requires that\nrequesting user calling this API has permissions to act as this service account.",
      ),
      new DynamicUIProps(
        InputType.String,
        "DataSourceId",
        "The data source id. Cannot be changed once the transfer config is created.",
      ),
      new DynamicUIProps(
        InputType.CheckBox,
        "Disabled",
        "When set to true, no runs are scheduled for a given transfer.",
      ),
      new DynamicUIProps(
        InputType.String,
        "Params",
        "Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'\nsection for each data source. For example the parameters for Cloud Storage transfers are listed here:\nhttps://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq\n**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) please force recreation of the resource.\n\n\n- - -",
      ),
      new DynamicUIProps(
        InputType.String,
        "Project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
      ),
      new DynamicUIProps(
        InputType.String,
        "NotificationPubsubTopic",
        "Pub/Sub topic where notifications will be sent after transfer runs\nassociated with this transfer config finish.",
      ),
      new DynamicUIProps(
        InputType.String,
        "ScheduleOptions",
        "Options customizing the data transfer schedule.\nStructure is documented below.",
      ),
    ];
  }
}
