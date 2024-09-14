import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface elasticbeanstalk_ApplicationAppversionLifecycle {
  // Set to `true` to delete a version's source bundle from S3 when the application version is deleted.
  deleteSourceFromS3?: boolean;

  // The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
  maxAgeInDays?: number;

  // The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).
  maxCount?: number;

  // The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
  serviceRole?: string;
}

export function elasticbeanstalk_ApplicationAppversionLifecycle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Bool,
      "deleteSourceFromS3",
      "Set to `true` to delete a version's source bundle from S3 when the application version is deleted.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxAgeInDays",
      "The number of days to retain an application version ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxCount",
      "The maximum number of application versions to retain ('max_age_in_days' and 'max_count' cannot be enabled simultaneously.).",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceRole",
      "The ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.",
      () => [],
      true,
      false,
    ),
  ];
}
