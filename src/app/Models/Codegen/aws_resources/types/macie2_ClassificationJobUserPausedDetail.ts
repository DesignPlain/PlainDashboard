import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface macie2_ClassificationJobUserPausedDetail {
  //
  jobExpiresAt?: string;

  //
  jobImminentExpirationHealthEventArn?: string;

  //
  jobPausedAt?: string;
}

export function macie2_ClassificationJobUserPausedDetail_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(InputType.String, "jobExpiresAt", "", [], false, false),
    new DynamicUIProps(
      InputType.String,
      "jobImminentExpirationHealthEventArn",
      "",
      [],
      false,
      false,
    ),
    new DynamicUIProps(InputType.String, "jobPausedAt", "", [], false, false),
  ];
}
