import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  bigquery_DataTransferConfigScheduleOptions,
  bigquery_DataTransferConfigScheduleOptions_GetTypes,
} from "../types/bigquery_DataTransferConfigScheduleOptions";
import {
  bigquery_DataTransferConfigSensitiveParams,
  bigquery_DataTransferConfigSensitiveParams_GetTypes,
} from "../types/bigquery_DataTransferConfigSensitiveParams";
import {
  bigquery_DataTransferConfigEmailPreferences,
  bigquery_DataTransferConfigEmailPreferences_GetTypes,
} from "../types/bigquery_DataTransferConfigEmailPreferences";

export interface DataTransferConfigArgs {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  /*
The number of days to look back to automatically refresh the data.
For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.
*/
  dataRefreshWindowDays?: number;

  // When set to true, no runs are scheduled for a given transfer.
  disabled?: boolean;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  location?: string;

  /*
Pub/Sub topic where notifications will be sent after transfer runs
associated with this transfer config finish.
*/
  notificationPubsubTopic?: string;

  /*
Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
--NOTE-- : If you are attempting to update a parameter that cannot be updated (due to api limitations) please force recreation of the resource.


- - -
*/
  params?: Map<string, string>;

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
  schedule?: string;

  /*
Options customizing the data transfer schedule.
Structure is documented below.
*/
  scheduleOptions?: bigquery_DataTransferConfigScheduleOptions;

  /*
Service account email. If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.
*/
  serviceAccountName?: string;

  // The data source id. Cannot be changed once the transfer config is created.
  dataSourceId?: string;

  // The BigQuery target dataset id.
  destinationDatasetId?: string;

  /*
Different parameters are configured primarily using the the `params` field on this
resource. This block contains the parameters which contain secrets or passwords so that they can be marked
sensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key
in the `params` map in the api request.
Credentials may not be specified in both locations and will cause an error. Changing from one location
to a different credential configuration in the config will require an apply to update state.
Structure is documented below.
*/
  sensitiveParams?: bigquery_DataTransferConfigSensitiveParams;

  // The user specified display name for the transfer config.
  displayName?: string;

  /*
Email notifications will be sent according to these preferences to the
email address of the user who owns this transfer config.
Structure is documented below.
*/
  emailPreferences?: bigquery_DataTransferConfigEmailPreferences;
}
export class DataTransferConfig extends DS_Resource {
  /*
Email notifications will be sent according to these preferences to the
email address of the user who owns this transfer config.
Structure is documented below.
*/
  public emailPreferences?: bigquery_DataTransferConfigEmailPreferences;

  /*
The geographic location where the transfer config should reside.
Examples: US, EU, asia-northeast1. The default value is US.
*/
  public location?: string;

  /*
The number of days to look back to automatically refresh the data.
For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.
*/
  public dataRefreshWindowDays?: number;

  // When set to true, no runs are scheduled for a given transfer.
  public disabled?: boolean;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  /*
The resource name of the transfer config. Transfer config names have the
form projects/{projectId}/locations/{location}/transferConfigs/{configId}
or projects/{projectId}/transferConfigs/{configId},
where configId is usually a uuid, but this is not required.
The name is ignored when creating a transfer config.
*/
  public name?: string;

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
  public schedule?: string;

  /*
Options customizing the data transfer schedule.
Structure is documented below.
*/
  public scheduleOptions?: bigquery_DataTransferConfigScheduleOptions;

  /*
Different parameters are configured primarily using the the `params` field on this
resource. This block contains the parameters which contain secrets or passwords so that they can be marked
sensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key
in the `params` map in the api request.
Credentials may not be specified in both locations and will cause an error. Changing from one location
to a different credential configuration in the config will require an apply to update state.
Structure is documented below.
*/
  public sensitiveParams?: bigquery_DataTransferConfigSensitiveParams;

  // The data source id. Cannot be changed once the transfer config is created.
  public dataSourceId?: string;

  // The BigQuery target dataset id.
  public destinationDatasetId?: string;

  // The user specified display name for the transfer config.
  public displayName?: string;

  /*
Pub/Sub topic where notifications will be sent after transfer runs
associated with this transfer config finish.
*/
  public notificationPubsubTopic?: string;

  /*
Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq
--NOTE-- : If you are attempting to update a parameter that cannot be updated (due to api limitations) please force recreation of the resource.


- - -
*/
  public params?: Map<string, string>;

  /*
Service account email. If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.
*/
  public serviceAccountName?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "emailPreferences",
        "Email notifications will be sent according to these preferences to the\nemail address of the user who owns this transfer config.\nStructure is documented below.",
        () => bigquery_DataTransferConfigEmailPreferences_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "location",
        "The geographic location where the transfer config should reside.\nExamples: US, EU, asia-northeast1. The default value is US.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "notificationPubsubTopic",
        "Pub/Sub topic where notifications will be sent after transfer runs\nassociated with this transfer config finish.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "schedule",
        "Data transfer schedule. If the data source does not support a custom\nschedule, this should be empty. If it is empty, the default value for\nthe data source will be used. The specified times are in UTC. Examples\nof valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,\njun 13:15, and first sunday of quarter 00:00. See more explanation\nabout the format here:\nhttps://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format\nNOTE: the granularity should be at least 8 hours, or less frequent.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduleOptions",
        "Options customizing the data transfer schedule.\nStructure is documented below.",
        () => bigquery_DataTransferConfigScheduleOptions_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataSourceId",
        "The data source id. Cannot be changed once the transfer config is created.",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "params",
        "Parameters specific to each data source. For more information see the bq tab in the 'Setting up a data transfer'\nsection for each data source. For example the parameters for Cloud Storage transfers are listed here:\nhttps://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq\n**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) please force recreation of the resource.\n\n\n- - -",
        () => InputType_Map_GetTypes(),
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "serviceAccountName",
        "Service account email. If this field is set, transfer config will\nbe created with this service account credentials. It requires that\nrequesting user calling this API has permissions to act as this service account.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "displayName",
        "The user specified display name for the transfer config.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "project",
        "The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "disabled",
        "When set to true, no runs are scheduled for a given transfer.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "destinationDatasetId",
        "The BigQuery target dataset id.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Number,
        "dataRefreshWindowDays",
        "The number of days to look back to automatically refresh the data.\nFor example, if dataRefreshWindowDays = 10, then every day BigQuery\nreingests data for [today-10, today-1], rather than ingesting data for\njust [today-1]. Only valid if the data source supports the feature.\nSet the value to 0 to use the default value.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "sensitiveParams",
        "Different parameters are configured primarily using the the `params` field on this\nresource. This block contains the parameters which contain secrets or passwords so that they can be marked\nsensitive and hidden from plan output. The name of the field, eg: secret_access_key, will be the key\nin the `params` map in the api request.\nCredentials may not be specified in both locations and will cause an error. Changing from one location\nto a different credential configuration in the config will require an apply to update state.\nStructure is documented below.",
        () => bigquery_DataTransferConfigSensitiveParams_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
