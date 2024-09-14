import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  macie2_ClassificationJobScheduleFrequency,
  macie2_ClassificationJobScheduleFrequency_GetTypes,
} from "../types/macie2_ClassificationJobScheduleFrequency";
import {
  macie2_ClassificationJobS3JobDefinition,
  macie2_ClassificationJobS3JobDefinition_GetTypes,
} from "../types/macie2_ClassificationJobS3JobDefinition";
import {
  macie2_ClassificationJobUserPausedDetail,
  macie2_ClassificationJobUserPausedDetail_GetTypes,
} from "../types/macie2_ClassificationJobUserPausedDetail";

export interface ClassificationJobArgs {
  // The custom data identifiers to use for data analysis and classification.
  customDataIdentifierIds?: Array<string>;

  // Specifies whether to analyze all existing, eligible objects immediately after the job is created.
  initialRun?: boolean;

  // The status for the job. Valid values are: `CANCELLED`, `RUNNING` and `USER_PAUSED`
  jobStatus?: string;

  // The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the `job_type` property to `ONE_TIME`. (documented below)
  scheduleFrequency?: macie2_ClassificationJobScheduleFrequency;

  // The S3 buckets that contain the objects to analyze, and the scope of that analysis. (documented below)
  s3JobDefinition?: macie2_ClassificationJobS3JobDefinition;

  // The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.
  samplingPercentage?: number;

  // A map of key-value pairs that specifies the tags to associate with the job. A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
  tags?: Map<string, string>;

  // A custom description of the job. The description can contain as many as 200 characters.
  description?: string;

  // The schedule for running the job. Valid values are: `ONE_TIME` - Run the job only once. If you specify this value, don't specify a value for the `schedule_frequency` property. `SCHEDULED` - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the `schedule_frequency` property to define the recurrence pattern for the job.
  jobType?: string;

  // A custom name for the job. The name can contain as many as 500 characters. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  name?: string;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  namePrefix?: string;
}
export class ClassificationJob extends DS_Resource {
  // The schedule for running the job. Valid values are: `ONE_TIME` - Run the job only once. If you specify this value, don't specify a value for the `schedule_frequency` property. `SCHEDULED` - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the `schedule_frequency` property to define the recurrence pattern for the job.
  public jobType?: string;

  // A custom name for the job. The name can contain as many as 500 characters. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.
  public name?: string;

  // The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.
  public samplingPercentage?: number;

  // The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the `job_type` property to `ONE_TIME`. (documented below)
  public scheduleFrequency?: macie2_ClassificationJobScheduleFrequency;

  // The date and time, in UTC and extended RFC 3339 format, when the job was created.
  public createdAt?: string;

  // A custom description of the job. The description can contain as many as 200 characters.
  public description?: string;

  // The S3 buckets that contain the objects to analyze, and the scope of that analysis. (documented below)
  public s3JobDefinition?: macie2_ClassificationJobS3JobDefinition;

  // If the current status of the job is `USER_PAUSED`, specifies when the job was paused and when the job or job run will expire and be canceled if it isn't resumed. This value is present only if the value for `job-status` is `USER_PAUSED`.
  public userPausedDetails?: Array<macie2_ClassificationJobUserPausedDetail>;

  // Specifies whether to analyze all existing, eligible objects immediately after the job is created.
  public initialRun?: boolean;

  //
  public jobArn?: string;

  //
  public tagsAll?: Map<string, string>;

  //
  public jobId?: string;

  // The status for the job. Valid values are: `CANCELLED`, `RUNNING` and `USER_PAUSED`
  public jobStatus?: string;

  // A map of key-value pairs that specifies the tags to associate with the job. A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.
  public tags?: Map<string, string>;

  // The custom data identifiers to use for data analysis and classification.
  public customDataIdentifierIds?: Array<string>;

  // Creates a unique name beginning with the specified prefix. Conflicts with `name`.
  public namePrefix?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Array,
        "customDataIdentifierIds",
        "The custom data identifiers to use for data analysis and classification.",
        () => InputType_String_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        "initialRun",
        "Specifies whether to analyze all existing, eligible objects immediately after the job is created.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "jobStatus",
        "The status for the job. Valid values are: `CANCELLED`, `RUNNING` and `USER_PAUSED`",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        "scheduleFrequency",
        "The recurrence pattern for running the job. To run the job only once, don't specify a value for this property and set the value for the `job_type` property to `ONE_TIME`. (documented below)",
        () => macie2_ClassificationJobScheduleFrequency_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A custom description of the job. The description can contain as many as 200 characters.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A custom name for the job. The name can contain as many as 500 characters. If omitted, the provider will assign a random, unique name. Conflicts with `name_prefix`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "namePrefix",
        "Creates a unique name beginning with the specified prefix. Conflicts with `name`.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "s3JobDefinition",
        "The S3 buckets that contain the objects to analyze, and the scope of that analysis. (documented below)",
        () => macie2_ClassificationJobS3JobDefinition_GetTypes(),
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Number,
        "samplingPercentage",
        "The sampling depth, as a percentage, to apply when processing objects. This value determines the percentage of eligible objects that the job analyzes. If this value is less than 100, Amazon Macie selects the objects to analyze at random, up to the specified percentage, and analyzes all the data in those objects.",
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of key-value pairs that specifies the tags to associate with the job. A job can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.",
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        "jobType",
        "The schedule for running the job. Valid values are: `ONE_TIME` - Run the job only once. If you specify this value, don't specify a value for the `schedule_frequency` property. `SCHEDULED` - Run the job on a daily, weekly, or monthly basis. If you specify this value, use the `schedule_frequency` property to define the recurrence pattern for the job.",
        () => [],
        true,
        true,
      ),
    ];
  }
}
