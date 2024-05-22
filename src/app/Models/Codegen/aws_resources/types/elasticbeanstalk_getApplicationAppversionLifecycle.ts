import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface elasticbeanstalk_getApplicationAppversionLifecycle {
  // Maximum number of application versions to retain.
  maxCount?: number;

  // ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.
  serviceRole?: string;

  // Specifies whether delete a version's source bundle from S3 when the application version is deleted.
  deleteSourceFromS3?: boolean;

  // Number of days to retain an application version.
  maxAgeInDays?: number;
}

export function elasticbeanstalk_getApplicationAppversionLifecycle_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "maxAgeInDays",
      "Number of days to retain an application version.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "maxCount",
      "Maximum number of application versions to retain.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "serviceRole",
      "ARN of an IAM service role under which the application version is deleted.  Elastic Beanstalk must have permission to assume this role.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      "deleteSourceFromS3",
      "Specifies whether delete a version's source bundle from S3 when the application version is deleted.",
      [],
      true,
      false,
    ),
  ];
}
